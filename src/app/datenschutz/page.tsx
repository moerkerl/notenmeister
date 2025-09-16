export const metadata = {
  title: 'Datenschutz - Notenmeister',
  description: 'Datenschutzerklärung von Notenmeister - Informationen zum Umgang mit Ihren Daten',
}

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <p className="mb-6">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung Ihrer personenbezogenen Daten beim Besuch unserer Website und bei der Nutzung unserer Dienstleistungen.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Verantwortliche Stelle</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2">Bildungsinstitut Fokus AG</p>
                <p className="mb-2">Staffelstr 8</p>
                <p className="mb-2">8045 Zürich</p>
                <p className="mb-2">Schweiz</p>
                <p className="mb-2">
                  <strong>E-Mail:</strong> dantico@fokus-nachhilfe.ch<br />
                  <strong>Telefon:</strong> 078 314 62 65
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Datenschutzbeauftragte Person</h2>
              <p>
                Giuseppe D&apos;Antico<br />
                Telefon: 078 314 62 65<br />
                E-Mail: dantico@fokus-nachhilfe.ch
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Erhebung und Verarbeitung von Daten</h2>
              <p>
                Wir erheben und verarbeiten Ihre Daten ausschliesslich im Rahmen der gesetzlichen Bestimmungen des schweizerischen Datenschutzrechts. Beim Besuch unserer Website werden automatisch folgende Daten erfasst:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name der abgerufenen Datei</li>
                <li>Übertragene Datenmenge</li>
                <li>Meldung über erfolgreichen Abruf</li>
                <li>Webbrowser und Browserversion</li>
                <li>Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
              </ul>
              <p>
                Diese Daten werden ausschliesslich zu statistischen Zwecken und zur Verbesserung unseres Angebots verwendet. Eine Zuordnung zu einzelnen Personen findet nicht statt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Kontaktformular und E-Mail-Kontakt</h2>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen gespeichert. Folgende Daten werden dabei erhoben:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Vor- und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Ihre Nachricht</li>
                <li>Informationen zum gewünschten Nachhilfefach und Schulstufe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Nutzung und Weitergabe personenbezogener Daten</h2>
              <p>
                Ihre personenbezogenen Daten werden nur für die Durchführung der Nachhilfevermittlung und damit verbundener Dienstleistungen verwendet. Eine Weitergabe Ihrer Daten erfolgt ausschliesslich:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>An die von Ihnen ausgewählten oder für Sie passenden Nachhilfelehrer</li>
                <li>An Dienstleister, die uns bei der Bereitstellung unserer Services unterstützen (z.B. IT-Dienstleister, Hosting-Provider)</li>
                <li>Wenn wir gesetzlich dazu verpflichtet sind</li>
                <li>Wenn Sie uns Ihre ausdrückliche Einwilligung erteilt haben</li>
              </ul>
              <p>
                Eine Weitergabe an Dritte zu Werbezwecken erfolgt nicht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Computer gespeichert werden. Sie können die Verwendung von Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern, wodurch jedoch möglicherweise nicht alle Funktionen unserer Website vollumfänglich nutzbar sind.
              </p>
              <p className="mt-4">
                Wir verwenden folgende Arten von Cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Technisch notwendige Cookies:</strong> Diese sind für den Betrieb der Website erforderlich</li>
                <li><strong>Analyse-Cookies:</strong> Diese helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern</li>
                <li><strong>Marketing-Cookies:</strong> Diese werden nur mit Ihrer Zustimmung gesetzt</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre durch uns verwalteten Daten gegen Manipulation, Verlust, Zerstörung und gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmassnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
              <p className="mt-4">
                Die Datenübertragung im Internet erfolgt über eine verschlüsselte SSL/TLS-Verbindung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Ihre Rechte</h2>
              <p>
                Nach dem schweizerischen Datenschutzgesetz haben Sie folgende Rechte:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Auskunftsrecht:</strong> Sie können jederzeit Auskunft über Ihre bei uns gespeicherten Daten verlangen</li>
                <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
                <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                <li><strong>Einschränkung der Verarbeitung:</strong> Sie können die Einschränkung der Datenverarbeitung verlangen</li>
                <li><strong>Datenübertragbarkeit:</strong> Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten Format zur Verfügung stellen</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen</li>
                <li><strong>Widerruf der Einwilligung:</strong> Sie können eine erteilte Einwilligung jederzeit widerrufen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Aufbewahrungsfristen</h2>
              <p>
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Nach Ablauf dieser Fristen werden die Daten gelöscht oder anonymisiert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen sowie der Datenverarbeitung anzupassen. Die jeweils aktuelle Version finden Sie auf unserer Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Kontakt</h2>
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie sich bitte an:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="mb-2">Notenmeister</p>
                <p className="mb-2">Bildungsinstitut Fokus AG</p>
                <p className="mb-2">Staffelstr 8</p>
                <p className="mb-2">8045 Zürich</p>
                <p className="mb-2">E-Mail: dantico@fokus-nachhilfe.ch</p>
                <p className="mb-2">Telefon: 078 314 62 65</p>
              </div>
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