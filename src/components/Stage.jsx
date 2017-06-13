import React from 'react';

import Header from './Header.jsx';
import Work from './Work.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import DownloadResume from './DownloadResume.jsx';
import Footer from './Footer.jsx';

import favicon from '../favicon.png'
import '../assets/scss/app.scss';

export default class Stage extends React.Component {
    render() {
        return (
            <main className="Stage">
                <Header/>
                <Work/>
                <Skills/>
                <Experience/>
                <DownloadResume/>
                <Footer/>
            </main>
        );
    }
}
