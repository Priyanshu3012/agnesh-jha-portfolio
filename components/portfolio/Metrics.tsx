import Image from "next/image";
import { metrics } from "@/lib/portfolioData";
import ScrollReveal from "../ScrollReveal";

export default function Metrics() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Results
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Impact after launch
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="mt-10 overflow-x-auto rounded-2xl border border-border"
        >
          <table className="w-full min-w-[520px] border-collapse text-left">
            <caption className="sr-only">
              Metrics before and after the redesign
            </caption>
            <thead>
              <tr className="border-b border-border bg-surface">
                <th scope="col" className="px-5 py-3 text-sm font-semibold text-foreground">
                  Metric
                </th>
                <th scope="col" className="px-5 py-3 text-sm font-semibold text-foreground">
                  Before
                </th>
                <th scope="col" className="px-5 py-3 text-sm font-semibold text-foreground">
                  After
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((row, index) => (
                <tr
                  key={row.metric}
                  className={index !== metrics.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="flex items-center gap-2 px-5 py-4 text-sm font-medium text-foreground">
                    <Image
                      src="/portfolio/point-icon.png"
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 shrink-0"
                    />
                    {row.metric}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted">{row.before}</td>
                  <td className="px-5 py-4 text-sm font-medium text-accent">
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
      </div>
    </section>
  );
}
