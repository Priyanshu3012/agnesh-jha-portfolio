import type { Metadata } from "next";
import { site } from "@/lib/data";
import { portfolioMeta } from "@/lib/portfolioData";
import Footer from "@/components/Footer";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectMeta from "@/components/portfolio/ProjectMeta";
import Objective from "@/components/portfolio/Objective";
import ProblemStatement from "@/components/portfolio/ProblemStatement";
import Goals from "@/components/portfolio/Goals";
import UxStrategy from "@/components/portfolio/UxStrategy";
import Persona from "@/components/portfolio/Persona";
import AfterRevamp from "@/components/portfolio/AfterRevamp";
import Metrics from "@/components/portfolio/Metrics";
import StyleGuide from "@/components/portfolio/StyleGuide";
import ThankYou from "@/components/portfolio/ThankYou";

const canonicalUrl = `${site.url}${portfolioMeta.path}`;
const ogImageUrl = `${site.url}${portfolioMeta.ogImage}`;

export const metadata: Metadata = {
  title: { absolute: portfolioMeta.title },
  description: portfolioMeta.description,
  keywords: portfolioMeta.keywords,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    title: portfolioMeta.title,
    description: portfolioMeta.description,
    siteName: site.name,
    images: [
      {
        url: ogImageUrl,
        width: 1786,
        height: 1081,
        alt: "MyOperator website revamp — case study cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioMeta.title,
    description: portfolioMeta.description,
    images: [ogImageUrl],
  },
};

export default function PortfolioCaseStudyPage() {
  return (
    <>
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <ProjectMeta />
        <Objective />
        <ProblemStatement />
        <Goals />
        <UxStrategy />
        <Persona />
        <AfterRevamp />
        <Metrics />
        <StyleGuide />
        <ThankYou />
      </main>
      <Footer backHref="/" />
    </>
  );
}
