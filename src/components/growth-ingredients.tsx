import Image from "next/image";
import {
  ChartNoAxesCombined,
  Clapperboard,
  FlaskConical,
  Gamepad2,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const ingredients = [
  {
    label: "Growth MKT",
    note: "Revenue-minded experiments",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Creative UA",
    note: "Hooks, angles, and tests",
    icon: Gamepad2,
  },
  {
    label: "Digital MKT",
    note: "Content to conversion paths",
    icon: Smartphone,
  },
  {
    label: "Product-led Growth Mindset",
    note: "Loops before louder posts",
    icon: FlaskConical,
  },
  {
    label: "Video Editing",
    note: "Scroll-stopping rhythm",
    icon: Clapperboard,
  },
];

export function GrowthIngredients() {
  return (
    <section className="growth-ingredients paper-edge bg-cream py-10" id="menu">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-hand text-2xl text-stamp">menu of work</p>
            <h2 className="font-display text-5xl leading-none text-ink sm:text-6xl">
              My Growth Ingredients
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-6 text-ink/66">
            A tasting flight of skills across branding, campaigns, and growth
            creative.
          </p>
        </Reveal>

        <div className="relative mt-7 overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-[0_16px_44px_rgba(55,25,24,0.1)]">
          <Image
            alt=""
            className="ingredient-shelf-image object-cover"
            fill
            sizes="(min-width: 1180px) 1180px, 100vw"
            src="/images/generated/growth-ingredients-shelf.png"
          />
          <div className="relative z-10 grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-5">
            {ingredients.map((ingredient) => {
              const Icon = ingredient.icon;

              return (
                <Reveal
                  className="ingredient-card group min-h-36 rounded-[20px] border border-ink/10 bg-cream/82 p-4 shadow-[0_12px_30px_rgba(55,25,24,0.1)] backdrop-blur-[2px] transition hover:-translate-y-1 hover:bg-cream"
                  key={ingredient.label}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-blue/25 bg-blue/10 text-blue">
                    <Icon aria-hidden="true" size={20} strokeWidth={2.3} />
                  </div>
                  <h3 className="font-serif mt-4 text-2xl font-black leading-none text-berry">
                    {ingredient.label}
                  </h3>
                  <p className="mt-3 text-xs font-bold uppercase leading-5 text-ink/62">
                    {ingredient.note}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
