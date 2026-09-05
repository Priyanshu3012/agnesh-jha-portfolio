import Image from "next/image";
import { clients } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Clients() {
  return (
    <section id="freelance-clients" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Freelance Clients
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Brands & businesses I&apos;ve worked with
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex aspect-[3/2] items-center justify-center rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="relative h-full w-full">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 640px) 40vw, 200px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
