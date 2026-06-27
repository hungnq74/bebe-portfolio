import Image from "next/image";
import { Reveal } from "@/components/reveal";

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
              I&apos;m a creative-oriented growth marketer who turns attention
              into action - impressions into in-store traffic, first-time
              visitors into regulars, and brands into daily cravings, with work
              tied to record-breaking revenue and recognizable brands.
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
