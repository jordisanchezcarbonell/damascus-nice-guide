"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";

export function LangMenu({ locale, label }: { locale: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="langmenu" ref={root}>
      <button
        type="button"
        className="langmenu-btn"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${label}: ${localeNames[locale]}`}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
        <span>{localeNames[locale]}</span>
        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" className="chev">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
      {open && (
        <ul className="langmenu-list">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={`/${l}`}
                hrefLang={l}
                lang={l}
                aria-current={l === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="code">{l.toUpperCase()}</span>
                {localeNames[l]}
                {l === locale && <span className="check" aria-hidden="true">✓</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
