import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { places } from "@/content/places";
import { links, venueSpots } from "@/content/shared";
import type { SectionId } from "@/content/types";
import { hasLocale } from "@/lib/i18n";
import { mapText } from "@/lib/mapText";
import { ExtLink, RichText } from "@/components/RichText";
import { NearbyExplorer } from "@/components/NearbyExplorer";
import { SiteNav } from "@/components/SiteNav";
import { LangMenu } from "@/components/LangMenu";
import { VenueSpots } from "@/components/VenueSpots";

const SECTIONS: SectionId[] = ["venue", "local", "must", "brunch", "hangout", "itinerary", "more", "date"];

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const c = await getContent(lang);
  const m = mapText[lang];
  const walk = (n: number) => c.ui.walk.replace("{n}", String(n));

  const navItems = [{ id: "map", label: m.nav }, ...SECTIONS.map((id) => ({ id, label: c.ui.nav[id] }))];
  const mapPlaces = places.map((p) => ({ ...p, kind: p.spot ? c.venue.spots[p.spot]?.kind : undefined }));

  const cards = venueSpots.map((s) => {
    const t = c.venue.spots[s.id];
    return {
      id: s.id,
      tierClass: s.tierClass,
      walk: s.walk,
      node: (
        <article className="card">
          <div className="ph">
            <img src={s.img} alt={s.name} loading="lazy" />
            <span className={`tier ${s.tierClass}`}>{s.tier}</span>
          </div>
          <div className="body">
            <div className="kind">{t.kind}</div>
            <h3>
              <ExtLink href={s.map}>{s.name}</ExtLink>
            </h3>
            <p>
              <RichText text={t.desc} />
            </p>
            {t.note && <p className="note">{t.note}</p>}
            <div className="meta">
              <span>{walk(s.walk)}</span>
              {t.prices.map((p) => (
                <span key={p}>
                  <RichText text={p} />
                </span>
              ))}
            </div>
          </div>
        </article>
      ),
    };
  });

  return (
    <>
      <header className="hero">
        <LangMenu locale={lang} label={c.ui.language} />
        <div className="wrap">
          <div>
            <div className="eyebrow">{c.ui.eyebrow}</div>
            <h1>
              {c.ui.titleBefore}
              <span>{c.ui.titleAccent}</span>
              {c.ui.titleAfter}
            </h1>
            <div className="byline">
              <img src="/img/image2.jpg" alt="Damascus" /> {c.ui.byline}
            </div>
            <p className="intro">{c.ui.intro}</p>
            <div className="legend" aria-label={c.ui.tierLegend}>
              <span className="tier s">S</span>
              <span className="tier a">A</span>
              <span className="tier b">B</span>
            </div>
          </div>
          <img className="hero-banner" src="/img/image1.jpg" alt="Evo France, Oct 9th–11th 2026, Parvis de l'Europe, Nice, France" />
        </div>
      </header>

      <SiteNav locale={lang} items={navItems} languageLabel={c.ui.language} />

      <main className="wrap">
        <section id="map">
          <div className="sec-head">
            <h2>{m.title}</h2>
            <p>{m.lead}</p>
          </div>
          <NearbyExplorer places={mapPlaces} text={m} locale={lang} />
        </section>

        <section id="venue">
          <div className="sec-head">
            <h2>{c.venue.title}</h2>
            <p>{c.venue.lead}</p>
          </div>
          <VenueSpots cards={cards} labels={c.ui.filters} />
        </section>

        <section id="local">
          <div className="sec-head">
            <h2>{c.local.title}</h2>
            <p>{c.local.lead}</p>
          </div>
          <div className="dishes">
            {c.local.dishes.map((d) => (
              <div className="dish" key={d.name}>
                <img src={d.img} alt={d.name} loading="lazy" />
                <h3>{d.name}</h3>
                <p>
                  <RichText text={d.text} />
                </p>
              </div>
            ))}
          </div>
          <p className="after">{c.local.after}</p>
          <h3 className="sub">{c.local.restaurantsTitle}</h3>
          <SpotList items={c.local.restaurants} />
        </section>

        <section id="must">
          <div className="sec-head">
            <h2>{c.must.title}</h2>
            <p>{c.must.lead}</p>
          </div>
          <div className="feature">
            <img src="/img/image20.jpg" alt="Fenocchio" loading="lazy" />
            <div>
              <h3>
                <ExtLink href={links.fenocchio}>Fenocchio</ExtLink> <span className="tier s">S+</span>
              </h3>
              <p>{c.must.fenocchio}</p>
            </div>
          </div>
          <div className="feature">
            <img src="/img/image21.jpg" alt="Les Petits Marchands" loading="lazy" />
            <div>
              <h3>
                <ExtLink href={links.petitsMarchands}>Les Petits Marchands</ExtLink>
              </h3>
              <p>{c.must.petitsMarchands}</p>
            </div>
          </div>
          <div className="feature feature-text">
            <div>
              <h3>{c.must.boulangeriesTitle}</h3>
              <p>
                <RichText text={c.must.boulangeries} />
              </p>
            </div>
          </div>
        </section>

        <section id="brunch">
          <div className="sec-head">
            <h2>{c.brunch.title}</h2>
          </div>
          <SpotList items={c.brunch.items} />
        </section>

        <section id="hangout">
          <div className="sec-head">
            <h2>{c.hangout.title}</h2>
            <p>{c.hangout.lead}</p>
          </div>
          {c.hangout.areas.map((a) => (
            <div className="area" key={a.title}>
              <img src={a.img} alt={a.title} loading="lazy" />
              <div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <SpotList items={a.items} halalLabel={c.hangout.halal} single />
              </div>
            </div>
          ))}
        </section>

        <section id="itinerary">
          <div className="sec-head">
            <h2>{c.itinerary.title}</h2>
            <p>{c.itinerary.lead}</p>
          </div>
          <div className="video-cta">
            <span>{c.itinerary.video}</span>
            <a href={links.video} target="_blank" rel="noopener noreferrer">
              {c.itinerary.videoLink}
            </a>
          </div>
          <ol className="route">
            {c.itinerary.stops.map((s) => (
              <li className="stop" key={s.title}>
                <div className="stop-body">
                  <h3>{s.title}</h3>
                  {s.img && <img src={s.img} alt={s.title} loading="lazy" />}
                  <p>
                    <RichText text={s.text} />
                  </p>
                  {s.map && (
                    <a className="maplink" href={s.map} target="_blank" rel="noopener noreferrer">
                      {c.ui.openMaps}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="more">
          <div className="sec-head">
            <h2>{c.more.title}</h2>
            <p>{c.more.lead}</p>
          </div>
          <div className="trips">
            {c.more.trips.map((t) => (
              <div className={t.img ? "trip" : "trip trip-text"} key={t.title}>
                {t.img && <img src={t.img} alt={t.title} loading="lazy" />}
                <div className="how">{t.how}</div>
                <h3>
                  <ExtLink href={t.map}>{t.title}</ExtLink>
                </h3>
                <p>
                  <RichText text={t.text} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="date">
          <div className="sec-head">
            <h2>{c.date.title}</h2>
            <p>{c.date.lead}</p>
          </div>
          {c.date.ideas.map((d) => (
            <div className="feature" key={d.title}>
              <img src={d.img} alt={d.title} loading="lazy" />
              <div>
                <h3>{d.title}</h3>
                <p>
                  <RichText text={d.text} />
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <div className="wrap">
          <h2>{c.footer.title}</h2>
          <p>{c.footer.text}</p>
        </div>
      </footer>
    </>
  );
}

function SpotList({
  items,
  halalLabel,
  single,
}: {
  items: { name: string; href?: string; text: string; halal?: boolean }[];
  halalLabel?: string;
  single?: boolean;
}) {
  return (
    <ul className={single ? "spots spots-single" : "spots"}>
      {items.map((i) => (
        <li key={i.name}>
          <strong>
            <ExtLink href={i.href}>{i.name}</ExtLink>
            {i.halal && <span className="halal">{halalLabel}</span>}
          </strong>
          <span>{i.text}</span>
        </li>
      ))}
    </ul>
  );
}
