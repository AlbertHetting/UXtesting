import React, { useEffect, useRef, useState } from 'react';
import { Button, Message, Composer } from './components.jsx';
import { welcome, replyTo } from './replies.js';

export default function App() {
  const [messages, setMessages] = useState([welcome]);
  const [theme, setTheme] = useState('light');
  const messagesRef = useRef(null);

  useEffect(() => {
    const log = messagesRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages]);

  function send(text) {
    setMessages(current => [...current,
      { id: crypto.randomUUID(), role: 'user', text },
      { id: crypto.randomUUID(), role: 'assistant', ...replyTo(text) }
    ]);
  }

  return <main className="app" data-theme={theme}>
    <section className="chat" aria-labelledby="chat-title">
      <header className="chat-header">
        <div><h1 id="chat-title">Token-chatten</h1><p>Fælles beslutninger. Sammenhængende design.</p></div>
        <div className="toolbar">
          <Button
            variant="secondary"
            aria-label={`Skift til ${theme === 'light' ? 'mørkt' : 'lyst'} tema`}
            title={`Skift til ${theme === 'light' ? 'mørkt' : 'lyst'} tema`}
            onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')}
          >
            <span className="theme-button-content">
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                {theme === 'light' ? <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </> : <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1 9 9 0 1 0 20.9 13.1Z" />}
              </svg>
              {theme === 'light' ? 'Lyst' : 'Mørkt'}
            </span>
          </Button>
          <Button variant="secondary" onClick={() => setMessages([welcome])}>Ny samtale</Button>
        </div>
      </header>
      <nav className="learning-links" aria-label="React-demonstrationer">
        <a href="?slide=6">Slide 6: Primitive og semantiske tokens</a>
        <a href="?slide=7">Slide 7: Token-kæden i React</a>
      </nav>
      <p className="notice">Undervisningsdemo med faste svar. Skriv fx “Hvad er tokens?”</p>
      <div ref={messagesRef} className="messages" role="log" aria-label="Samtale" aria-live="polite" aria-relevant="additions">
        {messages.map(message => <Message key={message.id} {...message} />)}
      </div>
      <Composer onSend={send} />
    </section>
  </main>;
}
