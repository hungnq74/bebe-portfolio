import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const highlights = [
  "attention into action",
  "in-store traffic",
  "daily cravings",
  "record-breaking revenue",
];

export function BehindBaker() {
  return (
    <section className="about-feature bg-cream py-14 sm:py-20" id="about">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <Reveal>
          <p className="font-hand text-2xl text-stamp">Pull up a seat</p>
          <h2 className="font-display mt-1 text-5xl leading-none text-ink sm:text-7xl">
            About me
          </h2>
          <div className="mt-6 space-y-5 text-base font-semibold leading-8 text-ink/74">
            <p>
              I&apos;m a creative-oriented growth marketer who turns{" "}
              <span className="about-highlight">attention into action</span> -
              impressions into{" "}
              <span className="about-highlight">in-store traffic</span>,
              first-time visitors into regulars, and brands into{" "}
              <span className="about-highlight">daily cravings</span>, with
              work tied to{" "}
              <span className="about-highlight">
                record-breaking revenue
              </span>{" "}
              and recognizable brands.
            </p>
            <p>
              My background blends product, creative, and growth: creative UA,
              campaign testing, fast experimentation, and product-led growth
              across startup environments. Beyond work, I&apos;ve always loved
              F&amp;B for the feeling behind a place - the ritual, the mood, and
              the reason people return and recommend.
            </p>
            <p>
              So pull up a seat and explore my secret recipe from the Growth
              Bar menu: ideas, insights, experiments, and proof of work.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                className="rounded-full border border-blue/20 bg-blue/10 px-3 py-2 text-[11px] font-black uppercase text-blue"
                key={highlight}
              >
                {highlight}
              </span>
            ))}
          </div>

          <a
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-xs font-black uppercase text-cream transition hover:-translate-y-0.5 hover:bg-berry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            href="#work"
          >
            Secret recipe
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
          </a>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[460px]" delay={0.12}>
          <div className="about-image-card relative aspect-[0.78] overflow-hidden rounded-[32px] border border-ink/10 bg-paper shadow-[0_24px_70px_rgba(55,25,24,0.16)]">
            <Image
              alt="Khanh Huyen portrait"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 38vw, 86vw"
              src="/images/khanh-huyen-about.jpg"
            />
            <span aria-hidden="true" className="about-image-stamp stamp-ring">
              Growth bar
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
