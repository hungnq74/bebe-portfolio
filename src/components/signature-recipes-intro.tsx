import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function SignatureRecipesIntro() {
  return (
    <section className="signature-recipes bg-paper py-12 sm:py-16" id="recipes">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
        <Reveal>
          <p className="font-hand text-2xl text-stamp">fresh from the growth bar</p>
          <h2 className="font-display mt-1 text-5xl leading-none text-ink sm:text-7xl">
            Signature Recipes
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-ink/12 bg-cream px-3 py-2 text-[11px] font-black uppercase text-ink/66">
              Fortune Marketing Group
            </span>
            <span className="rounded-full border border-blue/20 bg-blue/10 px-3 py-2 text-[11px] font-black uppercase text-blue">
              Senior Account Management
            </span>
          </div>
          <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-ink/72">
            I&apos;m growing from a Marketing Intern into a Senior Account
            Manager in 1 year, currently playing as a core member, handling key
            clients and holding 10 accounts.
          </p>
          <a
            className="mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-berry px-6 text-xs font-black uppercase text-cream shadow-[0_14px_30px_rgba(85,32,31,0.2)] transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            href="#work"
          >
            View case cards
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="signature-feature relative aspect-[1.72] overflow-hidden rounded-[28px] border border-ink/10 bg-cream shadow-[0_24px_60px_rgba(55,25,24,0.16)]">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 54vw, 92vw"
              src="/images/generated/signature-recipes-feature.png"
            />
            <span aria-hidden="true" className="signature-feature-stamp stamp-ring">
              Proof of work
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
