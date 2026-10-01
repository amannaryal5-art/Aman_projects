import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Syne } from "next/font/google";
import { ParticleBackground } from "@/components/ParticleBackground";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Aman Naryal",
  description:
    "Aman Naryal is a Full Stack Developer building APIs, products, and polished web experiences."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16181E"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#16181E] text-[#F4F6F8]">
      <body className={`${dmSans.variable} ${syne.variable} ${ibmPlexMono.variable} isolate font-sans antialiased`}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
