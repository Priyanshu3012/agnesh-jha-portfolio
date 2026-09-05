import Image from "next/image";
import { site, stats } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border px-6 pb-20 pt-16 sm:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-accent-2/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Senior UI Visual Designer
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Hello, I&apos;m <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.description} I specialize in creating intuitive,
            user-focused designs that balance creativity with functionality.
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Let&apos;s Talk
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40">
            <Image
              src="/images/agnesh-jha.jpeg"
              alt="Portrait of Agnesh Jha, Senior UI Visual Designer"
              fill
              sizes="(max-width: 1024px) 60vw, 400px"
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
