import "server-only";
import type { Locale } from "@/lib/i18n";
import type { Content } from "./types";

const contents: Record<Locale, () => Promise<Content>> = {
  en: () => import("./en").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
};

export const getContent = (locale: Locale) => contents[locale]();
