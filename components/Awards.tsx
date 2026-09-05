import Image from "next/image";
import { awards } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Awards() {
  return (
    <section id="awards" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Awards
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Recognitions
          </h2>
        </ScrollReveal>

        {awards.map((award) => (
          <ScrollReveal key={award.title} delay={100} className="mt-10">
            <div className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-surface-2">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-accent">
                  {award.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {award.title}
                </h3>
                <ul className="mt-4 space-y-2 text-muted">
                  {award.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ▹
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={award.reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-accent underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {award.reference.label}
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
