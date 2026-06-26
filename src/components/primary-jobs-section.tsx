"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaseTagCard } from "@/components/case-tag-card";
import { Reveal } from "@/components/reveal";
import type { CaseStudy } from "@/data/cases";
import {
  defaultPrimaryJobId,
  primaryJobs,
  type PrimaryJob,
  type PrimaryJobId,
} from "@/data/jobs";
import { cn } from "@/lib/utils";

type PrimaryJobsSectionProps = {
  cases: CaseStudy[];
  onSelectCase: (caseStudy: CaseStudy) => void;
  selectedCaseId?: string;
};

type JobStyle = CSSProperties & {
  "--job-bg": string;
  "--job-ink": string;
  "--job-accent": string;
};

function jobStyle(job: PrimaryJob): JobStyle {
  return {
    "--job-bg": job.theme.background,
    "--job-ink": job.theme.ink,
    "--job-accent": job.theme.accent,
  };
}

export function PrimaryJobsSection({
  cases,
  onSelectCase,
  selectedCaseId,
}: PrimaryJobsSectionProps) {
  const [activeJobId, setActiveJobId] =
    useState<PrimaryJobId>(defaultPrimaryJobId);
  const detailRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const activeJob =
    primaryJobs.find((job) => job.id === activeJobId) ?? primaryJobs[0];

  const selectJob = (jobId: PrimaryJobId) => {
    setActiveJobId(jobId);

    if (!window.matchMedia("(min-width: 1024px)").matches) {
      window.requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <section
      className="primary-jobs paper-edge scroll-mt-28 bg-paper py-14 sm:py-20"
      id="work"
    >
      <div className="section-shell">
        <Reveal className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="font-hand text-2xl text-stamp">choose your station</p>
            <h2 className="font-display mt-1 text-5xl leading-none text-ink sm:text-7xl">
              Signature Recipes
            </h2>
          </div>
          <p className="max-w-xl text-sm font-semibold leading-6 text-ink/66 sm:text-base">
            Three roles from the Growth Bar menu. Pick a card to see the
            matching proof of work below.
          </p>
        </Reveal>

        <div className="primary-job-picker">
          <div className="grid gap-4 sm:grid-cols-3">
            {primaryJobs.map((job, index) => {
              const isActive = job.id === activeJob.id;

              return (
                <motion.button
                  aria-label={`Show ${job.company} work`}
                  aria-pressed={isActive}
                  className="primary-job-card group text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                  data-active={isActive ? "true" : "false"}
                  data-job-id={job.id}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 20, rotate: index % 2 ? 1 : -1 }
                  }
                  key={job.id}
                  onClick={() => selectJob(job.id)}
                  style={jobStyle(job)}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.06, 0.2),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  type="button"
                  whileHover={
                    reduceMotion ? undefined : { y: -6, rotate: isActive ? 0 : 1 }
                  }
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <span className="primary-job-visual">
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 380px, 32vw"
                      src={job.visual.decor}
                    />
                    <span className="primary-job-logo">
                      <Image
                        alt={job.visual.logoAlt}
                        className="object-contain"
                        fill
                        sizes="180px"
                        src={job.visual.logo}
                      />
                    </span>
                  </span>
                  <span className="relative z-10 block p-4">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-black uppercase text-[var(--job-ink)]/60">
                        {job.company}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="text-[var(--job-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        size={15}
                        strokeWidth={2.5}
                      />
                    </span>
                    <span className="font-serif mt-2 block text-2xl font-black leading-none text-[var(--job-ink)]">
                      {job.shortName}
                    </span>
                    <span className="mt-2 block text-[10px] font-black uppercase leading-4 text-[var(--job-ink)]/62">
                      {job.role}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 scroll-mt-40" ref={detailRef}>
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              key={activeJob.id}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeJob.kind === "recipes" ? (
                <FortuneJobDetail
                  cases={cases}
                  job={activeJob}
                  onSelectCase={onSelectCase}
                  selectedCaseId={selectedCaseId}
                />
              ) : (
                <StoryJobDetail job={activeJob} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function JobHeader({ job }: { job: PrimaryJob }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-center">
      <div>
        <p className="font-hand text-2xl text-stamp">{job.company}</p>
        <h3 className="font-display mt-1 text-5xl leading-none text-ink sm:text-7xl">
          {job.role}
        </h3>
        <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-ink/72">
          {job.intro}
        </p>
      </div>

      <div
        className="primary-job-feature-visual relative aspect-[1.45] overflow-hidden rounded-[26px] border border-ink/10 bg-cream shadow-[0_20px_56px_rgba(55,25,24,0.14)]"
        data-job-id={job.id}
      >
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 38vw, 92vw"
          src={job.visual.decor}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/22 via-transparent to-white/10" />
        <div className="primary-job-feature-logo">
          <Image
            alt={job.visual.logoAlt}
            className="object-contain"
            fill
            sizes="220px"
            src={job.visual.logo}
          />
        </div>
      </div>
    </div>
  );
}

function JobMetrics({ job }: { job: PrimaryJob }) {
  return (
    <div className="primary-job-metrics">
      {job.metrics.map((metric, index) => (
        <article className="primary-job-metric" key={`${metric.value}-${metric.label}`}>
          <div className="primary-job-metric-kicker">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>Proof point</span>
          </div>
          <div className="primary-job-metric-value">{metric.value}</div>
          <div className="primary-job-metric-rule" />
          <p className="primary-job-metric-label">{metric.label}</p>
          {metric.note ? (
            <p className="primary-job-metric-note">{metric.note}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function FortuneJobDetail({
  cases,
  job,
  onSelectCase,
  selectedCaseId,
}: {
  cases: CaseStudy[];
  job: PrimaryJob;
  onSelectCase: (caseStudy: CaseStudy) => void;
  selectedCaseId?: string;
}) {
  return (
    <div
      className="primary-job-detail"
      data-job-id={job.id}
      style={jobStyle(job)}
    >
      <JobHeader job={job} />

      <JobMetrics job={job} />

      <div className="mt-10">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-hand text-2xl text-stamp">freshly baked</p>
            <h3 className="font-display text-5xl leading-none text-ink sm:text-6xl">
              Growth Bar Menu
            </h3>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-ink/68 sm:text-base">
              Six F&amp;B recipes served with strategy, experiments, and proof
              of work.
            </p>
          </div>
          <div className="stamp-ring inline-flex w-fit px-5 py-3 text-xs font-black uppercase">
            Click a recipe
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cases.map((caseStudy, index) => (
            <CaseTagCard
              caseStudy={caseStudy}
              index={index}
              isSelected={selectedCaseId === caseStudy.id}
              key={caseStudy.id}
              onSelect={onSelectCase}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryJobDetail({ job }: { job: PrimaryJob }) {
  return (
    <div
      className="primary-job-detail"
      data-job-id={job.id}
      style={jobStyle(job)}
    >
      <JobHeader job={job} />

      <JobMetrics job={job} />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {job.details.map((detail) => (
          <article
            className={cn(
              "rounded-[22px] border border-ink/10 bg-cream/78 p-5 shadow-[0_12px_30px_rgba(55,25,24,0.08)]",
              detail.featured && "md:col-span-2",
            )}
            key={detail.title}
          >
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-full border border-[var(--job-accent)]/25 bg-white/50 text-[var(--job-accent)]">
              <Sparkles aria-hidden="true" size={18} strokeWidth={2.5} />
            </div>
            <h4 className="font-serif text-2xl font-black leading-none text-[var(--job-ink)]">
              {detail.title}
            </h4>
            <p className="mt-3 text-sm font-semibold leading-7 text-ink/72">
              {detail.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
