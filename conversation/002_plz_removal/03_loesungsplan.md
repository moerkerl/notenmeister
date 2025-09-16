# Lösungsplan: PLZ-Funktionalität entfernen

## Zu ändernde Files

### 1. `/src/components/LPHero.tsx`
- PLZ-State entfernen (Zeile 29)
- PLZ-Error State entfernen (Zeile 30)
- handlePLZChange Funktion entfernen (Zeilen 54-78)
- PLZ-Eingabefeld entfernen (Zeilen 155-175)
- onButtonClick Parameter vereinfachen (keine PLZ mehr übergeben)
- handleClick vereinfachen (Zeilen 32-52)

### 2. `/src/app/page.tsx`
- onButtonClick Props bei LPHero entfernen
- Direkter router.push im onClick verwenden

### 3. `/src/app/lp/tutoring/page.tsx`
- onButtonClick Props bei LPHero entfernen
- Direkter router.push im onClick verwenden

### 4. `/src/components/MultiStepForm.tsx`
- PLZ-Prefill-Logik entfernen (Zeilen 65-72)
- URL-Parameter-Check entfernen
- Skip-Step-4-Logik entfernen
- Vereinfachung der Navigation

### 5. `/src/components/EnglishMultiStepForm.tsx`
- Postcode-Prefill-Logik entfernen (Zeilen 94-115)
- shouldSkipPostcodeStep State entfernen
- Skip-Logik in handleNext entfernen (Zeilen 253-263)
- Skip-Logik in handleBack entfernen (Zeilen 271-275)

### 6. `/src/components/LPSection.tsx`
- Keine Änderungen nötig (nutzt onButtonClick nur für Navigation)

### 7. `/src/components/LPSteps.tsx`
- Keine Änderungen nötig (nutzt onCtaClick nur für Navigation)

## Potentiell zu beobachtende Files

- `/src/app/api/submit-form/route.ts` - PLZ wird weiterhin benötigt
- `/src/lib/hubspotService.ts` - PLZ-Mapping bleibt erhalten
- `/src/app/lehrer-finden/page.tsx` - Zielseite für deutsche Navigation
- `/src/app/find-teacher/page.tsx` - Zielseite für englische Navigation
- `/src/app/dankesseite/page.tsx` - Falls PLZ-Referenzen existieren
- `/src/app/thank-you/page.tsx` - Falls Postcode-Referenzen existieren
- `/src/lib/tracking.ts` - Falls PLZ-Tracking existiert
- `/src/components/ConversionTracker.tsx` - Falls PLZ genutzt wird
- `/src/components/EnglishConversionTracker.tsx` - Falls Postcode genutzt wird