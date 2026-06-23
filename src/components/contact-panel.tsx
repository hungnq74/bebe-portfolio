import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function ContactPanel() {
  return (
    <section className="bg-paper py-14 sm:py-20" id="contact">
      <div className="section-shell grid gap-7 border-y border-ink/10 py-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <Reveal>
          <p className="font-hand text-3xl text-blue">
            let&apos;s bake something great
          </p>
          <h2 className="font-display mt-2 max-w-2xl text-6xl leading-[0.88] text-berry sm:text-8xl">
            Your next launch can feel crafted and clear.
          </h2>
          <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-ink/72">
            Have a project in mind? Share the brief, messy notes, or the half
            idea that keeps coming back. Bebe can shape it into a clear brand
            story, a launch plan, and the creative pieces that make people care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex h-12 items-center gap-3 rounded-full bg-berry px-6 text-xs font-black uppercase text-cream shadow-[0_14px_30px_rgba(85,32,31,0.24)] transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href="mailto:hello@bebe.studio"
            >
              <Mail aria-hidden="true" size={16} strokeWidth={2.5} />
              hello@bebe.studio
            </a>
            <a
              className="inline-flex h-12 items-center gap-3 rounded-full border border-ink/12 bg-paper px-6 text-xs font-black uppercase text-ink/72 transition hover:-translate-y-0.5 hover:bg-paper-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href="#work"
            >
              Revisit work
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto aspect-[0.78] w-full max-w-[250px] rotate-3 rounded-[28px] border border-ink/12 bg-paper p-5 shadow-[0_18px_42px_rgba(55,25,24,0.16)]">
            <div className="absolute -top-5 left-1/2 h-10 w-24 -translate-x-1/2 rotate-2 bg-blue/72 shadow-[0_5px_12px_rgba(47,111,159,0.22)]" />
            <div className="h-28 rounded-t-[22px] bg-berry shadow-inner" />
            <div className="rounded-b-[22px] border-x border-b border-ink/10 bg-cream p-5 text-center">
              <p className="font-hand text-3xl leading-7 text-ink">
                Good ideas steep well.
              </p>
              <div className="mx-auto mt-5 h-12 w-12 rounded-full border border-dashed border-stamp" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
