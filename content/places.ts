/**
 * Every mappable place in the guide. Coordinates were resolved from the
 * guide's Google Maps links; places without a link were geocoded by name.
 * Amande & Pistache is missing: the source guide has no valid link for it.
 */
export type Category = "food" | "local" | "sweets" | "brunch" | "dinner" | "sights" | "trips";

export interface Place {
  id: string;
  name: string;
  category: Category;
  lat: number;
  lng: number;
  map?: string;
  tier?: string;
  tierClass?: "s" | "a" | "b";
  /** Id of the venue spot whose translated "kind" describes it. */
  spot?: string;
}

export const venue = { name: "Evo France · Parvis de l'Europe", lat: 43.7078875, lng: 7.2826181 };

const g = (code: string) => `https://maps.app.goo.gl/${code}`;

export const places: Place[] = [
  // Near the venue
  { id: "kosmopolite", spot: "kosmopolite", name: "Kosmopolite", category: "food", tier: "S", tierClass: "s", lat: 43.7037453, lng: 7.28514, map: g("b8qzipU1xLtB37yS9") },
  { id: "grillade", spot: "grillade", name: "La Grillade Niçoise", category: "food", tier: "A+", tierClass: "a", lat: 43.7073487, lng: 7.284389, map: g("HqZLMvGjQtETzibY8") },
  { id: "medina", spot: "medina", name: "Dar el Medina", category: "food", tier: "A+", tierClass: "a", lat: 43.7082201, lng: 7.2845738, map: g("QKYzrYrm4tFpbn2B6") },
  { id: "krousty", spot: "krousty", name: "Krousty Sabaidi", category: "food", tier: "A", tierClass: "a", lat: 43.7037317, lng: 7.2815571, map: g("ak6VNrNZitQtrmD17") },
  { id: "tasty", spot: "tasty", name: "Tasty Crousty", category: "food", tier: "B+", tierClass: "b", lat: 43.7070461, lng: 7.2834468, map: g("JvYWR9TbU1w7vtL47") },
  { id: "thai", spot: "thai", name: "Thai Fine Street Food", category: "food", tier: "B+", tierClass: "b", lat: 43.7056826, lng: 7.2823023, map: g("3EgYMsazLCNn46ZG6") },
  { id: "turquie", spot: "turquie", name: "Délices de Turquie", category: "food", tier: "A", tierClass: "a", lat: 43.7035725, lng: 7.2814775, map: g("Xp3Co1VoMXnB33ey6") },
  { id: "obraise", spot: "obraise", name: "O'braisé", category: "food", tier: "A", tierClass: "a", lat: 43.7100636, lng: 7.2883083, map: g("T7ZLrhnPKArFHCB59") },
  { id: "panera", spot: "panera", name: "Boulangerie Panera", category: "food", tier: "A", tierClass: "a", lat: 43.7015515, lng: 7.2884353, map: g("1yQkJ9vefTytdvF29") },
  { id: "filous", spot: "filous", name: "Les Filous", category: "food", tier: "A", tierClass: "a", lat: 43.7037205, lng: 7.2868876, map: g("DjfKua9V9Xue4BEs9") },
  { id: "amoureux", spot: "amoureux", name: "Les Amoureux", category: "food", tier: "S", tierClass: "s", lat: 43.7008715, lng: 7.2856223, map: g("vg5pNeLCWrASDW26A") },
  { id: "cheesenaan", spot: "cheesenaan", name: "Le Cheese Naan", category: "food", tier: "B", tierClass: "b", lat: 43.7083536, lng: 7.290499, map: g("ueQfoCqAWTnsxe5D8") },
  { id: "chickenstreet", spot: "chickenstreet", name: "Chicken Street", category: "food", tier: "A", tierClass: "a", lat: 43.6967132, lng: 7.2714107, map: g("ZD9JPNGxgAyEZiMG8") },

  // Local food
  { id: "loubalico", name: "Lou Balico", category: "local", lat: 43.7013389, lng: 7.2776311, map: g("QepKUXueGfU7dtKp7") },
  { id: "daqui", name: "D'Aquì", category: "local", lat: 43.6989063, lng: 7.2835164, map: g("K9vhtbEGDSurZBrh9") },
  { id: "papaye", name: "Papaye & Mamaye", category: "local", lat: 43.6950785, lng: 7.2611492, map: g("WfDPyutwjJBgjq1T7") },

  // Must-try sweets
  { id: "fenocchio", name: "Fenocchio", category: "sweets", tier: "S+", tierClass: "s", lat: 43.6973116, lng: 7.2764159, map: g("KBaW9g5gTHymFp5s5") },
  { id: "petitsmarchands", name: "Les Petits Marchands", category: "sweets", lat: 43.7000941, lng: 7.2876341, map: g("WqqMdTnNb9fV5b7H6") },

  // Brunch
  { id: "maisonjl", name: "Maison JL Brunch", category: "brunch", lat: 43.7066325, lng: 7.2831227, map: g("ZVad2LTtjhW2zEzn8") },
  { id: "kawa", name: "Le Kawa", category: "brunch", lat: 43.7037879, lng: 7.2619107, map: g("UDw8GrZHmrwuNRYv7") },
  { id: "36chambre", name: "La 36ème Chambre", category: "brunch", lat: 43.7020467, lng: 7.2745796, map: g("cQc3WF3izu8eLfR87") },
  { id: "rosewood", name: "Rosewood Café", category: "brunch", lat: 43.6995106, lng: 7.2736781, map: g("3yJ1gSrcaNft5Yjo9") },

  // Dinner & hang out
  { id: "voglia", name: "La Voglia", category: "dinner", lat: 43.695555, lng: 7.273309, map: g("AP1jy5PS4Z934Jv87") },
  { id: "dipiu", name: "Di Più", category: "dinner", lat: 43.6952761, lng: 7.2731226, map: g("fzqWvYNq4gAPff1z9") },
  { id: "petitpalais", name: "Le Petit Palais", category: "dinner", lat: 43.6970041, lng: 7.2736967, map: g("XN9CMNKtED4WDeF97") },
  { id: "pitadine", name: "Pitadine", category: "dinner", lat: 43.6984035, lng: 7.2779954, map: g("jKbLdcpwashAMkVy8") },
  { id: "banthai", name: "Le Banthai", category: "dinner", lat: 43.6970466, lng: 7.2770985, map: g("Da3oKeNeYPE8iy339") },
  { id: "omura", name: "Omura", category: "dinner", lat: 43.6974724, lng: 7.2662762, map: g("9aSNr8HJXot92vTD6") },
  { id: "villadeste", name: "La Villa d'Este", category: "dinner", lat: 43.697833, lng: 7.267897, map: g("XZmtzDiWBd8iA9mV8") },
  { id: "cresci", name: "La Pizza Cresci", category: "dinner", lat: 43.6969511, lng: 7.2652862, map: g("c8q7e57MWmqBX8WK9") },
  { id: "rodizio", name: "Rodizio Beach", category: "dinner", lat: 43.6960413, lng: 7.265349, map: g("wFSn9qRQMNP9TPLW8") },
  { id: "nhatrang", name: "Nha Trang", category: "dinner", lat: 43.7033333, lng: 7.2644444, map: g("nJ4rLxxoVWphhZC67") },
  { id: "gusti", name: "Gusti", category: "dinner", lat: 43.7047183, lng: 7.2646196, map: g("QQ43S6n1Uyzoaxrx5") },
  { id: "waka", name: "Waka Bar", category: "dinner", lat: 43.6951172, lng: 7.2764481, map: g("n1W8WeoxNV21mjCVA") },

  // Sights in Nice (itinerary)
  { id: "massena", name: "Place Masséna", category: "sights", lat: 43.697205, lng: 7.2705956, map: g("LKbxxRAFuRMUhax57") },
  { id: "paillon", name: "Promenade du Paillon", category: "sights", lat: 43.6974111, lng: 7.2717905 },
  { id: "garibaldi", name: "Place Garibaldi", category: "sights", lat: 43.7009404, lng: 7.2801004, map: g("zHRQNDq5NpmR1gnD6") },
  { id: "saleya", name: "Cours Saleya", category: "sights", lat: 43.6955865, lng: 7.274994, map: g("Q1kgFC76HDZ8eYgx6") },
  { id: "chateau", name: "Colline du Château", category: "sights", lat: 43.6946989, lng: 7.2798982, map: g("9arFE5msognYAFWM7") },
  { id: "port", name: "Port Lympia", category: "sights", lat: 43.6989575, lng: 7.2851948, map: g("mXEDdLw7ancq7S9j8") },
  { id: "phare", name: "Phare de Nice", category: "sights", lat: 43.6905301, lng: 7.2881796, map: g("ZvZDyxhPTBLqsXF16") },
  { id: "raubacapeu", name: "Monument aux Morts de Rauba-Capeù", category: "sights", lat: 43.693456, lng: 7.2812996, map: g("nCyMMmek9i4EifDb7") },
  { id: "anglais", name: "Promenade des Anglais", category: "sights", lat: 43.6947, lng: 7.2575 },
  { id: "pietonne", name: "Zone Piétonne", category: "sights", lat: 43.697594, lng: 7.267199, map: g("TaXdpk44M4qXkatn9") },
  { id: "montboron", name: "Panorama du Mont Boron", category: "sights", lat: 43.6964835, lng: 7.297424, map: g("MijmrrULrY5gQ13J7") },
  { id: "montalban", name: "Fort du Mont Alban", category: "sights", lat: 43.7013214, lng: 7.300155, map: g("Z9a5TPVaWGBcQp5CA") },

  // Day trips
  { id: "villefranche", name: "Villefranche-sur-Mer", category: "trips", lat: 43.7070597, lng: 7.3141454, map: g("9HdBGPSZwFRE4Pnz8") },
  { id: "dry", name: "DRY Restaurant & Cocktail Bar", category: "trips", lat: 43.7041449, lng: 7.312368, map: g("ARxoeFQmG1vqskmp9") },
  { id: "monaco", name: "Monaco", category: "trips", lat: 43.7384176, lng: 7.4246158, map: g("LxNVTHDQSWB4Weqg7") },
  { id: "eze", name: "Èze village", category: "trips", lat: 43.7297544, lng: 7.3619758, map: g("guaM9RBNrYGBGkuq9") },
  { id: "tetedechien", name: "La Tête de Chien", category: "trips", lat: 43.729881, lng: 7.403313, map: g("aiUEAL1uCF4yLzh27") },
  { id: "menton", name: "Menton", category: "trips", lat: 43.7765, lng: 7.5048 },
  { id: "antibes", name: "Antibes", category: "trips", lat: 43.5813878, lng: 7.1236966 },
  { id: "cannes", name: "Cannes", category: "trips", lat: 43.5515198, lng: 7.0134418 },
  { id: "theoule", name: "Théoule-sur-Mer", category: "trips", lat: 43.5060877, lng: 6.9399193 },
  { id: "grasse", name: "Grasse", category: "trips", lat: 43.6589011, lng: 6.9239103 },
  { id: "kashmir", name: "Le Kashmir Flots Bleus", category: "trips", lat: 43.6578979, lng: 7.1874623, map: g("NLBg1UBvsVa5iQ4Z6") },
];

/** Great-circle distance in metres. */
export function distance(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371e3;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Google Maps directions link when a place has no short link. */
export const mapsHref = (p: Place) =>
  p.map ?? `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;
