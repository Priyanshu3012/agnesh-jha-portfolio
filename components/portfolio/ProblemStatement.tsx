import Image from "next/image";
import { oldScreenshots, problemStatement } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";
import LightboxGallery from "./LightboxGallery";

export default function ProblemStatement() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Problem Statement
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Old website issues
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="mt-10 overflow-x-auto rounded-2xl border border-border"
        >
          <table className="w-full min-w-[480px] border-collapse text-left">
            <caption className="sr-only">
              Problems identified on the old website
            </caption>
            <thead>
              <tr className="border-b border-border bg-surface">
                <th scope="col" className="px-5 py-3 text-sm font-semibold text-foreground">
                  Pain Point
                </th>
                <th scope="col" className="px-5 py-3 text-sm font-semibold text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {problemStatement.map((row, index) => (
                <tr
                  key={row.point}
                  className={index !== problemStatement.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="flex items-center gap-2 px-5 py-4 text-sm font-medium text-foreground">
                    <Image
                      src="/portfolio/point-icon.png"
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 shrink-0"
                    />
                    {row.point}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        <ScrollReveal delay={150} className="mt-10">
          <p className="text-sm font-medium text-muted">
            The old site, before the revamp:
          </p>
          <LightboxGallery
            images={oldScreenshots}
            captions
            className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
