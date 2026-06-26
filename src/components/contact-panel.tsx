"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";

const emailAddress = "huyenlk.forwork@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/huyenlk0612/";
const phoneNumber = "0946754166";

export function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = phoneNumber;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 1600);
  };

  return (
    <section className="bg-paper py-14 sm:py-20" id="contact">
      <div className="section-shell grid gap-7 border-y border-ink/10 py-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <Reveal>
          <p className="font-hand text-3xl text-blue">
            let&apos;s brew something useful
          </p>
          <h2 className="font-display mt-2 max-w-3xl text-5xl leading-[0.92] text-berry sm:text-7xl">
            Ready to brew the next growth experiment together?
          </h2>
          <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-ink/72">
            Share the messy idea, launch question, or growth signal worth
            testing. I&apos;ll bring the menu of creative, product thinking, and
            experiments.
          </p>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            <a
              className="inline-flex min-h-14 items-center gap-3 rounded-[18px] border border-berry/15 bg-berry px-4 text-sm font-black text-cream shadow-[0_14px_30px_rgba(85,32,31,0.18)] transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href={`mailto:${emailAddress}`}
            >
              <Mail aria-hidden="true" size={16} strokeWidth={2.5} />
              <span>{emailAddress}</span>
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-between gap-3 rounded-[18px] border border-blue/20 bg-blue/10 px-4 text-sm font-black text-blue transition hover:-translate-y-0.5 hover:bg-blue/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href={linkedInUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="inline-flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-6 w-6 place-items-center rounded-md bg-blue text-[11px] font-black lowercase text-cream"
                >
                  in
                </span>
                LinkedIn
              </span>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
            </a>
            <div className="inline-flex min-h-14 items-center gap-3 rounded-[18px] border border-ink/12 bg-cream/72 px-4 text-sm font-black text-ink/76 sm:col-span-2">
              <Phone aria-hidden="true" size={16} strokeWidth={2.5} />
              <a
                className="mr-auto transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href={`tel:${phoneNumber}`}
              >
                {phoneNumber}
              </a>
              <button
                aria-label="Copy phone number"
                className="inline-flex h-9 items-center gap-2 rounded-full border border-ink/12 bg-paper px-3 text-[11px] font-black uppercase text-ink/70 transition hover:-translate-y-0.5 hover:bg-paper-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                onClick={copyPhoneNumber}
                type="button"
              >
                {copied ? (
                  <Check aria-hidden="true" size={14} strokeWidth={2.6} />
                ) : (
                  <Copy aria-hidden="true" size={14} strokeWidth={2.6} />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto aspect-[0.78] w-full max-w-[250px] rotate-3 rounded-[28px] border border-ink/12 bg-paper p-5 shadow-[0_18px_42px_rgba(55,25,24,0.16)]">
            <div className="absolute -top-5 left-1/2 h-10 w-24 -translate-x-1/2 rotate-2 bg-blue/72 shadow-[0_5px_12px_rgba(47,111,159,0.22)]" />
            <div className="h-28 rounded-t-[22px] bg-berry shadow-inner" />
            <div className="rounded-b-[22px] border-x border-b border-ink/10 bg-cream p-5 text-center">
              <p className="font-hand text-3xl leading-7 text-ink">
                Growth ideas steep well.
              </p>
              <div className="mx-auto mt-5 h-12 w-12 rounded-full border border-dashed border-stamp" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
