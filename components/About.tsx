import { brandLinks } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About Me
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            10 years of turning ideas into impactful design
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I am Agnesh Jha, a Senior UI Visual Designer with 10 years of
            design experience, including 7 years in graphic design and 3+
            years in UI/Visual design. I specialize in creating intuitive,
            user-focused designs that balance creativity with functionality.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Currently, I manage design projects across two brands —{" "}
            {brandLinks.map((brand, index) => (
              <span key={brand.href}>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  {brand.name}
                </a>
                {index < brandLinks.length - 1 ? " and " : ""}
              </span>
            ))}
            . My role involves leading teams and overseeing websites, landing
            pages, blogs, marketing collaterals, sales decks, and paid ad
            creatives — ensuring brand consistency and delivering engaging
            user experiences.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I am passionate about transforming ideas into impactful designs
            that not only look great but also solve real user problems.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
