"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";

type HeroBakerySceneProps = {
  onOpenCase: () => void;
};

export function HeroBakeryScene({ onOpenCase }: HeroBakerySceneProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-scene flex items-end pt-28" id="top">
      <div className="hero-image">
        <Image
          alt=""
          fill
          priority
          sizes="100vw"
          src="/images/generated/hero-pastry-still-life.png"
        />
      </div>

      <div className="section-shell relative z-10 grid min-h-[calc(78svh-7rem)] items-center gap-10 py-8 lg:grid-cols-[0.95fr_0.82fr] lg:py-10">
        <div className="max-w-[650px]">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-ink/25 bg-cream/70 px-3 py-1.5 text-[11px] font-black uppercase text-ink/78">
                Creative marketer
              </span>
              <span className="font-hand text-2xl text-blue">
                for brands people crave
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display max-w-[620px] text-[clamp(3.4rem,7.6vw,6.4rem)] leading-[0.9] text-berry">
              I turn brands into daily cravings.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-ink/78 sm:text-lg">
              Bebe blends strategy, storytelling, and scroll-stopping creative
              into portfolio work that feels handmade, useful, and ready to
              launch.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                className="inline-flex h-12 items-center gap-3 rounded-full bg-berry px-6 text-xs font-black uppercase text-cream shadow-[0_14px_30px_rgba(85,32,31,0.28)] transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                onClick={onOpenCase}
                type="button"
              >
                View my work
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
              </button>
              <a
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-cream/68 px-5 text-xs font-black uppercase text-ink/76 transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href="#work"
              >
                Browse menu
                <ArrowDown aria-hidden="true" size={15} strokeWidth={2.4} />
              </a>
              <a
                className="inline-flex h-12 items-center gap-2 px-2 text-xs font-black uppercase text-ink/68 transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href="#contact"
              >
                Download CV
                <Download aria-hidden="true" size={14} strokeWidth={2.4} />
              </a>
            </div>
          </Reveal>
        </div>

        <motion.div
          animate={
            reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-2, 1, -2] }
          }
          className="paper-tag mx-auto hidden w-full max-w-[330px] px-7 pb-8 pt-16 text-center sm:block lg:max-w-[360px]"
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[11px] font-black uppercase text-stamp">Hello</p>
          <p className="font-hand mt-2 text-3xl text-blue">I&apos;m</p>
          <p className="font-serif mt-1 text-[clamp(2.7rem,4.1vw,4.2rem)] font-black leading-[0.88] text-ink">
            Your Creative Marketer
          </p>
          <div className="mx-auto mt-6 grid h-20 w-20 place-items-center rounded-full border-2 border-dashed border-blue/55 text-blue">
            <span className="font-hand text-3xl">b</span>
          </div>
          <p className="mt-6 text-[11px] font-black uppercase text-ink/66">
            Strategy - Creative - Growth
          </p>
          <span className="stamp-ring mx-auto mt-4 inline-flex px-4 py-2 text-[11px] font-black uppercase">
            Made to crave
          </span>
        </motion.div>
      </div>
    </section>
  );
}
