# Token-cheat-sheet

PBA Webudvikling, EAAA. Danske forklaringer og egne undervisningseksempler med tokennavne fra Atlassian Design System.

## Token og tema

**Token:** Et navn koblet til en designværdi, fx tekstfarve eller afstand.

**Tema:** Et koordineret sæt tokenværdier. Lyst og mørkt tema kan bruge samme tokennavne med forskellige værdier. Tæthed kan også være et tema.

Vælg efter funktion: Et succesikon bruger `color.icon.success`, fordi det kommunikerer succes. En farve, der ser rigtig ud i lyst tema, er ikke alene et godt valg.

Kilde: [Design tokens explained](https://atlassian.design/foundations/tokens/design-tokens/).

## Sådan læser du navnet

`color.background.danger.bold.hovered`

- `color`: designkategori.
- `background`: det, tokenet styrer.
- `danger`: betydning.
- `bold`: visuel betoning.
- `hovered`: interaktionstilstand.

Kilde: [Atlassians navngivning](https://atlassian.design/foundations/tokens/design-tokens/#how-to-read-design-token-names).

## Tokenvalg til chatbotten

- `color.text`: almindelig tekst.
- `color.text.subtle`: sekundær tekst.
- `color.text.danger`: fejltekst, fx ved et ugyldigt input.
- `color.icon.success`: ikon for succes.
- `color.background.danger.bold`: fremhævet baggrund til en destruktiv handling.
- `color.background.danger.bold.hovered`: samme baggrund ved hover.
- `color.text.inverse`: tekst på en kraftig baggrund. Kontroller den konkrete kombination i begge temaer.
- `elevation.surface`: grundoverflade.
- `space.200`: afstand på 16 px i Atlassians skala. Tallet 200 betyder ikke 200 px.

Kilde: [Atlassians tokenkatalog med beskrivelser og temaværdier](https://atlassian.design/components/tokens/all-tokens).

## React med Atlassians tokens

Eget undervisningseksempel til en app, der allerede har Atlassian Design System konfigureret:

```jsx
import { token } from '@atlaskit/tokens';

export function ChatMessage({ children }) {
  return (
    <p style={{
      color: token('color.text'),
      backgroundColor: token('elevation.surface'),
      padding: token('space.200'),
    }}>
      {children}
    </p>
  );
}
```

`token()` forbinder navnet med en CSS-variabel. Eksempel: `token('space.200')` refererer til `var(--ds-space-200)`. Temaets CSS leverer værdien.

**Opsætning:** Atlassian-pakken alene indlæser ikke temaernes CSS. Følg opsætningsvejledningen, herunder temainitialisering og Babel-plugin. Koden ovenfor er et brugseksempel, ikke en komplet installation.

Kilde: [Use tokens in code](https://atlassian.design/foundations/tokens/use-tokens-in-code).

## Samme idé i vores template

Workshoppen bruger egne tokens og kræver ikke Atlassian-pakker. Følgende værdier er vores egne eksempler, ikke Atlassians palette:

```css
.app {
  --color-text: #182230;
  --color-surface: #ffffff;
  --space-message: 1rem;
}
.app[data-theme="dark"] {
  --color-text: #ffffff;
  --color-surface: #182230;
}
.message {
  color: var(--color-text);
  background: var(--color-surface);
  padding: var(--space-message);
}
```

React vælger `data-theme`. CSS vælger værdierne. Komponenten genbruger de samme tokennavne.

## Tjek inden review

- Matcher tokenets betydning den funktion, du bygger?
- Virker tekst, baggrund, hover og fokus i begge temaer?
- Genbruger du teamets eksisterende tokens og komponenter?
- Har I aftalt nye tokens og dokumenteret deres anvendelse?

Kilder tilgået 18. oktober 2026. Materialet er en selvstændig undervisningsbearbejdning, ikke officiel Atlassian-dokumentation.
