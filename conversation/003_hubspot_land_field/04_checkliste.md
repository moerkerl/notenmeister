# Checkliste für Entwickler

## HubSpot-Konfiguration prüfen
- [ ] HubSpot-Account öffnen
- [ ] Kontakt-Eigenschaften prüfen
- [ ] Sicherstellen, dass Feld "land" existiert (interner Name: `land`)
- [ ] Feldtyp sollte Text/String sein

## Formular-Tests

### Deutsches Formular testen
- [ ] Auf notenmeister.ch gehen
- [ ] Formular ausfüllen und absenden
- [ ] In HubSpot prüfen: Land-Feld sollte "Schweiz" enthalten

### Englisches Formular testen
- [ ] Auf notenmeister.ch/lp/tutoring gehen
- [ ] "Find Your Tutor Now" klicken
- [ ] Englisches Formular komplett ausfüllen
- [ ] In HubSpot prüfen: Land-Feld sollte "Schweiz Englischsprachig" enthalten

## Datenvalidierung in HubSpot

### Für englische Leads prüfen
- [ ] E-Mail korrekt übertragen
- [ ] Nachname korrekt übertragen
- [ ] Telefon korrekt übertragen
- [ ] PLZ korrekt übertragen
- [ ] Schulstufe ins Deutsche gemappt (z.B. "1st Grade Primary" → "1. Klasse Primar")
- [ ] Schüler-Wert ins Deutsche gemappt (z.B. "my-daughter" → "Meine Tochter")
- [ ] utm_website_contact zeigt "notenmeister.ch/en"
- [ ] land zeigt "Schweiz Englischsprachig"

### Tracking-Parameter prüfen
- [ ] Google Click ID wird übertragen (falls vorhanden)
- [ ] UTM-Parameter werden übertragen (falls vorhanden)

## Build & Deployment
- [ ] npm run build läuft erfolgreich
- [ ] Keine TypeScript-Fehler
- [ ] Production-Deployment testen