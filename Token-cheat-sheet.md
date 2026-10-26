# Design tokens i React · Token-chatten

## Theme: Chatbot med lyst og mørkt tema

### Slide 6 som React-komponent

Chatbotforsiden har links til begge kodeillustrationer. Slide 7 (`?slide=7`) viser kæden React-komponent, CSS-klasse, semantisk token, primitiv token og farveværdi. Lad `--color-action` referere til enten `--jade-600` eller `--neutral-800`, og prøv Send-knappen. Begge primitive tokens beholder deres faste værdier. Komponenten findes i `src/TokenChainSlide.jsx`.

Start appen, og tilføj `?slide=6` til den lokale adresse (fx `http://localhost:5173/?slide=6`). `src/TokenTypesSlide.jsx` viser primitive og semantiske tokens med et valg af den primitive token, som `--color-action` refererer til. `--jade-600` er altid `#3a646d`, og `--neutral-800` er altid `#182230`. Knappen Send er en visuel demonstration. Dette er ikke et komplet temaskift.

Branchen theme bygger videre på main med et lyst og et mørkt tema. Brug knappen i toppen til at skifte. React-state sætter data-theme på .app, og CSS ændrer kun de semantiske tokenreferencer. De primitive farveværdier forbliver faste. Kompakt visning er ikke implementeret.

- `src/tokens.css`: Primitive værdier og semantiske roller.
- `src/styles.css`: Komponenternes CSS bruger de fælles tokens.
- `src/main.jsx`: Importerer tokens før komponenternes styles.
- `src/replies.js`: Faste demosvar med et React-kodeeksempel i hvert svar, også velkomst og standardsvar. Koden vises som tekst og bliver ikke eksekveret.

Sammenlign med [startkoden på starter](https://github.com/h-oellgaard/react-design-tokens-chatbot/tree/starter). Sammenlign med main for versionen med tokens uden temaskift. Denne branch tilføjer temaskift, men ikke ekstra øvelseskomponenter.

Hent denne version med:

```sh
git clone --branch theme https://github.com/h-oellgaard/react-design-tokens-chatbot.git
cd react-design-tokens-chatbot
npm ci
npm start
```

I en eksisterende klon: Gem først eventuelle egne ændringer, kør `git fetch origin`, og skift derefter til `theme`.

Nedenstående beskriver det samlede undervisningsforløb. Denne branch viser tokens og temaskift. Øvelse 2-komponenterne og kompakt visning er stadig elevopgaver.

PBA Webudvikling · EAAA · 8.15–11.30

**Hvordan holder vi et design sammenhængende, når 10 udviklere eller AI-agenter arbejder på samme projekt?**

I arbejder med fælles tokens, komponenter, temaer og aftaler om samarbejde. Ingen Figma eller API-nøgle er nødvendig. Chatbotten bruger faste demosvar og gemmer kun beskeder i hukommelsen indtil genindlæsning.

## A · Brug denne React-template

Standardbranchen `main` indeholder nu token-versionen. Til øvelse 1 uden tokens skal I vælge [starter](https://github.com/h-oellgaard/react-design-tokens-chatbot/tree/starter), før I henter ZIP-filen, eller klone med `git clone --branch starter https://github.com/h-oellgaard/react-design-tokens-chatbot.git`.

Vælg **Code → Download ZIP** på GitHub, og udpak projektet, eller klon det med Git som beskrevet nedenfor.

### Klon projektet med Git

I skal have Git installeret. Åbn en terminal i den mappe, hvor I vil placere projektet, og kør:

```sh
git clone https://github.com/h-oellgaard/react-design-tokens-chatbot.git
cd react-design-tokens-chatbot
```

Nu har I en lokal kopi af projektet. Åbn mappen i jeres editor, fx med `code .`, hvis I bruger VS Code og har kommandoen installeret.

Vil I gemme jeres ændringer på jeres egen GitHub-konto, skal I først vælge **Use this template → Create a new repository** eller **Fork** på GitHub og derefter klone URL'en til jeres egen kopi. At klone dette repository giver ikke skriveadgang til det.

### Installer og start

Åbn projektmappen i jeres editor. Brug Node.js 22.12+ eller en nyere understøttet LTS-version:

```sh
npm ci
npm start
```

Åbn den lokale adresse, som terminalen viser. Brug `npm run build` til at kontrollere, at appen kan bygges.

## B · Brug jeres eget React-projekt

Vælg en side med knap, inputfelt og kort eller panel. Projektet skal allerede kunne køre lokalt. Behold jeres værktøjer og struktur; I skal ikke installere denne template eller tilføje en chatbot.

Følg [det selvstændige øvelsesark til eget projekt](Oevelser-eget-projekt.md) hele dagen. I skal ikke skifte til chatbotprojektet. Har I allerede tokens og et komponentbibliotek, kortlæg og genbrug dem først.

## Start øvelserne

Åbn **[øvelsesoversigten](Oevelser.md)**, vælg enten chatbotprojektet eller eget projekt, og følg kun det valgte spor hele dagen. Begge spor har samme læringsmål:

Brug også **[Token-cheat-sheet](Token-cheat-sheet.md)** med danske forklaringer, Atlassian-tokennavne og React/CSS-eksempler.

1. Brain starter: Én besked, mange knapper.
2. Saml designbeslutninger i primitive og semantiske tokens.
3. Byg to komponenter med fælles tokens og en arbejdsaftale.
4. Tilføj et mørkt tema.
5. Stresstest med ny brandfarve og kompakt visning.

Hver kodeøvelse har også et valgfrit **Level 2** til de hurtige: en visuel tokenoversigt, flere komponentvarianter, systemtema med gemte præferencer og automatisk kontrol af lokale farveværdier. Løs grundopgaven først; udvidelserne gælder både templaten og eget projekt.

## Find rundt i koden

- `src/App.jsx`: Samtale, demosvar, tema og tæthed.
- `src/components.jsx`: Button, Message og Composer.
- `src/styles.css`: Start-CSS med bevidst gentagne og forskellige designværdier.
- `src/main.jsx`: Startpunkt og CSS-imports.

På theme er temaskift implementeret. Samtalen og skrivefeltets indhold bevares under skiftet. Temaet starter lyst ved genindlæsning. Kodede demonstrationer via ?slide=6 og ?slide=7 har deres eget faste undervisningsdesign.

Denne branch indeholder token-løsningen. Undervisernoterne er ikke en del af repositoryet.

## Afgrænsning

Tokens implementeres som CSS custom properties. Vi fokuserer på navngivning, genbrug og koordinering frem for eksportværktøjer og tokenformater. Tokens suppleres med fælles komponenter, ejerskab og review.

## Referencer

- [React: komponenter, props og state](https://react.dev/learn)
- [Vite: udviklingsmiljø](https://vite.dev/guide/)
