# Auftrag: TypeScript Build-Fehler beheben

## Problem
Beim Build-Prozess tritt ein TypeScript-Fehler in der Datei `EnglishConversionTracker.tsx` auf.

## Fehlermeldung
```
Type error: No overload matches this call.
  ./src/components/EnglishConversionTracker.tsx:55:23
  Argument of type '"set"' is not assignable to parameter of type '"config"'.
```

Der Fehler tritt bei folgendem Code auf:
```typescript
window.gtag('set', 'user_data', { email: userEmail, address: {} });
```

## Aufgabe
Den TypeScript-Fehler analysieren und beheben, sodass der Build-Prozess erfolgreich durchläuft.