import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import './assets/css/app.scss';
ReactDOM.render(
    <div id="Portfolio-wrapper">
        <Header />
        <Skills />
    </div>,
    document.getElementById('Portfolio')
);
