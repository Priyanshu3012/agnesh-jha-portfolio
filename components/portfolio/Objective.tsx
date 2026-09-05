import { competitors, objective } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";

export default function Objective() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Objective
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {objective}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Competitors
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {competitors.map((name) => (
              <li
                key={name}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground"
              >
                {name}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
