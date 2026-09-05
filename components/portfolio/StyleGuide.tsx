import { styleGuide } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";
import LightboxGallery from "./LightboxGallery";

export default function StyleGuide() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Design System
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Style guide
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-10">
          <LightboxGallery
            images={styleGuide}
            captions
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
