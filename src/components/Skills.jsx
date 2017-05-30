import React, { Component } from 'react';
export class Skills extends Component {
    render() {
        return (
            <div className="Section Section--skills">
                <h2 className="Section-header">Skills</h2>
                <div className="Section-content">
                    <div className="Section-contentGroupWrapper">
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader"><abbr title="User Experience">UX</abbr> Visual Designer</h3>
                            <div className="ContentBlock ContentBlock--inlineList">
                                <label className="ContentBlock-label" htmlFor="process">Process</label>
                                <ul className="ContentBlock-list" id="process">
                                    <li className="ContentBlock-item">User Testing</li>
                                    <li className="ContentBlock-item">Personas</li>
                                    <li className="ContentBlock-item">User Flows</li>
                                    <li className="ContentBlock-item">Storyboards</li>
                                    <li className="ContentBlock-item">Wireframes</li>
                                    <li className="ContentBlock-item">Prototypes</li>
                                    <li className="ContentBlock-item">Style Guides</li>
                                    <li className="ContentBlock-item">User Acceptance Testing</li>
                                </ul>
                            </div>
                            <div className="ContentBlock ContentBlock--inlineList">
                                <label className="ContentBlock-label" htmlFor="applications">Applications</label>
                                <ul className="ContentBlock-list" id="applications">
                                    <li className="ContentBlock-item">Sketch</li>
                                    <li className="ContentBlock-item">Keynote</li>
                                    <li className="ContentBlock-item">InVision</li>
                                    <li className="ContentBlock-item">Adobe Experience Design</li>
                                    <li className="ContentBlock-item">After Effects</li>
                                    <li className="ContentBlock-item">Illustrator</li>
                                    <li className="ContentBlock-item">Photoshop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Section-contentGroupWrapper">
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader">Front End Developer</h3>
                            <div className="ContentBlock ContentBlock--inlineList">
                                <label className="ContentBlock-label" htmlFor="languages">Languages</label>
                                <ul className="ContentBlock-list" id="languages">
                                    <li className="ContentBlock-item"><abbr title="Hypertext Markup Language">HTML</abbr></li>
                                    <li className="ContentBlock-item"><abbr title="Cascading Style Sheets">CSS</abbr></li>
                                    <li className="ContentBlock-item"><abbr title="Syntactically Awesome Style Sheets">SCSS</abbr></li>
                                    <li className="ContentBlock-item">JavaScript</li>
                                    <li className="ContentBlock-item">TypeScript</li>
                                </ul>
                            </div>
                            <div className="ContentBlock ContentBlock--inlineList">
                                <label className="ContentBlock-label" htmlFor="frameworks">Frameworks</label>
                                <ul className="ContentBlock-list" id="frameworks">
                                    <li className="ContentBlock-item">Angular</li>
                                    <li className="ContentBlock-item">Bootstrap</li>
                                    <li className="ContentBlock-item">Foundation</li>
                                    <li className="ContentBlock-item">React</li>
                                </ul>
                            </div>
                            <div className="ContentBlock ContentBlock--inlineList">
                                <label className="ContentBlock-label" htmlFor="compilers">Task Runners & Compilers</label>
                                <ul className="ContentBlock-list" id="compilers">
                                    <li className="ContentBlock-item">WebPack</li>
                                    <li className="ContentBlock-item">Gulp</li>
                                    <li className="ContentBlock-item">Babel</li>
                                </ul>
                            </div>
                            <div className="ContentBlock ContentBlock--inlineList">
                                <label className="ContentBlock-label" htmlFor="other">Other</label>
                                <ul className="ContentBlock-list" id="other">
                                    <li className="ContentBlock-item">Agile</li>
                                    <li className="ContentBlock-item">Certified ScrumMaster</li>
                                    <li className="ContentBlock-item"><abbr title="Node Packet Manager">NPM</abbr></li>
                                    <li className="ContentBlock-item">Yarn</li>
                                    <li className="ContentBlock-item">Git</li>
                                    <li className="ContentBlock-item">Visual Studios</li>
                                    <li className="ContentBlock-item">Visual Studios Code</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skills;
