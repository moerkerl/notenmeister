# Gedanken zur PLZ-Funktionalität und deren Entfernung

## Aktuelle Implementierung

### PLZ-Flow im System
1. **LPHero Komponente** hat ein optionales PLZ-Eingabefeld
2. Bei PLZ-Eingabe wird diese als URL-Parameter weitergegeben
3. **MultiStepForm** und **EnglishMultiStepForm** prüfen auf PLZ/postcode-Parameter
4. Bei vorhandener PLZ wird Schritt 4 übersprungen
5. PLZ wird in HubSpot gespeichert

### Betroffene Files
- `/src/components/LPHero.tsx` - Hauptkomponente mit PLZ-Input
- `/src/components/MultiStepForm.tsx` - Deutsche Form mit PLZ-Logik
- `/src/components/EnglishMultiStepForm.tsx` - Englische Form mit Postcode-Logik
- `/src/app/page.tsx` - Deutsche Landing Page
- `/src/app/lp/tutoring/page.tsx` - Englische Landing Page
- `/src/components/LPSection.tsx` - Nutzt auch onButtonClick Handler
- `/src/components/LPSteps.tsx` - Nutzt auch onButtonClick Handler

### Tracking und Analytics
Die PLZ-Eingabe wird getrackt mit:
- `hero_plz_entered` Event
- `hero_plz_auto_submit` Event
- `postcode_prefilled_en` Event
- `postcode_step_skipped_en` Event

### Integration ins bestehende Projekt

Die Entfernung der PLZ-Funktionalität vereinfacht:
1. Die Hero-Komponente wird cleaner (nur noch Button)
2. Die Form-Logik wird einfacher (keine Skip-Logic mehr)
3. Weniger Edge-Cases und Fehlerquellen
4. Einheitliche User Journey für alle Nutzer

Die PLZ wird weiterhin im MultiStepForm abgefragt, nur nicht mehr vorab im Hero-Bereich.