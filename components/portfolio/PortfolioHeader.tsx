"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { resumeHref, subNavLinks } from "@/lib/portfolioData";
import { site } from "@/lib/data";

export default function PortfolioHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logos/agnesh-jha-mark.png"
            alt="Agnesh Jha logo"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-sm font-semibold tracking-wide text-foreground">
            Agnesh Jha
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {subNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="portfolio-mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <div className="flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <nav
        id="portfolio-mobile-nav"
        aria-label="Mobile"
        className={`fixed inset-x-0 top-[65px] z-40 origin-top border-b border-border bg-background transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible max-h-[80vh] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {subNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-border pt-3">
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md bg-accent px-3 py-3 text-center text-base font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
