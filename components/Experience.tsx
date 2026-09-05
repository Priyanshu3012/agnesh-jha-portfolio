import { brandLinks, stats } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const experience = [
  {
    role: "Senior UI Visual Designer (Assistant Manager)",
    company: "MyOperator & Heyo",
    period: "Current",
    description:
      "Leading design across two brands — overseeing websites, landing pages, blogs, marketing collaterals, sales decks, and paid ad creatives, ensuring brand consistency and engaging user experiences.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            A decade of design, in brief
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-6">
          {experience.map((job, index) => (
            <ScrollReveal key={job.company} delay={index * 100}>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <span className="text-sm text-accent">{job.period}</span>
                </div>
                <p className="mt-1 text-muted">
                  {brandLinks.map((brand, i) => (
                    <span key={brand.href}>
                      <a
                        href={brand.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                      >
                        {brand.name}
                      </a>
                      {i < brandLinks.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  {job.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150} className="mt-10 flex flex-wrap gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
