"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const everyHalfPhotos = [
  {
    src: "/images/everyhalf/IMG_4006.PNG",
    alt: "Khanh Huyen enjoying a drink at EveryHalf",
    note: "A comfort zone for focused days.",
    rotate: -4,
  },
  {
    src: "/images/everyhalf/IMG_4007.PNG",
    alt: "Khanh Huyen with an EveryHalf drink",
    note: "The kind of place I keep returning to.",
    rotate: 5,
  },
  {
    src: "/images/everyhalf/IMG_4008.PNG",
    alt: "Two EveryHalf drinks on a cafe table",
    note: "Carefully crafted, cup by cup.",
    rotate: -2,
  },
  {
    src: "/images/everyhalf/IMG_4009.PNG",
    alt: "Matcha drinks at EveryHalf",
    note: "Small details that make the ritual feel special.",
    rotate: 3,
  },
  {
    src: "/images/everyhalf/IMG_4010.PNG",
    alt: "EveryHalf matcha beside a laptop",
    note: "Safe, calm, and easy to do good work.",
    rotate: -5,
  },
  {
    src: "/images/everyhalf/IMG_4011.PNG",
    alt: "EveryHalf drinks on a wooden table",
    note: "The everyday comfort of a familiar table.",
    rotate: 4,
  },
  {
    src: "/images/everyhalf/IMG_4012.PNG",
    alt: "EveryHalf drink and pastry beside a laptop",
    note: "Where ideas quietly steep.",
    rotate: -3,
  },
  {
    src: "/images/everyhalf/IMG_4013.PNG",
    alt: "EveryHalf drinks and pastry on a cafe table",
    note: "A brand experience that feels human.",
    rotate: 2,
  },
  {
    src: "/images/everyhalf/IMG_4014.PNG",
    alt: "EveryHalf drinks beside a laptop",
    note: "Work days made softer.",
    rotate: -4,
  },
  {
    src: "/images/everyhalf/IMG_4015.PNG",
    alt: "EveryHalf drinks on white coasters",
    note: "A menu I keep coming back to.",
    rotate: 4,
  },
  {
    src: "/images/everyhalf/IMG_4016.PNG",
    alt: "EveryHalf drink and workspace",
    note: "Focused, warm, and familiar.",
    rotate: -2,
  },
  {
    src: "/images/everyhalf/IMG_4017.PNG",
    alt: "EveryHalf drinks with ingredient card",
    note: "Ingredient stories that make each cup richer.",
    rotate: 5,
  },
  {
    src: "/images/everyhalf/IMG_4018.PNG",
    alt: "EveryHalf matcha with laptop and water",
    note: "Thoughtful from sourcing to service.",
    rotate: -3,
  },
  {
    src: "/images/everyhalf/IMG_4019.PNG",
    alt: "EveryHalf matcha and ingredient card",
    note: "The detail card that made me care more.",
    rotate: 2,
  },
  {
    src: "/images/everyhalf/IMG_4020.PNG",
    alt: "EveryHalf drinks by a window",
    note: "A place worth growing with.",
    rotate: -5,
  },
];

export function EveryHalfPassionPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="everyhalf-page min-h-screen">
      <div className="everyhalf-shell">
        <p className="font-hand text-3xl text-stamp">Dedicated Passion Page</p>

        <Link className="everyhalf-back" href="/#top">
          <ArrowLeft aria-hidden="true" size={15} strokeWidth={2.6} />
          Back to home
        </Link>

        <section className="everyhalf-hero">
          <div className="everyhalf-copy">
            <p className="everyhalf-kicker">A personal note just for EveryHalf</p>
            <h1>I’ve Been in Love with the Brand for a Long Time</h1>
            <p className="font-hand everyhalf-hand-note">
              This isn’t just another brand to me. It’s the kind of
              place I keep coming back to.
            </p>

            <div className="everyhalf-body">
              <p>
                EveryHalf has been my go-to spot for a long time — a comfort
                zone where I feel safe, focused, and able to do my best work.
              </p>
              <p>
                What makes the brand special to me is not only the drinks, but
                the whole experience around them. I love how the staff welcome,
                communicate, and take care of customers with genuine warmth. I
                also appreciate how every drink feels carefully crafted, from
                the preparation to the ingredient card that shares more about
                the sourcing and story behind each cup.
              </p>
              <p>
                Over the years, I’ve been strongly impressed by how fast
                EveryHalf has grown while still staying close to its customers.
                The brand direction feels thoughtful, consistent, and human —
                built around understanding people and serving them better.
              </p>
              <p>
                That’s why I want to join the team: to learn from a brand I
                genuinely admire, contribute my growth and marketing experience,
                and be part of EveryHalf’s next stage of growth.
              </p>
            </div>

          </div>

          <div className="everyhalf-portrait-stack" aria-label="Khanh Huyen portrait">
            <span className="everyhalf-note-card">
              A personal note
              <br />
              for EveryHalf
            </span>
            <div className="everyhalf-portrait-card">
              <Image
                alt="Khanh Huyen portrait"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 92vw"
                src="/images/khanh-huyen-about.jpg"
              />
              <span className="everyhalf-portrait-stamp stamp-ring">
                <Image
                  alt="EveryHalf logo"
                  height={82}
                  src="/images/everyhalf/everyhalf-logo-badge.png"
                  unoptimized
                  width={82}
                />
              </span>
            </div>
            <span className="everyhalf-sticky-note">
              Good coffee.
              <br />
              Kind people.
              <br />
              Great ideas.
              <Heart aria-hidden="true" size={15} strokeWidth={2.2} />
            </span>
          </div>
        </section>

        <div className="everyhalf-reveal-anchor">
          <motion.section
            animate={{ opacity: 1, y: 0 }}
            aria-labelledby="everyhalf-gallery"
            className="everyhalf-gallery"
            initial={reduceMotion ? false : { opacity: 0, y: 44 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="everyhalf-gallery-heading">
              <p className="font-hand text-3xl text-stamp">
                here&apos;s my little love letter to you
              </p>
              <h2 id="everyhalf-gallery">
                A collection of moments that kept me coming back.
              </h2>
            </div>

            <div className="everyhalf-collage-grid">
              {everyHalfPhotos.map((photo, index) => (
                <motion.figure
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, rotate: photo.rotate, scale: 1, y: 0 }
                  }
                  className="everyhalf-polaroid"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: -photo.rotate,
                          scale: 0.84,
                          y: 72 + (index % 3) * 12,
                        }
                  }
                  key={photo.src}
                  transition={{
                    duration: 0.58,
                    delay: Math.min(index * 0.045, 0.56),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="everyhalf-polaroid-image">
                    <Image
                      alt={photo.alt}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1180px) 220px, (min-width: 720px) 30vw, 86vw"
                      src={photo.src}
                    />
                  </div>
                  <figcaption>{photo.note}</figcaption>
                </motion.figure>
              ))}
            </div>

            <div className="everyhalf-envelope">
              <Sparkles aria-hidden="true" size={18} strokeWidth={2.4} />
              Ideas I&apos;d love to build with you inside.
              <Heart aria-hidden="true" size={16} strokeWidth={2.4} />
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
