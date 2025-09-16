# Checkliste für Entwickler

## Funktionalität prüfen

### Landing Pages
- [ ] Deutsche Landing Page (/) aufrufen
- [ ] CTA-Button "Jetzt Nachhilfe-Lehrer finden" klicken
- [ ] Prüfen: Weiterleitung zu /lehrer-finden ohne URL-Parameter
- [ ] Englische Landing Page (/lp/tutoring) aufrufen
- [ ] CTA-Button "Find Your Tutor Now" klicken
- [ ] Prüfen: Weiterleitung zu /find-teacher ohne URL-Parameter

### Multi-Step Forms
- [ ] Deutsche Form (/lehrer-finden) durchlaufen
- [ ] Prüfen: Alle 5 Schritte werden angezeigt
- [ ] Prüfen: PLZ wird in Schritt 4 abgefragt (nicht übersprungen)
- [ ] Englische Form (/find-teacher) durchlaufen
- [ ] Prüfen: Alle 5 Schritte werden angezeigt
- [ ] Prüfen: Postcode wird in Schritt 4 abgefragt (nicht übersprungen)

### Visuelle Prüfung
- [ ] Hero-Button ist prominent und zentriert
- [ ] Kein PLZ-Eingabefeld mehr sichtbar
- [ ] Button-Größe angemessen (größer als vorher)
- [ ] Responsive Design funktioniert (Mobile/Desktop)

### Build & Deployment
- [ ] npm run build läuft ohne Fehler
- [ ] Keine TypeScript-Fehler
- [ ] Keine ungenutzten Imports (ESLint-Warnings behoben)
- [ ] Production-Build testen

### Edge Cases
- [ ] Alte URLs mit PLZ-Parameter funktionieren noch (werden ignoriert)
- [ ] Form-Submission funktioniert weiterhin mit PLZ
- [ ] HubSpot-Integration erhält weiterhin PLZ-Daten