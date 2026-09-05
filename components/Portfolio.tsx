import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A selection of work spanning website design, sales collateral,
            email marketing, paid ads, and infographics.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isInternal = project.href.startsWith("/");
            const CardLink = isInternal ? Link : "a";
            const externalProps = isInternal
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" };

            return (
              <ScrollReveal key={project.title} delay={(index % 3) * 100}>
                <CardLink
                  href={project.href}
                  {...externalProps}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {project.description}
                    </p>
                  </div>
                </CardLink>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
