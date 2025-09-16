# Gedanken zur Analyse und Integration

## Problemanalyse

Das Problem liegt in der TypeScript-Definition der `gtag` Funktion. Die aktuelle Definition in `/src/types/gtag.d.ts` unterstützt nicht die spezifische Signatur für Enhanced Conversions mit `'set', 'user_data'`.

### Aktuelle Situation:
- Die `gtag.d.ts` Datei definiert `gtag` mit folgenden Signaturen:
  - `(command: 'config', targetId: string, config?: {...}): void`
  - `(command: 'event', eventName: string, config?: {...}): void`
  - `(command: 'consent', action: string, config?: {...}): void`
  - `(command: 'set', config: {...}): void` ← Hier ist das Problem

- Die `set` Signatur erwartet nur einen Parameter nach dem Command
- Enhanced Conversions benötigen aber: `gtag('set', 'user_data', {...})`

## Existierende Files im Projekt

### Tracking-bezogene Komponenten:
- `/src/components/EnglishConversionTracker.tsx` - Fehlerhafte Datei
- `/src/components/ConversionTracker.tsx` - Deutsche Version (funktioniert, nutzt aber kein Enhanced Conversions)
- `/src/components/GoogleAnalytics.tsx` - Hauptkomponente für GA/Ads Integration
- `/src/lib/tracking.ts` - Utility-Funktionen für Tracking
- `/src/types/gtag.d.ts` - TypeScript-Definitionen

### Form-Komponenten:
- `/src/components/EnglishMultiStepForm.tsx` - Englisches Formular
- `/src/components/MultiStepForm.tsx` - Deutsches Formular
- `/src/hooks/useTrackingParams.ts` - Hook für Tracking-Parameter

## Integration ins bestehende Projekt

Die Lösung muss sich nahtlos ins bestehende Projekt einfügen:
1. Die gtag TypeScript-Definition erweitern für Enhanced Conversions
2. Den Code in EnglishConversionTracker.tsx anpassen
3. Sicherstellen, dass beide Tracker (Deutsch/Englisch) weiterhin funktionieren