"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";

export function HeroBakeryScene() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="menu-cover-hero flex items-end pt-28" id="top">
      <div aria-hidden="true" className="awning" />

      <div className="menu-cover-card section-shell relative z-10 grid min-h-[calc(82svh-7rem)] items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.9fr_0.8fr] lg:px-10 lg:py-10">
        <div className="relative z-10 max-w-[680px]">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-ink/25 bg-cream/70 px-3 py-1.5 text-[11px] font-black uppercase text-ink/78">
                Today&apos;s special
              </span>
              <span className="font-serif text-xl italic text-blue sm:text-2xl">
                photography
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-serif max-w-[720px] text-[clamp(3.8rem,8.4vw,8rem)] font-black leading-[0.86] text-berry">
              <span className="block">Khanh</span>
              <span className="block">Huyen</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-4 h-2 w-48 rounded-full bg-blue/80" />
            <p className="mt-5 max-w-[520px] text-base font-semibold leading-7 text-ink/78 sm:text-lg">
              A creative growth marketer brewed from product thinking, UA
              experiments, and a love for F&amp;B.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex h-12 items-center gap-3 rounded-full bg-berry px-6 text-xs font-black uppercase text-cream shadow-[0_14px_30px_rgba(85,32,31,0.28)] transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href="#about"
              >
                About me
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
              </a>
              <a
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-cream/68 px-5 text-xs font-black uppercase text-ink/76 transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href="#menu"
              >
                Explore menu
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.4} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <Link
              className="everyhalf-hero-card mt-7 flex max-w-[470px] items-center gap-4 rounded-[20px] border border-stamp/25 bg-cream/82 px-4 py-3 text-ink shadow-[0_18px_38px_rgba(55,25,24,0.14)] transition hover:-translate-y-1 hover:border-blue/32 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href="/everyhalf"
            >
              <span className="everyhalf-hero-badge" aria-hidden="true">
                Every
                <br />
                Half
              </span>
              <span className="min-w-0 flex-1">
                <span className="font-serif block text-xl font-black leading-none text-berry sm:text-2xl">
                  For EveryHalf
                </span>
                <span className="mt-1 block text-sm font-semibold leading-5 text-ink/66">
                  See why this brand has meant so much to me.
                </span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/12 bg-paper text-berry">
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </Reveal>
        </div>

        <motion.div
          animate={
            reduceMotion ? undefined : { y: [0, -8, 0], rotate: [1.5, -0.5, 1.5] }
          }
          className="today-special-tag relative min-h-[340px] sm:min-h-[440px] lg:min-h-[540px]"
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="today-special-paper-tag">
            <span aria-hidden="true" className="today-special-eyelet" />
            <span aria-hidden="true" className="today-special-string" />
            <div className="today-special-photo">
              <Image
                alt="Khanh Huyen portrait"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 30vw, 72vw"
                src="/images/khanh-huyen-portrait.jpg"
              />
            </div>
            <span aria-hidden="true" className="today-special-tape" />
          </div>
          <span aria-hidden="true" className="today-special-stamp stamp-ring">
            Brewed fresh
          </span>
        </motion.div>
      </div>
    </section>
  );
}
