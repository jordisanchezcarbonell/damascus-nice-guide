import type { Locale } from "./i18n";
import type { Category } from "@/content/places";

export interface MapText {
  nav: string;
  title: string;
  lead: string;
  categories: Record<Category, string>;
  allCategories: string;
  fromVenue: string;
  fromMe: string;
  locating: string;
  locationDenied: string;
  nearestTo: { venue: string; me: string };
  venue: string;
  you: string;
  openMaps: string;
  walk: string; // "{n} min walk"
  showAll: string;
  showLess: string;
}

export const mapText: Record<Locale, MapText> = {
  en: {
    nav: "Map",
    title: "Map & what's nearby",
    lead: "Every spot in the guide on one map. Use your location to sort everything by distance, or see what's closest to the venue.",
    categories: { food: "Near the venue", local: "Local food", sweets: "Sweets & gelato", brunch: "Brunch", dinner: "Dinner & drinks", sights: "Sights", trips: "Day trips" },
    allCategories: "Everything",
    fromVenue: "From the venue",
    fromMe: "Near me",
    locating: "Finding you…",
    locationDenied: "Couldn't get your location. Allow location access in your browser, or use distances from the venue.",
    nearestTo: { venue: "Closest to the venue", me: "Closest to you" },
    venue: "Evo France venue",
    you: "You are here",
    openMaps: "Directions",
    walk: "{n} min walk",
    showAll: "Show all ({n})",
    showLess: "Show fewer",
  },
  es: {
    nav: "Mapa",
    title: "Mapa y lo más cercano",
    lead: "Todos los sitios de la guía en un mapa. Usa tu ubicación para ordenarlo todo por distancia, o mira qué hay más cerca del evento.",
    categories: { food: "Cerca del evento", local: "Comida local", sweets: "Dulces y helados", brunch: "Brunch", dinner: "Cenar y tomar algo", sights: "Qué ver", trips: "Excursiones" },
    allCategories: "Todo",
    fromVenue: "Desde el evento",
    fromMe: "Cerca de mí",
    locating: "Buscando tu ubicación…",
    locationDenied: "No se pudo obtener tu ubicación. Permite el acceso en el navegador o usa las distancias desde el evento.",
    nearestTo: { venue: "Lo más cercano al evento", me: "Lo más cercano a ti" },
    venue: "Sede de Evo France",
    you: "Estás aquí",
    openMaps: "Cómo llegar",
    walk: "{n} min a pie",
    showAll: "Ver todos ({n})",
    showLess: "Ver menos",
  },
  fr: {
    nav: "Carte",
    title: "Carte & à proximité",
    lead: "Toutes les adresses du guide sur une carte. Utilisez votre position pour tout trier par distance, ou voyez ce qui est le plus proche du lieu de l'événement.",
    categories: { food: "Près de l'événement", local: "Cuisine niçoise", sweets: "Douceurs & glaces", brunch: "Brunch", dinner: "Dîner & verres", sights: "À voir", trips: "Excursions" },
    allCategories: "Tout",
    fromVenue: "Depuis l'événement",
    fromMe: "Près de moi",
    locating: "Localisation…",
    locationDenied: "Impossible d'obtenir votre position. Autorisez la localisation dans le navigateur, ou utilisez les distances depuis l'événement.",
    nearestTo: { venue: "Le plus proche de l'événement", me: "Le plus proche de vous" },
    venue: "Lieu d'Evo France",
    you: "Vous êtes ici",
    openMaps: "Itinéraire",
    walk: "{n} min à pied",
    showAll: "Tout voir ({n})",
    showLess: "Voir moins",
  },
};
