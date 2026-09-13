type SectionHeadingProps = { eyebrow?: string; title: string; description?: string };

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return <div className="max-w-2xl">
    {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p> : null}
    <h2 className="mt-3 font-brand-display text-4xl leading-none text-white sm:text-5xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-mist">{description}</p> : null}
  </div>;
}
