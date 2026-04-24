import { NextResponse } from "next/server";
import { createHash } from "crypto";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z][a-zA-Z\s.'-]{1,78}[a-zA-Z.]?$/;

function getMailConfig() {
  const gmailUser = process.env.GMAIL_USER?.trim() ?? "";
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.trim() ?? "";
  const contactRecipient = process.env.CONTACT_TO_EMAIL?.trim() || gmailUser;

  return {
    gmailUser,
    gmailAppPassword,
    contactRecipient
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validatePayload(payload: Partial<ContactPayload>) {
  const { name, email, subject, message, website } = payload;

  if (!name || !email || !subject || !message) {
    return "All fields are required";
  }

  if (website) {
    return "Spam protection triggered";
  }

  if (!nameRegex.test(name.trim()) || !emailRegex.test(email.trim())) {
    return "Please provide a valid email address";
  }

  if (message.trim().length < 10) {
    return "Message must be at least 10 characters long";
  }

  return null;
}

function createDigest(payload: ContactPayload, timestamp: string) {
  return createHash("sha512")
    .update(
      [
        payload.name.trim(),
        payload.email.trim(),
        payload.subject.trim(),
        payload.message.trim(),
        payload.website?.trim() ?? "",
        timestamp
      ].join("|")
    )
    .digest("hex");
}

export async function POST(request: Request) {
  try {
    const { gmailUser, gmailAppPassword, contactRecipient } = getMailConfig();

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD in your Vercel project environment variables."
        },
        { status: 500 }
      );
    }

    if (
      gmailUser.includes("your_") ||
      gmailAppPassword.includes("your_") ||
      gmailAppPassword === "your_gmail_app_password_here"
    ) {
      return NextResponse.json(
        {
          error:
            "Set your real Gmail address and Gmail App Password in the deployment environment variables before sending messages."
        },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as Partial<ContactPayload>;
    const validationError = validatePayload(payload);
    const timestamp = request.headers.get("x-contact-timestamp");
    const digest = request.headers.get("x-contact-digest");

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (!timestamp || !digest) {
      return NextResponse.json({ error: "Missing request protection headers" }, { status: 400 });
    }

    const timestampValue = Number(timestamp);

    if (!Number.isFinite(timestampValue) || Math.abs(Date.now() - timestampValue) > 10 * 60 * 1000) {
      return NextResponse.json({ error: "Request expired. Please try again." }, { status: 400 });
    }

    const safePayload = payload as ContactPayload;
    const expectedDigest = createDigest(safePayload, timestamp);

    if (digest !== expectedDigest) {
      return NextResponse.json({ error: "Request validation failed" }, { status: 400 });
    }

    const { name, email, subject, message } = safePayload;
    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });

    await transporter.sendMail({
      from: gmailUser,
      to: contactRecipient,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="background:#0b1020;padding:32px;font-family:Arial,sans-serif;color:#e5ecff;">
          <div style="max-width:640px;margin:0 auto;background:#121933;border:1px solid #2a3568;border-radius:20px;overflow:hidden;">
            <div style="padding:24px 28px;background:linear-gradient(90deg,#6d6cff,#20d7d5);color:#ffffff;">
              <h1 style="margin:0;font-size:24px;">New Portfolio Contact Message</h1>
              <p style="margin:8px 0 0;font-size:14px;opacity:0.92;">A new inquiry was submitted from your portfolio form.</p>
            </div>
            <div style="padding:28px;">
              <div style="margin-bottom:18px;">
                <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8ea2ff;">Sender Name</p>
                <p style="margin:0;font-size:16px;color:#ffffff;">${escapeHtml(name)}</p>
              </div>
              <div style="margin-bottom:18px;">
                <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8ea2ff;">Sender Email</p>
                <p style="margin:0;font-size:16px;color:#ffffff;">${escapeHtml(email)}</p>
              </div>
              <div style="margin-bottom:18px;">
                <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8ea2ff;">Subject</p>
                <p style="margin:0;font-size:16px;color:#ffffff;">${escapeHtml(subject)}</p>
              </div>
              <div style="margin-bottom:18px;">
                <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8ea2ff;">Message</p>
                <div style="background:#0d1430;border:1px solid #26325f;border-radius:16px;padding:18px;white-space:pre-wrap;line-height:1.7;color:#dfe6ff;">${escapeHtml(message)}</div>
              </div>
              <div>
                <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8ea2ff;">Timestamp</p>
                <p style="margin:0;font-size:14px;color:#b9c6ff;">${escapeHtml(submittedAt)}</p>
              </div>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send your message right now. Please try again.";

    return NextResponse.json(
      {
        error:
          message.includes("Username and Password not accepted") ||
          message.includes("Invalid login")
            ? "Gmail rejected the login. Use a valid Gmail App Password in your deployment environment variables."
            : message
      },
      { status: 500 }
    );
  }
}
