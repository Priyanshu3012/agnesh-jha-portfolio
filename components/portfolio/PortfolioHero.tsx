import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function PortfolioHero() {
  return (
    <section className="border-b border-border px-6 pb-16 pt-14 sm:pt-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="flex flex-wrap items-center gap-4">
          <Image
            src="/portfolio/agnesh-portfolio.png"
            alt="Portrait of Agnesh Jha"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-border"
          />
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Case Study
            </p>
            <h1 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              MyOperator Website Revamp
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="relative mt-10 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/40"
        >
          <Image
            src="/portfolio/home-banner.png"
            alt="MyOperator revamp homepage banner, shown on desktop and mobile"
            width={1786}
            height={1081}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
