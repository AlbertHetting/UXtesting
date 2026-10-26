const tokenExample = `export function ChatTitle() {
  return (
    <h2 style={{ color: 'var(--color-text)' }}>
      Token-chatten
    </h2>
  );
}`;

export const welcome = {
  id: 0,
  role: 'assistant',
  text: 'Hej! Spørg mig om design tokens, CSS-variabler, komponenter eller temaer. Hvert svar har et React-eksempel.',
  code: tokenExample,
};

export function replyTo(text) {
  const question = text.toLowerCase();
  if (question.includes('tema')) return {
    text: 'Prøv temaknappen i toppen. React skifter data-theme, og CSS lader de semantiske tokens pege på andre primitive tokens. De primitive farver forbliver faste. Komponenten her bruger de samme tokennavne i begge temaer.',
    code: `export function ChatPanel({ children }) {
  return (
    <section style={{
      background: 'var(--color-surface)',
      color: 'var(--color-text)',
    }}>
      {children}
    </section>
  );
}`,
  };
  if (question.includes('komponent')) return {
    text: 'En fælles komponent samler struktur og adfærd. Genbrug vores Button, så knapper følger samme komponent-CSS og tokens.',
    code: `import { Button } from './components.jsx';

export function ResetChat({ onReset }) {
  return (
    <Button variant="secondary" onClick={onReset}>
      Ny samtale
    </Button>
  );
}`,
  };
  if (question.includes('variab') || question.includes(':root') || question.includes('css')) return {
    text: 'CSS-variabler starter med --. var() henter værdien. Definer fx --space-panel i tokens.css på .app eller :root, og brug den i komponenten. :root vælger HTML-dokumentets rod.',
    code: `export function MessageBox({ children }) {
  return (
    <div style={{ padding: 'var(--space-panel)' }}>
      {children}
    </div>
  );
}`,
  };
  if (question.includes('token')) return {
    text: 'Et design token er en navngiven designbeslutning. Her bruger React-komponenten --color-text, som defineres i tokens.css. I appen bruger vi normalt CSS-klasser; inline styling her gør koblingen tydelig.',
    code: tokenExample,
  };
  return {
    text: 'Jeg bruger faste demosvar. Spørg om tokens, CSS-variabler, komponenter eller temaer. Her er et eksempel på, hvordan React viser en liste af beskeder.',
    code: `export function MessageList({ messages }) {
  return (
    <ul>
      {messages.map(message => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}`,
  };
}
