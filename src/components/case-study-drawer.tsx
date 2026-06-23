"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { CaseStudy } from "@/data/cases";

type CaseStudyDrawerProps = {
  caseStudy: CaseStudy | null;
  onClose: () => void;
};

export function CaseStudyDrawer({ caseStudy, onClose }: CaseStudyDrawerProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!caseStudy) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy ? (
        <motion.div
          aria-modal="true"
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex justify-end"
          exit={{ opacity: 0 }}
          initial={reduceMotion ? false : { opacity: 0 }}
          role="dialog"
        >
          <button
            aria-hidden="true"
            className="drawer-backdrop absolute inset-0 cursor-default"
            onClick={onClose}
            tabIndex={-1}
            type="button"
          />

          <motion.aside
            animate={{ x: 0 }}
            className="relative h-full w-full max-w-[620px] overflow-y-auto bg-cream shadow-[0_0_90px_rgba(20,12,10,0.32)]"
            data-lenis-prevent
            exit={{ x: "100%" }}
            initial={reduceMotion ? false : { x: "100%" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-cream/88 px-5 py-4 backdrop-blur-md sm:px-8">
              <span className="text-[11px] font-black uppercase text-ink/58">
                Case recipe
              </span>
              <button
                aria-label="Close case study"
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/12 bg-paper text-ink transition hover:-translate-y-0.5 hover:bg-paper-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                onClick={onClose}
                type="button"
              >
                <X aria-hidden="true" size={17} strokeWidth={2.6} />
              </button>
            </div>

            <div className="px-5 pb-10 pt-7 sm:px-8">
              <div className="relative aspect-[1.35] overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-[0_16px_44px_rgba(55,25,24,0.14)]">
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="(min-width: 760px) 560px, 100vw"
                  src={caseStudy.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-white/10" />
              </div>

              <p className="font-hand mt-8 text-3xl text-blue">now serving</p>
              <h2 className="font-display mt-1 text-[clamp(4rem,15vw,7rem)] leading-[0.82] text-berry">
                {caseStudy.title}
              </h2>
              <p className="mt-5 text-xl font-black leading-7 text-ink">
                {caseStudy.tagline}
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-ink/72">
                {caseStudy.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {caseStudy.services.map((service) => (
                  <span
                    className="rounded-full border border-ink/12 bg-paper px-3 py-2 text-[11px] font-black uppercase text-ink/68"
                    key={service}
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-ink/10 bg-paper/82 p-5 shadow-[0_10px_30px_rgba(55,25,24,0.08)]">
                <h3 className="text-xs font-black uppercase text-ink/60">
                  What this recipe includes
                </h3>
                <ul className="mt-4 space-y-3">
                  {caseStudy.results.map((result) => (
                    <li
                      className="flex gap-3 text-sm font-bold leading-6 text-ink/78"
                      key={result}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-blue"
                        size={16}
                        strokeWidth={2.7}
                      />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-berry px-6 text-xs font-black uppercase text-cream shadow-[0_14px_30px_rgba(85,32,31,0.24)] transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href="#contact"
                onClick={onClose}
              >
                Talk about this style
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
              </a>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
