# Spor B · Jeres eget React-projekt

**Dette er hele jeres spor. Brug samme React-projekt og samme valgte side gennem alle øvelser. I skal ikke hente underviserens chatbot eller skifte til den undervejs.**

Projektet skal kunne køre lokalt. Vælg en afgrænset side med en knap, et inputfelt og et kort eller panel. Aftal sidens vigtigste handling, fx Gem eller Opret. Brug den samme side og dens komponenter i resten af forløbet.

Behold jeres filstruktur, værktøjer og komponentbiblioteker. Har I allerede tokens, kortlæg og genbrug dem først. Fokus er at få lokale styles til at følge jeres fælles system, ikke at bygge et parallelt designsystem. Start med projektets sædvanlige startkommando.

Der er ingen afleveringer. I skal implementere opgaverne i det valgte projekt og afprøve, at løsningerne virker. Arbejd i par. Aftal, hvem der skriver, og hvem der reviewer. Byt efter øvelse 1. Gennemfør Level 1 først; Level 2 er frivillig for de hurtige og kan fortsættes hjemme. Deltag stadig i fælles oplæg og afslutning.

## 0 · Brain starter (8.15–8.25)

Alle får samme besked: **“Lav en tydelig knap, der leder tilbage til forrige side.”**

1. Skitser alene i ét minut. Vælg selv tekst, farve, form og størrelse.
2. Sammenlign i par. Hvad er forskelligt? Hvad betyder “forrige side” for jer?
3. Saml op i plenum: Hvilke designbeslutninger skal være fælles?

Tal også om grænsen: Tokens kan koordinere udseendet, men afgør ikke, hvor knappen navigerer hen.

## 1 · Fra faste værdier til fælles tokens (9.00–9.25)

**Problem:** Jeres valgte side har gentagne værdier eller lokale designvalg, som bør følge fælles regler. Find fx knapper med samme funktion, der utilsigtet har forskellig afrunding.

**`tokens.css` er fælles: Single source of truth.** Saml de fælles designbeslutninger i denne fil. Mange komponenter og deres forskellige CSS-filer kan bruge de samme tokens gennem `var(--...)`. Ændrer I en fælles token, følger alle de steder, der bruger den, med. I skal altså ikke kopiere tokenværdier ind i hver komponentfil.

I behøver ikke samle al styling i én CSS-fil. Behold fx `Button.css` og `Card.css` til komponenternes layout og styling; lad dem hente fælles farver, afstande og afrundinger fra `tokens.css`.

```text
tokens.css  → fælles tokennavne og værdier
Button.css  → bruger tokens med var(--...)
Card.css    → bruger de samme fælles tokens
```

Importer `tokens.css` én gang ved appens start, fx i `main.jsx`. De komponenter, der skal bruge variablerne, skal ligge under det element, hvor de er defineret: `:root` gør dem tilgængelige via arv på hele HTML-siden; `.app` afgrænser dem til appens efterkommere. En lokal overskrivning kan ændre værdien inden for et mindre område.

Bruger I allerede tokens eller et komponentbibliotek, så undersøg først, hvilke fælles designvalg og temamuligheder der findes. Genbrug eller tilpas det eksisterende system frem for at lave en konkurrerende tokenfil. Find derefter lokale, faste værdier i jeres egen styling, der bør bruge systemets fælles tokens. Vælg efter funktion, ikke kun fordi to farver ser ens ud.

1. Åbn de styles, som bruges på jeres valgte side. Find gentagne værdier og inkonsekvente valg. Brug filerne i jeres eget projekt; filnavnene er ikke et krav.
2. Brug projektets eksisterende tokenfil, eller opret en fælles `tokens.css`. Indlæs den én gang ved appens start før komponenternes styles. Har I et bibliotek med tokens og temaopsætning, brug dets etablerede struktur.
3. Aftal en lille skala for farver, afstande og afrunding. Opret primitive tokens, fx `--blue-600`, `--space-3` og `--radius-small`.
4. Opret semantiske tokens, fx `--color-text`, `--color-surface`, `--color-action` og `--radius-control`.
5. Brug semantiske farvetokens i komponenternes CSS. Brug skalaen til gentagne afstande. Ensret afrunding, hvor det giver mening.

**Hvad skal I kigge efter?**

- **Gentagne værdier:** Den samme konkrete CSS-værdi står flere steder. Fx kan den samme baggrundsfarve være skrevet direkte på flere primære handlingsknapper. Det er ikke nødvendigvis en fejl. Undersøg, om stederne deler en designbeslutning, som kan få et fælles tokennavn. To ens værdier kan også have forskellige formål og derfor kræve forskellige semantiske tokens.
- **Inkonsekvente valg:** Elementer, der efter jeres designaftale burde følge samme regel, bruger forskellige værdier. Fx kan to knapper i jeres projekt bruge henholdsvis `border-radius: 8px` og `border-radius: 5px`. Hvis begge skal have samme form, er det en inkonsistens, som et fælles `--radius-control` kan rette.

I skal altså undersøge **hvad der går igen**, og **hvad der varierer uden en god grund**. Forskellige værdier er ikke automatisk forkerte: En overskrift og en hjælpetekst kan med god grund have forskellige skriftstørrelser. Begrund, hvilke forskelle I beholder, og hvilke I ensretter.

Eksempel på strukturen, som I selv udvider:

```css
:root {
  --blue-600: #2457d6;
  --neutral-0: #ffffff;
  --space-3: .75rem;
}
.app {
  --color-action: var(--blue-600);
  --color-on-action: var(--neutral-0);
}
.button--primary {
  background: var(--color-action);
  color: var(--color-on-action);
}
```

**Implementer:** En fælles tokenfil, som komponenternes CSS bruger. Gennemgå navngivningen med makkeren.

**Tjek:** Kan I ændre handlingsfarven ét sted? Har I navngivet efter funktion, hvor temaet kan ændre værdien? Undgå at lave tokens for hver eneste CSS-deklaration.

### Level 2 · Kan andre forstå jeres tokens?

**Udfordring:** En ny udvikler skal kunne vælge rigtigt uden at spørge jer.

**Det skal I bygge:** Et lille visuelt katalog over jeres designvalg. Vi kalder React-komponenten `TokenPreview`. Navnet betyder “forhåndsvisning af tokens”; komponenten findes ikke i React i forvejen. I skal selv oprette den.

Kataloget hjælper en ny udvikler med at se, hvilke tokens der findes, hvordan de ser ud, og hvornår de skal bruges.

1. Opret `TokenPreview.jsx`, og vis komponenten et sted i jeres app, fx under den side, I arbejder på, eller på en intern side med komponenteksempler.
2. Vis følgende eksempler med de tokens, I har oprettet:
   - **Farver:** Et felt med rigtig tekst og baggrund. Skriv tokennavnene ved siden af, fx `--color-text` og `--color-surface`. Vis også et andet relevant farvepar, fx en handlingsknap og dens tekst.
   - **Afstande:** Tre bokse med forskellig indvendig afstand fra jeres skala, fx `--space-2`, `--space-4` og `--space-6`. Skriv navnet på hver token, så forskellen er let at sammenligne.
   - **Afrunding:** Bokse med jeres forskellige radius-tokens. Skriv også her tokennavnene.
3. Brug `var(--...)` i eksemplernes CSS. Farvefeltet må altså ikke få en manuelt kopieret hexværdi; det skal bruge den samme token som appen.
4. Tilføj korte forklaringer i TokenPreview til mindst fem **semantiske** tokens: navn, hvad den bruges til, og et eksempel på forkert brug. Fx: `--color-text` bruges til almindelig tekst, ikke som baggrundsfarve. Forklar også, hvornår teamet må oprette en ny token. Har I endnu ikke fem, så aftal relevante roller ud fra den eksisterende side.
5. Lad makkeren bygge et lille informationspanel ved hjælp af kataloget og vejledningen uden at opfinde nye farver.

**Lille React-eksempel til at komme i gang:** Tilpas navnene til jeres egen tokenfil, og udvid derefter med afstande og afrundinger.

```jsx
export function TokenPreview() {
  return (
    <section>
      <h2>Vores design tokens</h2>
      <p>Tekst: --color-text. Baggrund: --color-surface.</p>
      <div style={{
        color: 'var(--color-text)',
        background: 'var(--color-surface)',
        padding: 'var(--space-4)',
      }}>
        Sådan ser almindelig tekst på vores overflade ud.
      </div>
    </section>
  );
}
```

Vis den ved at importere komponenten i `App.jsx` og indsætte `<TokenPreview />` **inde i den wrapper, der definerer jeres semantiske tokens**, fx `.app`. Så kan forhåndsvisningen arve værdierne.

**Implementer:** En TokenPreview i appen, der viser jeres faktiske tokens. Tilføj korte forklaringer ved eksemplerne.

**I er færdige, når:** Tokennavnene står ved de visuelle eksempler, alle eksempler bruger jeres faktiske tokens, og makkeren kan vælge tokens ud fra forklaringerne i appen. Lad fx en semantisk farvetoken pege på en anden eksisterende primitiv token: Både kataloget og appen skal følge med. Behold palettens navne og værdier meningsfulde; lad ikke en grøn primitiv token skifte til sort. Temaer er ikke nødvendige for at løse denne opgave. Layoutværdier må gerne være lokale; begrund, hvad I vælger at dele.

## 2 · To udviklere, samme side (10.00–10.25)

**Problem:** I bygger hver jeres udvidelse til den valgte side. Begge skal følge samme design og bruge jeres tokens.

**Vælg komponenter, der giver mening i jeres eget projekt.** Handlingspanelet og hjælpepanelet nedenfor er eksempler. I kan i stedet vælge to andre komponenter, fx et produktkort og et filterpanel, en formular og en statusbesked eller to relevante udvidelser til jeres eksisterende side. I behøver ikke bygge handlings- og hjælpepanelerne, hvis I vælger noget andet.

Aftal, hvem der bygger hvilken komponent, hvilke props og callbacks de har brug for, og hvordan de bruger fælles tokens og genbrugelige komponenter. Tilpas trin 2-5 og tjeklisten til jeres valg. En fælles knap bruges, hvor en handling kræver en knap; I skal ikke tilføje knapper uden et formål.

1. Brug tre minutter på en Team Working Agreement: Genbrug tokens og fælles komponenter, aftal nye tokens, og review ændringer. Aftal også props og integration, inden I deler arbejdet.
2. Vælg eller opret én fælles knapkomponent, som begge udvidelser kan bruge. Genbrug bibliotekets knap, hvis I allerede har en. Aftal en primær og en sekundær variant inden for projektets eksisterende API.
3. **Udvikler A:** Byg et lille handlingspanel med en eller to relevante handlinger til siden, fx Gem og Fortryd. Panelet modtager callbacks til handlingerne; genbrug sidens eksisterende funktioner eller vis en tydelig lokal kvittering. Der kræves ingen ny backend.
4. **Udvikler B:** Byg et hjælpepanel med tekst til sidens bruger og en Luk-knap. Panelet modtager en callback til lukning. Siden skal også have en knap til at åbne hjælpen igen.
5. Opret hver jeres komponentfil. Aftal, hvem der integrerer dem på den valgte side, og gennemgå resultatet sammen.

**Implementer:** Begge udvidelser på jeres valgte side, og afprøv deres funktioner sammen. Brug jeres fælles arbejdsaftale undervejs.

**Tjek:** Virker jeres valgte komponenters funktioner og samspil? Hvis I valgte hjælpepanelet, kan det lukkes og åbnes? Bruger begge udvidelser fælles tokens og relevante genbrugelige komponenter? Hvilke beslutninger krævede aftaler ud over tokens?

Hvis I bruger en AI-agent, giv den aftalen og projektets eksisterende tokens og komponenter. Review dens ændringer efter samme regler.

### Level 2 · Udvid komponenten uden at kopiere den

**Udfordring:** Flere udviklere vil have hver deres knapvariant. I skal holde interfacet overskueligt.

1. Udvid eller konfigurer jeres fælles knapkomponent med to størrelser og en variant til destruktive handlinger. Behold den eksisterende standard. Hvis biblioteket allerede har størrelser og en danger-variant, genbrug dem og dokumenter dets props.
2. Definer semantiske tokens til danger-baggrund, tekst og hover samt afstandstokens til størrelserne. Vis danger på en relevant ryd- eller slet-handling. Hvis siden ikke har en, vis varianten i komponentoversigten uden at tilføje en virkelig slettefunktion.
3. Lav en lille komponentoversigt, der viser begge størrelser og alle tre varianter i normal og disabled tilstand. Kontroller også hover og tastaturfokus.
4. Dokumenter props og skriv et kort eksempel på en instruktion til en AI-agent, der skal genbruge komponenten. Det er ikke nødvendigt at have en AI-konto.

**Implementer:** Den udvidede knapkomponent og en komponentoversigt i appen. Brug de props, I har aftalt.

**Tjek:** Er tidligere brug af Button stadig intakt? Virker `type="submit"`, `onClick`, `disabled` og `aria-*` stadig? Skal der en ny komponent til, hver gang en udvikler ønsker en anden farve? Tag de nye varianter med i den næste temaøvelse.

## 3 · Et mørkt tema (10.25–10.50)

**Problem:** Jeres valgte side skal fungere både lyst og mørkt, mens de samme komponenter følger med.

Første fem minutter er fælles demonstration. Derefter:

1. Har projektet allerede temaer, brug den eksisterende temavælger. Ellers tilføj React-state og en temaknap, som skifter mellem light og dark. Sæt `data-theme` på sidens fælles wrapper eller på `<html>`, så alle relevante komponenter er omfattet.
2. Tilføj en selector til mørkt tema, der matcher placeringen af jeres attribut, fx `.app[data-theme="dark"]` eller `:root[data-theme="dark"]`. Med et komponentbibliotek bruger I dets temaopsætning.
3. Overskriv semantiske tokens for side, overflade, tekst, kant, handling og fokus. Tilføj `color-scheme: dark` i det mørke tema og `color-scheme: light` i standardtemaet.
4. Kontroller også jeres nye komponenter fra øvelse 2.
5. Afprøv hover, tastaturfokus, placeholder og deaktiverede knapper i begge temaer.

**Implementer:** Et fungerende skift mellem lyst og mørkt tema med de samme komponenter.

**Tjek:** Fungerer tekst og baggrund sammen? Kan I tydeligt se fokus? Mål kontrast for almindelig tekst, sigt efter mindst 4,5:1. En mørk baggrund alene er ikke et komplet mørkt tema.

### Level 2 · Følg systemet, men respekter brugerens valg

**Udfordring:** Brugeren skal kunne vælge **Lyst**, **Mørkt** eller **System**.

1. Erstat temaknappen med et navngivet select-felt eller en tydelig gruppe af knapper med de tre valg.
2. Gem brugerens valg i `localStorage`. Gem præferencen `system`, ikke blot den farvetilstand, systemet tilfældigvis har lige nu.
3. Brug `prefers-color-scheme` til at afgøre det aktive tema, når valget er System. Følg også ændringer i systemtemaet, mens appen er åben. Fjern event listeners, når React-effekten rydder op.
4. Hold brugerens præference adskilt fra det aktive tema. Et eksplicit valg af Lyst eller Mørkt skal have forrang frem for systemet.

**Implementer:** Tre fungerende temavalg, som huskes ved genindlæsning. Brug semantiske tokens til den nye kontrol.

**Tjek:** Afprøv uden gemt præference, efter genindlæsning og ved systemskift med appen åben. Test, at et eksplicit valg ikke ændres af systemet. Brug eventuelt browserens udviklerværktøjer til at simulere lyst og mørkt systemtema.

## 4 · Stresstest: Nyt brand og kompakt visning (10.50–11.10)

I får denne besked: **“Skift brandfarven, og gør jeres valgte side mere kompakt.”**

1. Skift handlingsfarven centralt. Husk at teste teksten ovenpå samt hover i begge temaer.
2. Opret semantiske afstandstokens for padding i kort/paneler og afstand mellem sidens gentagne elementer.
3. Tilføj React-state og en vælger til normal/kompakt visning. Sæt `data-density` på den fælles wrapper, og overskriv afstandstokens i en matchende compact-selector. Genbrug en eksisterende tæthedsindstilling, hvis projektet har en.
4. Behold knapperne brugbare; mindre afstand behøver ikke betyde mindre klikflader.
5. Lad et andet par reviewe jeres løsning.

**Implementer:** Den centrale brandændring og en fungerende kompakt visning. Afprøv resultatet med et andet par.

**Review:** Prøv alle fire kombinationer af lyst/mørkt og normal/kompakt. Afprøv sidens primære handling, åbn og luk hjælpen, og indsæt lang tekst i inputfeltet. Prøv smal mobilbredde og betjen med Tab og Enter. Er der lokale farver, som temaet ikke styrer?

### Level 2 · Fang brud på aftalerne automatisk

**Udfordring:** En ellevte udvikler tilføjer en lokal farvekode. Hvordan opdager I det før review?

1. Tilføj et tjek, der finder direkte farveværdier i komponenternes styles, fx hex, rgb/rgba, hsl/hsla og navngivne farver. Brug projektets eksisterende lintværktøj eller et lille script. Tokenfiler skal være undtaget.
2. Aftal tilladte undtagelser, fx `transparent`, `currentColor` og `inherit`. Dokumenter, hvilke filer og farveformater tjekket faktisk dækker. Et simpelt teksttjek behøver ikke kunne fortolke al CSS.
3. Tilføj en kommando, fx `npm run check:tokens`. Den skal afslutte med fejlstatus, når en regel brydes, og vise filen med problemet.
4. Indsæt bevidst en ulovlig farve i en komponent. Vis, at tjekket fejler. Ret den til en token, og vis, at tjekket passerer. Test også en tilladt værdi i tokenfilen.

**Implementer:** Et tjek, der kan køres i projektet. Indsæt en bevidst fejl, kontroller at tjekket fejler, og ret den igen.

**Tjek:** Fanger I både en ny farve i CSS og en inlinefarve i JSX? Hvis ikke, skriv begrænsningen tydeligt. Forklar ét designproblem, som tjekket ikke kan opdage, fx brug af den forkerte semantiske token.

**Ekstra, hvis I stadig har tid:** Kør det samme tjek og projektets build i GitHub Actions ved push og pull request. Hold workflowet fri for API-nøgler og andre hemmeligheder.

## Fælles afslutning (11.10–11.30)

Vis én designbeslutning, I har ændret, og forklar hvor mange steder den påvirkede.

Tal med makkeren om tre regler til den næste udvikler eller AI-agent, der skal arbejde videre på jeres projekt. Nævn også ét problem, som tokens ikke løser.
