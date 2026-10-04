/** Language-independent facts about each place: names, links, photos, tiers. */
export type TierClass = "s" | "a" | "b";

export interface VenueSpotBase {
  id: string;
  name: string;
  tier: string; // label as given by the author: "S", "A+", "B+"...
  tierClass: TierClass;
  walk: number; // minutes on foot from the venue
  map?: string;
  img: string;
}

export interface Link {
  label: string;
  href: string;
}

/** Translatable text. Rich text uses a tiny markup: *italic*, **bold**, [label](url). */
export interface VenueSpotText {
  kind: string;
  desc: string;
  note?: string;
  prices: string[];
}

export interface ListItem {
  name: string;
  href?: string;
  text: string;
  halal?: boolean;
}

export interface Content {
  meta: { title: string; description: string };
  ui: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    byline: string;
    intro: string;
    tierLegend: string;
    nav: Record<SectionId, string>;
    filters: { label: string; all: string; s: string; a: string; b: string; near: string; empty: string };
    walk: string; // "{n} min walk"
    openMaps: string;
    language: string;
  };
  venue: { title: string; lead: string; spots: Record<string, VenueSpotText> };
  local: {
    title: string;
    lead: string;
    dishes: { name: string; img: string; text: string }[];
    after: string;
    restaurantsTitle: string;
    restaurants: ListItem[];
  };
  must: {
    title: string;
    lead: string;
    fenocchio: string;
    petitsMarchands: string;
    boulangeriesTitle: string;
    boulangeries: string;
  };
  brunch: { title: string; items: ListItem[] };
  hangout: {
    title: string;
    lead: string;
    halal: string;
    areas: { title: string; img: string; text: string; items: ListItem[] }[];
  };
  itinerary: {
    title: string;
    lead: string;
    video: string;
    videoLink: string;
    stops: { title: string; img?: string; text: string; map?: string }[];
  };
  more: {
    title: string;
    lead: string;
    trips: { title: string; how: string; img?: string; map?: string; text: string }[];
  };
  date: {
    title: string;
    lead: string;
    ideas: { title: string; img: string; text: string }[];
  };
  footer: { title: string; text: string };
}

export type SectionId = "venue" | "local" | "must" | "brunch" | "hangout" | "itinerary" | "more" | "date";
