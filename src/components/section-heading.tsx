type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="section-pill mx-auto">{eyebrow}</p>
      <h2 className="section-title mt-6">{title}</h2>
      <p className="section-copy mx-auto mt-5">{description}</p>
    </div>
  );
}

