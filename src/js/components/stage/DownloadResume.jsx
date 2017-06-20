import React from 'react'

import pdfFile from '../../../assets/pdf/ryan-chase-resume.pdf'
const downloadIcon = require('../../../assets/svg/download-icon.svg')

export default class DownloadResume extends React.Component {
    render() {
        return (
            <section className="Section">
                <div className="Section-wrapper">
                    <form method="get" action="./assets/pdf/ryan-chase-resume.pdf">
                        <button className="Button">
                            <span className="Button-icon" dangerouslySetInnerHTML={{__html: downloadIcon}} />
                            <span className="Button-text">Full Resume</span>
                        </button>
                    </form>
                </div>
            </section>
        )
    }
}
