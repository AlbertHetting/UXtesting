import React, { useState } from 'react';
import './token-types-slide.css';
import './token-chain-slide.css';

function SendButton({ onSend }) {
  return <button className="chain-send" onClick={onSend}>Send</button>;
}

export default function TokenChainSlide() {
  const [actionToken, setActionToken] = useState('--jade-600');
  const actionValue = actionToken === '--jade-600' ? '#3a646d' : '#182230';
  const [sent, setSent] = useState(false);
  const stages = [
    ['React-komponent', '<SendButton />', 'function SendButton({ onSend }) {\n  return (\n    <button className="chain-send"\n      onClick={onSend}>Send</button>\n  );\n}'],
    ['CSS-klasse', '.chain-send', '.chain-send {\n  background: var(--color-action);\n  color: var(--color-on-action);\n}'],
    ['Semantisk token', '--color-action', `.token-chain {\n  --color-action: var(${actionToken});\n}`],
    ['Primitiv token', actionToken, `.token-slide {\n  --jade-600: #3a646d;\n  --neutral-800: #182230;\n}`],
    ['Værdi', actionValue, `/* Den valgte primitives faste værdi */\n${actionValue}`],
  ];

  return <main className="token-slide token-chain" style={{ '--color-action': 'var(' + actionToken + ')' }}>
    <a href="?">Tilbage til chatbotten</a>
    <h1>Designbeslutninger bag en React-komponent</h1>
    <p>Følg opslagene fra komponentens CSS-klasse til den konkrete farveværdi.</p>
    <ol className="chain-stages">
      {stages.map(([title, name, code], index) => <li key={title}>
        <span className="chain-step">{index + 1}</span>
        <h2>{title}</h2>
        <code>{name}</code>
        <pre><code>{code}</code></pre>
      </li>)}
    </ol>
    <section className="token-slide-demo" aria-label="Afprøv token-kæden">
      <label htmlFor="chain-value">Vælg den primitive token til --color-action</label>
      <select id="chain-value" value={actionToken} onChange={event => setActionToken(event.target.value)}>
        <option value="--jade-600">Jade Green · #3a646d</option>
        <option value="--neutral-800">Mørk neutral · #182230</option>
      </select>
      <SendButton onSend={() => setSent(true)} />
      <p role="status">{sent ? 'Send-knappen virker. Dens udseende kommer fra token-kæden.' : 'Prøv knappen, og skift derefter den semantiske reference.'}</p>
    </section>
    <p>Begge primitive tokens beholder deres faste værdier. --color-action skifter kun, hvilken token den refererer til.</p>
    <p><a href="?slide=6">Se forskellen på primitive og semantiske tokens</a></p>
  </main>;
}


