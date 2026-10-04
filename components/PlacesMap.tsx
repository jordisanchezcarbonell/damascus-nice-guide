"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapsHref, venue, type Category, type Place } from "@/content/places";
import type { MapText } from "@/lib/mapText";

interface Props {
  places: (Place & { kind?: string })[];
  text: MapText;
  origin: { lat: number; lng: number; isUser: boolean };
  selected: string | null;
  onSelect: (id: string) => void;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function markerIcon(p: Place) {
  const label = p.tier ?? "";
  return L.divIcon({
    className: "",
    html: `<span class="pin pin-${p.category as Category}${label ? " pin-tier" : ""}">${esc(label)}</span>`,
    iconSize: label ? [30, 30] : [18, 18],
    iconAnchor: label ? [15, 15] : [9, 9],
    popupAnchor: [0, -12],
  });
}

export default function PlacesMap({ places, text, origin, selected, onSelect }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const layer = useRef<L.LayerGroup | null>(null);
  const markers = useRef(new Map<string, L.Marker>());
  const me = useRef<L.Marker | null>(null);

  // Create the map once.
  useEffect(() => {
    if (!el.current || map.current) return;
    const m = L.map(el.current, { scrollWheelZoom: false }).setView([venue.lat, venue.lng], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(m);
    L.marker([venue.lat, venue.lng], {
      icon: L.divIcon({ className: "", html: '<span class="pin pin-venue">EVO</span>', iconSize: [44, 28], iconAnchor: [22, 14] }),
      zIndexOffset: 1000,
      title: text.venue,
    })
      .bindPopup(`<strong>${esc(text.venue)}</strong><br>Parvis de l'Europe`)
      .addTo(m);
    layer.current = L.layerGroup().addTo(m);
    map.current = m;
    m.on("focus", () => m.scrollWheelZoom.enable());
    m.on("blur", () => m.scrollWheelZoom.disable());
    return () => {
      m.remove();
      map.current = null;
    };
  }, [text.venue]);

  // Redraw markers for the visible places.
  useEffect(() => {
    const group = layer.current;
    if (!group) return;
    group.clearLayers();
    markers.current.clear();
    places.forEach((p) => {
      const popup =
        `<strong>${esc(p.name)}</strong>` +
        `<div class="pop-cat">${esc(text.categories[p.category])}${p.kind ? " · " + esc(p.kind) : ""}</div>` +
        `<a href="${esc(mapsHref(p))}" target="_blank" rel="noopener noreferrer">${esc(text.openMaps)} ↗</a>`;
      const mk = L.marker([p.lat, p.lng], { icon: markerIcon(p), title: p.name, riseOnHover: true })
        .bindPopup(popup)
        .on("click", () => onSelect(p.id));
      mk.addTo(group);
      markers.current.set(p.id, mk);
    });
  }, [places, text, onSelect]);

  // Show the user's position.
  useEffect(() => {
    const m = map.current;
    if (!m) return;
    me.current?.remove();
    me.current = null;
    if (origin.isUser) {
      me.current = L.marker([origin.lat, origin.lng], {
        icon: L.divIcon({ className: "", html: '<span class="pin pin-me"></span>', iconSize: [20, 20], iconAnchor: [10, 10] }),
        zIndexOffset: 2000,
        title: text.you,
      })
        .bindPopup(esc(text.you))
        .addTo(m);
      m.setView([origin.lat, origin.lng], 15);
    }
  }, [origin, text.you]);

  // Fly to the place picked in the list.
  useEffect(() => {
    const mk = selected ? markers.current.get(selected) : undefined;
    if (!mk || !map.current) return;
    map.current.flyTo(mk.getLatLng(), Math.max(map.current.getZoom(), 16), { duration: 0.6 });
    mk.openPopup();
  }, [selected]);

  return <div ref={el} className="map-canvas" role="region" aria-label={text.title} />;
}
