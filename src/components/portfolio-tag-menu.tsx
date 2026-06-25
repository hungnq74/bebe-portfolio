"use client";

import type { CaseStudy } from "@/data/cases";
import { CaseTagCard } from "@/components/case-tag-card";
import { Reveal } from "@/components/reveal";

type PortfolioTagMenuProps = {
  cases: CaseStudy[];
  onSelect: (caseStudy: CaseStudy) => void;
  selectedId?: string;
};

export function PortfolioTagMenu({
  cases,
  onSelect,
  selectedId,
}: PortfolioTagMenuProps) {
  return (
    <section
      className="paper-edge relative bg-paper-deep/75 py-14 sm:py-20"
      id="work"
    >
      <div className="section-shell">
        <Reveal className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-hand text-2xl text-stamp">freshly baked</p>
            <h2 className="font-display text-5xl leading-none text-ink sm:text-7xl">
              Growth Bar Menu
            </h2>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-ink/68 sm:text-base">
              Six F&amp;B recipes served with strategy, experiments, and proof
              of work.
            </p>
          </div>
          <div className="stamp-ring inline-flex w-fit px-5 py-3 text-xs font-black uppercase">
            Click a recipe
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseStudy, index) => (
            <CaseTagCard
              caseStudy={caseStudy}
              index={index}
              isSelected={selectedId === caseStudy.id}
              key={caseStudy.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
