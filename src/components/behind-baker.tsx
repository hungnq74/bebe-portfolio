import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function BehindBaker() {
  return (
    <section className="bg-cream py-14 sm:py-16" id="about">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.72fr_1fr_0.82fr] lg:items-center">
        <Reveal className="relative mx-auto grid aspect-square w-full max-w-[230px] place-items-center rounded-[36%] border border-blue/35 bg-paper shadow-[0_16px_36px_rgba(55,25,24,0.12)]">
          <span className="absolute -left-4 top-3 font-hand text-4xl text-blue">
            hi
          </span>
          <div className="grid h-[78%] w-[78%] place-items-center rounded-[34%] border border-dashed border-blue/55 bg-cream text-center">
            <span className="font-serif text-5xl font-black text-berry">B</span>
            <span className="mt-1 block text-[10px] font-black uppercase text-ink/58">
              Creative lead
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="font-hand text-2xl text-stamp">behind the baker</p>
          <h2 className="font-display mt-1 text-5xl leading-none text-ink sm:text-6xl">
            Equal parts strategist and storyteller.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-ink/72">
            Bebe turns fuzzy brand ideas into usable systems: positioning,
            content recipes, launch moments, and creative tests that a team can
            actually run.
          </p>
          <p className="font-hand mt-5 text-2xl text-blue">
            Let&apos;s create something delicious.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="border-l border-ink/10 pl-0 lg:pl-8">
            <h3 className="font-display text-4xl leading-none text-berry">
              Good ideas start with a useful brief.
            </h3>
            <p className="mt-4 text-sm font-semibold leading-6 text-ink/68">
              Strategy, creative direction, copy, and launch planning for brands
              that want more than pretty posts.
            </p>
            <a
              className="mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-xs font-black uppercase text-cream transition hover:-translate-y-0.5 hover:bg-berry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href="#contact"
            >
              Get in touch
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
