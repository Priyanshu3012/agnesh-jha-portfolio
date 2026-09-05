import Image from "next/image";
import { projectMeta } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";

export default function ProjectMeta() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Introduction
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Project at a glance
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectMeta.map((item, index) => (
            <ScrollReveal key={item.label} delay={(index % 3) * 100}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                <Image
                  src={item.icon}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-xl object-contain"
                />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
