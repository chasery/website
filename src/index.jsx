import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import DownloadResume from './components/DownloadResume.jsx';
import Footer from './components/Footer.jsx';
import favicon from './favicon.png'
import './assets/scss/app.scss';
ReactDOM.render(
    <div id="Portfolio-wrapper">
        <Header />
        <Skills />
        <Experience />
        <DownloadResume />
        <Footer />
    </div>,
    document.getElementById('Portfolio')
);
