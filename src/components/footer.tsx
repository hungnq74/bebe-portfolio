export function Footer() {
  return (
    <footer className="bg-berry px-4 py-5 text-cream">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 text-[10px] font-black uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>2026 Bebe Creative Portfolio. All rights reserved.</p>
        <p>Baked with strategy and taste</p>
        <div className="flex gap-5">
          <a className="transition hover:text-butter" href="#contact">
            Email
          </a>
          <a className="transition hover:text-butter" href="#work">
            Work
          </a>
          <a className="transition hover:text-butter" href="#about">
            About
          </a>
        </div>
      </div>
    </footer>
  );
}
