import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Figtree, Saira_Extra_Condensed } from "next/font/google";
import { getContent } from "@/content";
import { hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

const display = Saira_Extra_Condensed({ subsets: ["latin"], weight: ["600", "800"], variable: "--nf-display" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"], variable: "--nf-body" });

export const dynamicParams = false;

// Vercel sets this to the production domain; used for absolute social preview URLs.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const c = await getContent(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: { title: c.meta.title, description: c.meta.description, images: ["/img/image1.jpg"], locale: lang },
  };
}

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a1670" },
    { media: "(prefers-color-scheme: dark)", color: "#080d26" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
