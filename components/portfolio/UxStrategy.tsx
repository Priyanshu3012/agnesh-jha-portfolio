import { uxSteps, wireframes } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";
import LightboxGallery from "./LightboxGallery";

export default function UxStrategy() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Process
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            UX strategy &amp; wireframes
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {uxSteps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 100}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <span className="font-heading text-3xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200} className="mt-10">
          <LightboxGallery
            images={wireframes}
            captions
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
