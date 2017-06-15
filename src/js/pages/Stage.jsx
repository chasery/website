import React from 'react';

import Header from '../components/Header.jsx';
import Work from '../components/Work.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import DownloadResume from '../components/DownloadResume.jsx';
import Footer from '../components/Footer.jsx';

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
