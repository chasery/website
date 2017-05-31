import React, { Component } from 'react';
import ReactSVG from 'react-svg';
export class DownloadResume extends Component {
    render() {
        return (
            <div className="Section Section--row">
                <form method="get" action="./assets/pdf/ryan-chase-resume.pdf">
                    <button className="Button">
                        <span className="Button-icon">
                            <ReactSVG
                                path="/assets/svg/download-icon.svg"
                                evalScript="always"
                            />
                        </span>
                        <span className="Button-text">Full Resume</span>
                    </button>
                </form>
            </div>
        );
    }
}
export default DownloadResume;
