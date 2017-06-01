import React, { Component } from 'react';
var downloadIcon = require('../assets/svg/download-icon.svg');
export class DownloadResume extends Component {
    render() {
        return (
            <div className="Section">
                <form method="get" action="./assets/pdf/ryan-chase-resume.pdf">
                    <button className="Button">
                        <span className="Button-icon" dangerouslySetInnerHTML={{__html: downloadIcon}} />
                        <span className="Button-text">Full Resume</span>
                    </button>
                </form>
            </div>
        );
    }
}
export default DownloadResume;
