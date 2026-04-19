import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${siteConfig.name}, ${siteConfig.address.city}.`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="bg-cs-black pb-32 pt-40 md:pt-48">
      <div className="mx-auto max-w-3xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cs-accent">
          Rechtliches
        </p>
        <h1 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight text-cs-white md:text-4xl">
          Impressum
        </h1>

        <div className="mt-16 space-y-12 text-sm leading-relaxed text-cs-gray-400">
          {/* Angaben gem. § 5 TMG */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Angaben gemäß &sect; 5 TMG
            </h2>
            <p className="text-cs-white font-semibold">{siteConfig.name}</p>
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Kontakt
            </h2>
            <p>Telefon: {siteConfig.phone}</p>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-cs-accent underline underline-offset-4 transition-colors hover:text-cs-white"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* USt-IdNr */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß &sect; 27a
              Umsatzsteuergesetz:
            </p>
            <p className="mt-1 text-cs-white">{siteConfig.taxId}</p>
          </div>

          {/* Verantwortlich */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Verantwortlich für den Inhalt gemäß &sect; 18 Abs. 2 MStV
            </h2>
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </div>

          {/* Streitschlichtung */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europaeische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cs-accent underline underline-offset-4 transition-colors hover:text-cs-white"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          {/* Verbraucherstreitbeilegung */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          {/* Haftung für Inhalte */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß &sect; 7 Abs. 1 TMG für
              eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umstaenden zu forschen, die auf eine rechtswidrige Taetigkeit
              hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberuehrt. Eine diesbezuegliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>

          {/* Haftung für Links */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthaelt Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="mt-2">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstösse überprueft. Rechtswidrige Inhalte
              waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
              ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung ausserhalb der Grenzen des Urheberrechtes beduerfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-2">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
