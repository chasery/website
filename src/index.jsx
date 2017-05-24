import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import './assets/css/app.scss';
ReactDOM.render(
    <div id="Portfolio-wrapper">
        <Header />
        <Skills />
        <Experience />
    </div>,
    document.getElementById('Portfolio')
);
