import Image from "next/image";
import { goals } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";

export default function Goals() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Goals
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Goals for the redesign
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {goals.map((goal) => (
            <div
              key={goal}
              className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5"
            >
              <Image
                src="/portfolio/point-icon.png"
                alt=""
                width={16}
                height={16}
                className="mt-1 h-4 w-4 shrink-0"
              />
              <p className="text-sm leading-relaxed text-foreground">
                {goal}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
