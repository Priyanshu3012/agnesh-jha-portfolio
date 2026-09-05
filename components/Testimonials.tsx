import Image from "next/image";
import { testimonials } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            What people say
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={(index % 3) * 100}
              className={index === testimonials.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6">
                <blockquote className="text-sm leading-relaxed text-muted before:content-['\201C'] after:content-['\201D']">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    {testimonial.title && (
                      <p className="text-xs text-muted">{testimonial.title}</p>
                    )}
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
