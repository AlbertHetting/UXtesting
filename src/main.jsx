import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import TokenTypesSlide from './TokenTypesSlide.jsx';
import TokenChainSlide from './TokenChainSlide.jsx';
import './tokens.css';
import './styles.css';

const slide = new URLSearchParams(window.location.search).get('slide');
const page = slide === '6' ? <TokenTypesSlide /> : slide === '7' ? <TokenChainSlide /> : <App />;
createRoot(document.getElementById('root')).render(page);
