import { site } from "@/lib/data";

export default function Footer({
  backHref = "#home",
}: {
  backHref?: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <a href={backHref} className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
