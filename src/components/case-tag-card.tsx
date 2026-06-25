"use client";

import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { CaseStudy } from "@/data/cases";
import { cn } from "@/lib/utils";

type CaseTagCardProps = {
  caseStudy: CaseStudy;
  index: number;
  isSelected: boolean;
  onSelect: (caseStudy: CaseStudy) => void;
};

type TagStyle = CSSProperties & {
  "--tag-bg": string;
  "--tag-ink": string;
  "--tag-accent": string;
  "--case-image": string;
  "--case-position": string;
};

export function CaseTagCard({
  caseStudy,
  index,
  isSelected,
  onSelect,
}: CaseTagCardProps) {
  const reduceMotion = useReducedMotion();
  const style: TagStyle = {
    "--tag-bg": caseStudy.palette.background,
    "--tag-ink": caseStudy.palette.ink,
    "--tag-accent": caseStudy.palette.accent,
    "--case-image": `url(${caseStudy.image})`,
    "--case-position": caseStudy.imagePosition,
  };

  return (
    <motion.button
      aria-pressed={isSelected}
      className={cn(
        "case-tag group flex w-full flex-col justify-between p-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue",
        `case-tag-${caseStudy.shape}`,
        caseStudy.palette.ink === "#fff8e9" && "case-tag-dark",
      )}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 24, rotate: index % 2 ? 1.5 : -1.5 }
      }
      onClick={() => onSelect(caseStudy)}
      style={style}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.05, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
      type="button"
      viewport={{ once: true, margin: "-8% 0px" }}
      whileHover={
        reduceMotion ? undefined : { y: -12, rotate: index % 2 ? -1.5 : 1.5 }
      }
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }
      }
      whileTap={{ scale: 0.985 }}
    >
      <span className="pointer-events-none relative z-10 mt-8 block">
        <span className="block text-[10px] font-black uppercase opacity-[0.62]">
          Signature recipe
        </span>
        <span className="font-serif mt-1 block text-[clamp(1.7rem,4.6vw,2.8rem)] font-black leading-[0.92]">
          {caseStudy.title}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="case-media pointer-events-none relative z-10 my-4 block aspect-[1.12] w-full overflow-hidden rounded-[18px] border border-current/10 shadow-inner"
      >
        <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-70" />
      </span>

      <span className="pointer-events-none relative z-10 block">
        <span className="mb-3 flex flex-wrap gap-1.5">
          {caseStudy.services.slice(0, 2).map((service) => (
            <span
              className="rounded-full border border-current/18 bg-white/18 px-2 py-1 text-[9px] font-black uppercase"
              key={service}
            >
              {service}
            </span>
          ))}
        </span>
        <span className="flex items-end justify-between gap-4 text-[10px] font-black uppercase leading-4">
          <span>{caseStudy.tagline}</span>
          <ArrowUpRight
            aria-hidden="true"
            className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            size={16}
            strokeWidth={2.5}
          />
        </span>
      </span>
    </motion.button>
  );
}
