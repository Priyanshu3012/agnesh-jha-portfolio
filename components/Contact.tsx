import { site, socialLinks } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const contactMethods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsapp,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s work together!
          </h2>
          <p className="mt-4 text-muted">
            Have a project in mind? Reach out through any of the channels
            below.
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                {method.label}
              </p>
              <p className="mt-2 break-words text-base font-semibold text-foreground">
                {method.value}
              </p>
            </a>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-10">
          <ul className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-border px-5 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
