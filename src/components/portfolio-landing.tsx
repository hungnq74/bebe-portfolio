"use client";

import { useState } from "react";
import { caseStudies, type CaseStudy } from "@/data/cases";
import { BehindBaker } from "@/components/behind-baker";
import { CaseStudyDrawer } from "@/components/case-study-drawer";
import { ContactPanel } from "@/components/contact-panel";
import { Footer } from "@/components/footer";
import { GrowthIngredients } from "@/components/growth-ingredients";
import { HeroBakeryScene } from "@/components/hero-bakery-scene";
import { PrimaryJobsSection } from "@/components/primary-jobs-section";
import { SiteNav } from "@/components/site-nav";

export function PortfolioLanding() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <main className="min-h-screen">
      <SiteNav />
      <HeroBakeryScene />
      <GrowthIngredients />
      <BehindBaker />
      <PrimaryJobsSection
        cases={caseStudies}
        onSelectCase={setSelectedCase}
        selectedCaseId={selectedCase?.id}
      />
      <ContactPanel />
      <Footer />
      <CaseStudyDrawer
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </main>
  );
}
