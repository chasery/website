import React, { Component } from 'react';
import pdfFile from '../assets/pdf/ryan-chase-resume.pdf'
var downloadIcon = require('../assets/svg/download-icon.svg');
export class DownloadResume extends Component {
    render() {
        return (
            <div className="Section">
                <div className="Section-wrapper">
                    <form method="get" action="./assets/pdf/ryan-chase-resume.pdf">
                        <button className="Button">
                            <span className="Button-icon" dangerouslySetInnerHTML={{__html: downloadIcon}} />
                            <span className="Button-text">Full Resume</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default DownloadResume;
