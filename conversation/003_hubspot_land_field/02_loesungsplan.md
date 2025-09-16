# Lösungsplan: Land-Feld in HubSpot-Integration hinzufügen

## Zu ändernde Files

### 1. `/src/lib/hubspotService.ts`
- HubSpotContactData Interface erweitern um `land?: string`
- In mapPortalDataToHubSpot() Funktion das Land-Feld basierend auf language Parameter setzen
- "Schweiz Englischsprachig" für englische Leads
- "Schweiz" für deutsche Leads

## Potentiell zu beobachtende Files

- `/src/app/api/submit-form/route.ts` - Nutzt die HubSpot-Service Funktionen
- `/src/components/EnglishMultiStepForm.tsx` - Sendet Daten mit language='english'
- `/src/components/MultiStepForm.tsx` - Sendet Daten ohne language Parameter (implizit deutsch)
- `.env.local` - Falls HubSpot-Konfiguration benötigt wird

## Umsetzungsschritte

1. HubSpotContactData Interface um land-Feld erweitern
2. mapPortalDataToHubSpot() Funktion anpassen für Land-Zuweisung
3. Testen mit englischem und deutschem Formular