"use client";

import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { distance, mapsHref, venue, type Category, type Place } from "@/content/places";
import type { MapText } from "@/lib/mapText";

// Leaflet touches `window`, so the map only renders in the browser.
const PlacesMap = dynamic(() => import("./PlacesMap"), {
  ssr: false,
  loading: () => <div className="map-canvas map-loading" />,
});

const CATEGORIES: Category[] = ["food", "local", "sweets", "brunch", "dinner", "sights", "trips"];
const WALK_M_PER_MIN = 80;
const LIST_LIMIT = 8;

interface Props {
  places: (Place & { kind?: string })[];
  text: MapText;
  locale: string;
}

export function NearbyExplorer({ places, text, locale }: Props) {
  const [category, setCategory] = useState<Category | "all">("all");
  const [origin, setOrigin] = useState({ lat: venue.lat, lng: venue.lng, isUser: false });
  const [status, setStatus] = useState<"idle" | "locating" | "denied">("idle");
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible = useMemo(
    () => (category === "all" ? places : places.filter((p) => p.category === category)),
    [places, category],
  );
  const ranked = useMemo(
    () => visible.map((p) => ({ ...p, d: distance(origin, p) })).sort((a, b) => a.d - b.d),
    [visible, origin],
  );
  const shown = expanded ? ranked : ranked.slice(0, LIST_LIMIT);

  const fmt = useMemo(() => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }), [locale]);
  const formatDistance = (m: number) => (m < 1000 ? `${Math.round(m / 10) * 10} m` : `${fmt.format(m / 1000)} km`);

  const locate = () => {
    if (!("geolocation" in navigator)) return setStatus("denied");
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setOrigin({ lat: pos.coords.latitude, lng: pos.coords.longitude, isUser: true });
        setStatus("idle");
      },
      () => setStatus("denied"),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const onSelect = useCallback((id: string) => setSelected(id), []);

  return (
    <div className="explorer">
      <div className="explorer-bar">
        <div className="filters" role="group" aria-label={text.title}>
          <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")}>
            {text.allCategories}
          </button>
          {CATEGORIES.map((c) => (
            <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)}>
              <span className={`dot dot-${c}`} aria-hidden="true" />
              {text.categories[c]}
            </button>
          ))}
        </div>
        <div className="origin" role="group">
          <button type="button" className="origin-btn" aria-pressed={!origin.isUser} onClick={() => setOrigin({ lat: venue.lat, lng: venue.lng, isUser: false })}>
            {text.fromVenue}
          </button>
          <button type="button" className="origin-btn" aria-pressed={origin.isUser} onClick={locate} disabled={status === "locating"}>
            ◎ {status === "locating" ? text.locating : text.fromMe}
          </button>
        </div>
      </div>
      {status === "denied" && <p className="map-error" role="status">{text.locationDenied}</p>}

      <div className="explorer-grid">
        <PlacesMap places={visible} text={text} origin={origin} selected={selected} onSelect={onSelect} />
        <div className="nearby">
          <h3>{origin.isUser ? text.nearestTo.me : text.nearestTo.venue}</h3>
          <ol>
            {shown.map((p) => (
              <li key={p.id} className={selected === p.id ? "is-selected" : undefined}>
                <button type="button" onClick={() => setSelected(p.id)}>
                  <span className={`dot dot-${p.category}`} aria-hidden="true" />
                  <span className="nb-main">
                    <strong>{p.name}</strong>
                    <span className="nb-cat">
                      {p.tier ? `${p.tier} · ` : ""}
                      {p.kind ?? text.categories[p.category]}
                    </span>
                  </span>
                  <span className="nb-dist">
                    <b>{formatDistance(p.d)}</b>
                    {p.d < 3000 && <span>{text.walk.replace("{n}", String(Math.max(1, Math.round(p.d / WALK_M_PER_MIN))))}</span>}
                  </span>
                </button>
                <a className="nb-go" href={mapsHref(p)} target="_blank" rel="noopener noreferrer" aria-label={`${text.openMaps}: ${p.name}`}>
                  ↗
                </a>
              </li>
            ))}
          </ol>
          {ranked.length > LIST_LIMIT && (
            <button type="button" className="more-btn" onClick={() => setExpanded((e) => !e)}>
              {expanded ? text.showLess : text.showAll.replace("{n}", String(ranked.length))}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
