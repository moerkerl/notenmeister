export const metadata = {
  title: 'Impressum - Notenmeister',
  description: 'Impressum und Kontaktdaten von Notenmeister - Bildungsinstitut Fokus AG',
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontaktadresse</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Bildungsinstitut Fokus AG</strong></p>
                <p className="mb-2">Notenmeister</p>
                <p className="mb-2">Musterstrasse 123</p>
                <p className="mb-2">8000 Zürich</p>
                <p className="mb-2">Schweiz</p>
                <p className="mb-4">
                  <strong>Telefon:</strong> 078 314 62 65<br />
                  <strong>E-Mail:</strong> info@notenmeister.ch
                </p>
                <p className="mb-2">
                  <strong>Handelsregister:</strong> CH-123.456.789<br />
                  <strong>UID:</strong> CHE-123.456.789
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vertretungsberechtigte Personen</h2>
              <p>
                Die Geschäftsführung der Bildungsinstitut Fokus AG
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Inhalt des Onlineangebotes</h3>
                  <p>
                    Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Verweise und Links</h3>
                  <p>
                    Bei direkten oder indirekten Verweisen auf fremde Webseiten (&ldquo;Hyperlinks&rdquo;), die ausserhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschliesslich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Urheber- und Kennzeichenrecht</h3>
                  <p>
                    Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datenschutz</h2>
              <p>
                Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit technisch möglich und zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
              </p>
              <p className="mt-4">
                Weitere Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz" className="text-[#059669] hover:text-[#047857] underline">Datenschutzerklärung</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rechtswirksamkeit</h2>
              <p>
                Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Stand: Januar 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}