"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

const OPEN_DURATION_MS = 1650;
const REDUCED_MOTION_DURATION_MS = 260;

export function PortfolioCoverGate() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const reduceMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;

    html.classList.add("portfolio-cover-scroll-lock");
    body.classList.add("portfolio-cover-scroll-lock");
    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
    buttonRef.current?.focus({ preventScroll: true });

    return () => {
      html.classList.remove("portfolio-cover-scroll-lock");
      body.classList.remove("portfolio-cover-scroll-lock");
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isOpening) {
      return;
    }

    const duration = reduceMotion
      ? REDUCED_MOTION_DURATION_MS
      : OPEN_DURATION_MS;
    const timer = window.setTimeout(() => {
      window.scrollTo({ left: 0, top: 0, behavior: "auto" });
      setIsVisible(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [isOpening, reduceMotion]);

  const openCover = () => {
    if (isOpening) {
      return;
    }

    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
    setIsOpening(true);
  };

  const handleFoldKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") {
      return;
    }

    event.preventDefault();
    openCover();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      aria-hidden={isOpening}
      className="portfolio-cover"
      data-opening={isOpening ? "true" : "false"}
      data-reduced-motion={reduceMotion ? "true" : "false"}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div aria-hidden="true" className="portfolio-cover-panel portfolio-cover-panel-left" />
      <div aria-hidden="true" className="portfolio-cover-panel portfolio-cover-panel-right" />
      <div aria-hidden="true" className="portfolio-cover-awning">
        <div className="portfolio-cover-awning-slice portfolio-cover-awning-left" />
        <div className="portfolio-cover-awning-slice portfolio-cover-awning-right" />
      </div>
      <div aria-hidden="true" className="portfolio-cover-seam" />

      <div className="portfolio-cover-content">
        <p className="portfolio-cover-kicker">Creative marketing</p>
        <h1 className="portfolio-cover-title">Khanh Huyen&apos;s Portfolio</h1>
        <p className="portfolio-cover-hint">Pull the tab below to open</p>
      </div>

      <button
        aria-label="Open Khanh Huyen's portfolio"
        className="portfolio-cover-pull-button"
        disabled={isOpening}
        onKeyDown={handleFoldKeyDown}
        onClick={openCover}
        ref={buttonRef}
        type="button"
      >
        <span aria-hidden="true" className="portfolio-cover-cord" />
        <span aria-hidden="true" className="portfolio-cover-cord-knot" />
        <span className="portfolio-cover-pull-tab">Open menu</span>
      </button>
    </motion.div>
  );
}
