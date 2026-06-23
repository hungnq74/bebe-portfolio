"use client";

import { useState } from "react";
import { caseStudies, type CaseStudy } from "@/data/cases";
import { BehindBaker } from "@/components/behind-baker";
import { CaseStudyDrawer } from "@/components/case-study-drawer";
import { ContactPanel } from "@/components/contact-panel";
import { Footer } from "@/components/footer";
import { HeroBakeryScene } from "@/components/hero-bakery-scene";
import { IngredientMarquee } from "@/components/ingredient-marquee";
import { PortfolioTagMenu } from "@/components/portfolio-tag-menu";
import { SiteNav } from "@/components/site-nav";

export function PortfolioLanding() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteNav />
      <HeroBakeryScene onOpenCase={() => setSelectedCase(caseStudies[0])} />
      <PortfolioTagMenu
        cases={caseStudies}
        onSelect={setSelectedCase}
        selectedId={selectedCase?.id}
      />
      <IngredientMarquee />
      <BehindBaker />
      <ContactPanel />
      <Footer />
      <CaseStudyDrawer
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </main>
  );
}
