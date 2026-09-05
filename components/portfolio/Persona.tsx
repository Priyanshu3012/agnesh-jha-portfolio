import Image from "next/image";
import { persona } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";

export default function Persona() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            User Persona
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Who we designed for
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[220px_1fr] lg:items-start">
            <div className="mx-auto w-40 shrink-0 lg:mx-0 lg:w-full">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={persona.image}
                  alt={`Portrait of ${persona.name}, user persona`}
                  fill
                  sizes="(max-width: 1024px) 160px, 220px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-center text-lg font-semibold text-foreground lg:text-left">
                {persona.name}
              </h3>
              <p className="text-center text-sm italic text-accent lg:text-left">
                “{persona.tagline}”
              </p>
              <dl className="mt-4 space-y-1 text-center text-sm text-muted lg:text-left">
                <div>
                  <dt className="inline font-medium text-foreground">Age: </dt>
                  <dd className="inline">{persona.age}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">
                    Location:{" "}
                  </dt>
                  <dd className="inline">{persona.location}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">
                    Occupation:{" "}
                  </dt>
                  <dd className="inline">{persona.occupation}</dd>
                </div>
              </dl>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {persona.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {section.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
