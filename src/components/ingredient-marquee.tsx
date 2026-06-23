import { ChartNoAxesCombined, Heart, NotebookTabs, Wheat } from "lucide-react";

const ingredients = [
  { label: "F&B expertise", icon: Wheat },
  { label: "Growth focused", icon: ChartNoAxesCombined },
  { label: "Creative at heart", icon: Heart },
  { label: "Data informed", icon: NotebookTabs },
];

export function IngredientMarquee() {
  const track = [...ingredients, ...ingredients, ...ingredients, ...ingredients];

  return (
    <section
      className="overflow-hidden border-y border-ink/10 bg-cream py-4"
      id="services"
    >
      <div className="ingredient-track flex w-max items-center gap-9 px-5">
        {track.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className="flex min-w-48 items-center justify-center gap-3 border-r border-ink/12 pr-9 text-[11px] font-black uppercase text-ink/62"
              key={`${item.label}-${index}`}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={2.2} />
              {item.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
