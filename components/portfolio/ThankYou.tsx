import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function ThankYou() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Image
            src="/portfolio/thank-you.png"
            alt="Thank you for watching"
            width={528}
            height={215}
            className="mx-auto h-auto w-full max-w-md"
          />
          <Link
            href="/#portfolio"
            className="mt-8 inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Back to all projects
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
