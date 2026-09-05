import { skills } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="tools" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Ways of Working
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Skills used to create world-class products
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.title} delay={(index % 3) * 100}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
