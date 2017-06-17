import React from 'react'

import StageHeader from './stage/Header.jsx'
import Work from './stage/Work.jsx'
import Skills from './stage/Skills.jsx'
import Experience from './stage/Experience.jsx'
import DownloadResume from './stage/DownloadResume.jsx'
import Footer from './shared/Footer.jsx'

export default class Stage extends React.Component {
    render() {
        return (
            <main className="Stage">
                <StageHeader />
                <Work />
                <Skills />
                <Experience />
                <DownloadResume />
                <Footer />
            </main>
        )
    }
}
