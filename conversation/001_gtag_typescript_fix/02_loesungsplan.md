# Lösungsplan

## Zu ändernde Files

### 1. `/src/types/gtag.d.ts`
Die TypeScript-Definition für gtag erweitern um die Enhanced Conversions Signatur zu unterstützen. Eine neue Überladung hinzufügen für `'set'` mit zwei Parametern.

### 2. `/src/components/EnglishConversionTracker.tsx` 
Optional: Den Code leicht anpassen, falls nach der TypeScript-Fix noch Probleme bestehen.

## Potentiell zu beobachtende Files

### Primär zu beobachten:
- `/src/components/ConversionTracker.tsx` - Könnte auch Enhanced Conversions nutzen wollen
- `/src/lib/tracking.ts` - Falls zusätzliche Tracking-Funktionen hinzukommen
- `/src/components/GoogleAnalytics.tsx` - Hauptkomponente für gtag-Integration

### Sekundär zu beobachten:
- `/src/components/MultiStepForm.tsx` - Falls Enhanced Conversions dort auch implementiert werden
- `/src/components/EnglishMultiStepForm.tsx` - Bereits integriert, aber überwachen
- `/src/app/thank-you/page.tsx` - Verwendet EnglishConversionTracker
- `/src/app/dankesseite/page.tsx` - Verwendet ConversionTracker
- `tsconfig.json` - Falls TypeScript-Konfigurationen angepasst werden müssen
- `package.json` - Falls Dependencies aktualisiert werden müssen

## Umsetzungsschritte

1. TypeScript-Definition in gtag.d.ts erweitern
2. Build testen um zu verifizieren, dass der Fehler behoben ist
3. Falls nötig, weitere Anpassungen vornehmen