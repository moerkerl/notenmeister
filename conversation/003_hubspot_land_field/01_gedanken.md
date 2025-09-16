# Gedanken zur HubSpot-Integration für englische Leads

## Aktuelle Situation - Datenfluss für englische Leads

### 1. Datensammlung (EnglishMultiStepForm)
Das englische Formular sammelt:
- `student`: "my-daughter", "my-son", "i", "someone-else"
- `grade`: Englische Klassenbezeichnungen (z.B. "1st Grade Primary")
- `subject`: Fach auf Englisch
- `postcode`: PLZ
- `lastname`: Nachname
- `phone`: Telefon
- `email`: E-Mail

### 2. Datenübertragung an API
Die Daten werden mit folgenden Zusatzinfos gesendet:
- `language: 'english'` - Markiert als englischer Lead
- `utm_website_contact: 'notenmeister.ch/en'` - Website-Quelle
- Tracking-Parameter (gclid, utm_source, utm_medium, etc.)

### 3. Mapping zu HubSpot-Feldern
In `mapPortalDataToHubSpot()` findet folgendes Mapping statt:

**Direkte Übertragungen:**
- `email` → `email`
- `nachname` → `lastname`
- `telefon` → `phone`
- `plz` → `plz`

**Statische Werte:**
- `funktion` → "Kunde / Schüler"
- `kontakt_hat_lead_formular_ausgefullt` → "Ja"

**Gemappte Werte:**
- `schueler` → `sucht_nachhilfe_fur` (Englisch zu Deutsch gemappt: "my-daughter" → "Meine Tochter")
- `fach` → `was_fur_nachhilfe_benotigt_ihr_sohn_`
- `klasse` → `schulstufe_kind` (Englisch zu Deutsch gemappt: "1st Grade Primary" → "1. Klasse Primar")

**Tracking:**
- `utm_website_contact` → "notenmeister.ch/en" für englische Leads
- `hs_google_click_id` → gclid (falls vorhanden)
- `utm_campaign_contact` → utm_campaign (falls vorhanden)
- `utm_source_contact` → utm_source (falls vorhanden)

## Erkenntnisse

1. **Alle englischen Werte werden ins Deutsche übersetzt** bevor sie nach HubSpot gesendet werden
2. **Die Sprache wird nur über `utm_website_contact`** erkennbar ("notenmeister.ch/en" vs "notenmeister.ch")
3. **Kein explizites Sprachfeld** existiert in HubSpot

## Integration des Land-Feldes

Das neue Feld `land` sollte:
- In `HubSpotContactData` Interface hinzugefügt werden
- In `mapPortalDataToHubSpot()` basierend auf `language` Parameter gesetzt werden
- Wert "Schweiz Englischsprachig" für englische Leads
- Wert "Schweiz" (oder leer) für deutsche Leads