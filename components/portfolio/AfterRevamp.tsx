import {
  afterRevampScreenshots,
  iconComparison,
  navComparison,
} from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";
import LightboxGallery from "./LightboxGallery";

export default function AfterRevamp() {
  const comparisonPairs = [
    { title: "Icons", before: iconComparison.before, after: iconComparison.after },
    { title: "Navigation Menu", before: navComparison.before, after: navComparison.after },
  ];

  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            The Redesign
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            After revamp changes
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-10">
          {comparisonPairs.map((pair, index) => (
            <ScrollReveal key={pair.title} delay={index * 100}>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {pair.title}
              </h3>
              <LightboxGallery
                images={[pair.before, pair.after]}
                captions
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200} className="mt-12">
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            The revamped site
          </h3>
          <LightboxGallery
            images={afterRevampScreenshots}
            captions
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
