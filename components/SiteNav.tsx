"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

interface Props {
  locale: Locale;
  items: { id: string; label: string }[];
  languageLabel: string;
}

export function SiteNav({ locale, items, languageLabel }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    if (active) document.querySelector(`nav.toc a[href="#${active}"]`)?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <nav className="toc" aria-label="Sections">
      <div className="wrap toc-row">
        <ul>
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className={active === i.id ? "active" : undefined}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
