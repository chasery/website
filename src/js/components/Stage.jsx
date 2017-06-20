import React from 'react'

import StageHeader from './stage/Header'
import Work from './stage/Work'
import Skills from './stage/Skills'
import Experience from './stage/Experience'
import DownloadResume from './stage/DownloadResume'
import Footer from './shared/Footer'

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
