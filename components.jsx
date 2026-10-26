import React, { useState } from 'react';
import './token-types-slide.css';

export default function TokenTypesSlide() {
  const [actionToken, setActionToken] = useState('--jade-600');
  return <main className="token-slide" style={{ '--color-action': 'var(' + actionToken + ')' }}>
    <a href="?">Tilbage til chatbotten</a>
    <h1>Primitive og semantiske tokens</h1>
    <div className="token-slide-columns">
      <section>
        <h2>Primitiv: Hvilken værdi?</h2>
        <p>En navngiven værdi i en palette eller skala.</p>
        <pre><code>{'--jade-600: #3a646d;\n--neutral-800: #182230;\n--space-4: 1rem;'}</code></pre>
      </section>
      <section>
        <h2>Semantisk: Hvad bruges den til?</h2>
        <p>En navngiven rolle i designet.</p>
        <pre><code>{`--color-action: var(${actionToken});\n--space-panel: var(--space-4);`}</code></pre>
      </section>
    </div>
    <section className="token-slide-demo" aria-label="Afprøv en fælles designændring">
      <label htmlFor="primitive-value">Vælg den primitive token til --color-action</label>
      <select id="primitive-value" value={actionToken} onChange={event => setActionToken(event.target.value)}>
        <option value="--jade-600">Jade Green · #3a646d</option>
        <option value="--neutral-800">Mørk neutral · #182230</option>
      </select>
      <button type="button" className="token-slide-example">Send</button>
      <p>Knappen bruger <code>background: var(--color-action)</code>.</p>
      <p>De primitive værdier er faste. Kun den semantiske reference skifter.</p>
    </section>
    <p><strong>Do:</strong> Navngiv semantiske tokens efter formålet, fx <code>--color-action</code>.</p>
    <p><strong>Don’t:</strong> Lås rollen til en farve, fx <code>--blue-button</code>. Farvenavne er fine på det primitive lag.</p>
  </main>;
}


