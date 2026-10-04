"use client";

import { useState, type ReactNode } from "react";
import type { TierClass } from "@/content/types";

type Filter = "all" | TierClass | "near";

export interface SpotCard {
  id: string;
  tierClass: TierClass;
  walk: number;
  node: ReactNode;
}

interface Labels {
  label: string;
  all: string;
  s: string;
  a: string;
  b: string;
  near: string;
  empty: string;
}

export function VenueSpots({ cards, labels }: { cards: SpotCard[]; labels: Labels }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = cards.filter(
    (c) => filter === "all" || (filter === "near" ? c.walk < 5 : c.tierClass === filter),
  );
  const options: { id: Filter; label: string }[] = [
    { id: "all", label: labels.all.replace("{n}", String(cards.length)) },
    { id: "s", label: labels.s },
    { id: "a", label: labels.a },
    { id: "b", label: labels.b },
    { id: "near", label: labels.near },
  ];

  return (
    <>
      <div className="filters" role="group" aria-label={labels.label}>
        {options.map((o) => (
          <button key={o.id} type="button" aria-pressed={filter === o.id} onClick={() => setFilter(o.id)}>
            {o.label}
          </button>
        ))}
      </div>
      <div className="cards">
        {visible.map((c) => (
          <div key={c.id} className="card-slot">
            {c.node}
          </div>
        ))}
      </div>
      {visible.length === 0 && <p className="empty">{labels.empty}</p>}
    </>
  );
}
