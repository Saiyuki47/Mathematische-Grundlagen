# Mathematische Grundlagen

Interaktive Lernseite für **Mathematische Grundlagen** (Grundrechenarten,
Mengen & Logik, Summen/Induktion/Kombinatorik, Funktionen & Relationen,
Folgen/Reihen, Grenzwerte/Stetigkeit, Differentiation). Baut auf der geteilten
UI-Engine [`lernseiten-ui`](https://github.com/Saiyuki47/lernseiten-ui);
Formeln werden mit [KaTeX](https://katex.org/) gesetzt.

## Tabs

| Tab | Beschreibung |
|-----|-------------|
| **Übungsblätter** | Aufgaben (Blatt 0–13) mit Tipps und aufklappbaren Musterlösungen, verlinkt auf passende Referenz-Themen |
| **Referenz** | Erklärte Nachschlage-Karten zu allen Themen, je mit durchgerechneten Beispielen |
| **Hilfsmittel** | Madis Formelsammlung (PDF), Claude-Formelsammlung (zweiseitig, druckbar) und Lösungsrezepte (zweiseitige Gebrauchsanleitung je Aufgabenart), je in einem eigenen Tab |
| **Moodle** | Datei-Browser über die Kursmaterialien mit Inline-Vorschau |
| **Quiz** | Quiz mit Fortschritt, Feedback und Auswertung |
| **Karteikarten** | Spaced-Repetition-Lernkarten (SM-2) |

## Quickstart

```bash
npm install
npm run dev
```

## Struktur

Alle Inhalte liegen in `src/data/` – die Referenz-Karten pro Thema als
Einzeldateien unter `src/data/referenz/`. Der Moodle-Datei-Baum
`src/data/dateien.ts` wird von `scripts/generate-dateien.mjs` aus
`public/material/` erzeugt (automatisch über `predev`/`prebuild`) und ist daher
**nicht** eingecheckt.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) als Build-Tool
- [KaTeX](https://katex.org/) für den Formelsatz
- [`lernseiten-ui`](https://github.com/Saiyuki47/lernseiten-ui) für Quiz, Referenz, Suche, Karteikarten & Basis-CSS
