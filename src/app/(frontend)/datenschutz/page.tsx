import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Datenschutzerklarung",
  description: `Datenschutzerklarung von ${siteConfig.name}, ${siteConfig.address.city}.`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-cs-black pb-32 pt-40 md:pt-48">
      <div className="mx-auto max-w-3xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cs-accent">
          Rechtliches
        </p>
        <h1 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight text-cs-white md:text-4xl">
          Datenschutz
        </h1>

        <div className="mt-16 space-y-12 text-sm leading-relaxed text-cs-gray-400">
          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <p className="mt-2">
              <span className="text-cs-white font-semibold">
                {siteConfig.name}
              </span>
              <br />
              {siteConfig.owner}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <p className="mt-2">
              Telefon: {siteConfig.phone}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-cs-accent underline underline-offset-4 transition-colors hover:text-cs-white"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* 2. Allgemeines zur Datenverarbeitung */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer
              grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfaehigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten unserer
              Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers.
              Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige
              Einholung einer Einwilligung aus tatsaechlichen Gründen nicht
              möglich ist und die Verarbeitung der Daten durch gesetzliche
              Vorschriften gestattet ist.
            </p>
          </div>

          {/* 3. Rechtsgrundlage */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              3. Rechtsgrundlage
            </h2>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
              eine Einwilligung der betroffenen Person einholen, dient Art. 6
              Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als
              Rechtsgrundlage.
            </p>
            <p className="mt-2">
              Bei der Verarbeitung von personenbezogenen Daten, die zur
              Erfuellung eines Vertrages, dessen Vertragspartei die betroffene
              Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO
              als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge,
              die zur Durchfuehrung vorvertraglicher Massnahmen erforderlich
              sind (z.B. Online-Mitgliedschaftsabschluss).
            </p>
            <p className="mt-2">
              Soweit eine Verarbeitung personenbezogener Daten zur Erfuellung
              einer rechtlichen Verpflichtung erforderlich ist, dient Art. 6
              Abs. 1 lit. c DSGVO als Rechtsgrundlage.
            </p>
            <p className="mt-2">
              Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
              unseres Unternehmens oder eines Dritten erforderlich und
              überwiegen die Interessen, Grundrechte und Grundfreiheiten des
              Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
              Abs. 1 lit. f DSGVO als Rechtsgrundlage.
            </p>
          </div>

          {/* 4. Server-Logfiles */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              4. Erfassung allgemeiner Daten (Server-Logfiles)
            </h2>
            <p>
              Beim Besuch unserer Website werden durch den Browser automatisch
              Informationen an den Server übermittelt. Diese Informationen
              werden temporaer in sogenannten Server-Logfiles gespeichert:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>IP-Adresse</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="mt-3">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
              Zusammenfuehrung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          {/* 5. Cookies */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              5. Cookies
            </h2>
            <p>
              Diese Website verwendet technisch notwendige Cookies, die für den
              Betrieb der Seite erforderlich sind. Technisch notwendige Cookies
              werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
              Wir haben ein berechtigtes Interesse an der Speicherung von
              technisch notwendigen Cookies zur technisch fehlerfreien und
              optimierten Bereitstellung unserer Dienste.
            </p>
            <p className="mt-2">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschliessen sowie das automatische Löschen der Cookies
              beim Schliessen des Browsers aktivieren.
            </p>
          </div>

          {/* 6. Online-Mitgliedschaft */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              6. Online-Mitgliedschaft (Magicline)
            </h2>
            <p>
              Für den Online-Abschluss einer Mitgliedschaft nutzen wir die
              Magicline Connect API der Magicline GmbH. Dabei werden folgende
              Daten verarbeitet:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
              <li>
                Persönliche Daten (Name, Anschrift, Geburtsdatum, Geschlecht)
              </li>
              <li>Kontaktdaten (E-Mail-Adresse, Telefonnummer)</li>
              <li>Zahlungsdaten (IBAN, BIC, Kontoinhaber)</li>
              <li>Vertragsdaten (gewählter Tarif, Laufzeit)</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung erfolgt zum Zweck der Vertragsdurchfuehrung auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden
              direkt an die Magicline-Plattform übermittelt und dort im
              Auftrag des Studios verarbeitet. Die IBAN-Validierung erfolgt in
              Echtzeit, um eine korrekte Zahlungsabwicklung sicherzustellen.
            </p>
          </div>

          {/* 7. Newsletter */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              7. Newsletter
            </h2>
            <p>
              Wenn Sie den auf der Website angebotenen Newsletter beziehen
              möchten, benoetigen wir von Ihnen eine E-Mail-Adresse. Die
              Anmeldung erfolgt freiwillig auf Grundlage Ihrer Einwilligung
              gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p className="mt-2">
              Sie können Ihre Einwilligung zur Speicherung der Daten und deren
              Nutzung zum Newsletter-Versand jederzeit widerrufen, z.B. über
              den Abmeldelink im Newsletter oder per E-Mail an{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-cs-accent underline underline-offset-4 transition-colors hover:text-cs-white"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          {/* 8. Hosting */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              8. Hosting
            </h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich insbesondere um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
              Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
              eine Website generiert werden, handeln.
            </p>
            <p className="mt-2">
              Der Einsatz des Hosters erfolgt im Interesse einer sicheren,
              schnellen und effizienten Bereitstellung unseres
              Online-Angebots durch einen professionellen Anbieter (Art. 6
              Abs. 1 lit. f DSGVO).
            </p>
          </div>

          {/* 9. SSL/TLS */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              9. SSL- bzw. TLS-Verschluesselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgruenden und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen,
              die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschluesselung. Eine verschluesselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von &quot;http://&quot;
              auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
          </div>

          {/* 10. Ihre Rechte */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              10. Ihre Rechte als betroffene Person
            </h2>
            <p>Sie haben gegenüber uns folgende Rechte:</p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
              <li>
                <strong className="text-cs-gray-300">Auskunftsrecht</strong>{" "}
                (Art. 15 DSGVO)
              </li>
              <li>
                <strong className="text-cs-gray-300">
                  Recht auf Berichtigung
                </strong>{" "}
                (Art. 16 DSGVO)
              </li>
              <li>
                <strong className="text-cs-gray-300">
                  Recht auf Löschung
                </strong>{" "}
                (Art. 17 DSGVO)
              </li>
              <li>
                <strong className="text-cs-gray-300">
                  Recht auf Einschraenkung der Verarbeitung
                </strong>{" "}
                (Art. 18 DSGVO)
              </li>
              <li>
                <strong className="text-cs-gray-300">
                  Recht auf Datenuebertragbarkeit
                </strong>{" "}
                (Art. 20 DSGVO)
              </li>
              <li>
                <strong className="text-cs-gray-300">Widerspruchsrecht</strong>{" "}
                (Art. 21 DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Sie haben zudem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
            </p>
          </div>

          {/* 11. Widerruf */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              11. Widerruf Ihrer Einwilligung
            </h2>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
              ausdrücklichen Einwilligung möglich. Sie können eine bereits
              erteilte Einwilligung jederzeit widerrufen. Die Rechtmaessigkeit
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
              Widerruf unberuehrt.
            </p>
          </div>

          {/* 12. Aktualitaet */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cs-gray-300">
              12. Aktualitaet und Aenderungen
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              Maerz 2026. Durch die Weiterentwicklung unserer Website oder
              aufgrund geaenderter gesetzlicher bzw. behoerdlicher Vorgaben kann
              es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
