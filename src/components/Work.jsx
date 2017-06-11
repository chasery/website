import React, { Component } from 'react';
var arrow = require('../assets/svg/arrow-icon.svg');
export class Work extends Component {
    render() {
        return (
            <div className="SectionWrapper">
                <div className="Section">
                    <h2 className="Section-header">Work</h2>
                    <div className="Section-content">
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader">Data Review <span className="CountentGroup-subHeaderInfo">2017</span><button className="ContentGroup-expandToggle" dangerouslySetInnerHTML={{__html: arrow}} /></h3>
                            <div className="ContentBlock ContentBlock--image">
                                <img src="http://via.placeholder.com/288x161" />
                            </div>
                            <div className="ContentBlock ContentBlock--labelImportant">
                                <label className="ContentBlock-label" htmlFor="workAbout1">About</label>
                                <p className="ContentBlock-text" id="workAbout1">An internal application for users to rapidly review and process registrations for physical credentials. User acceptance testing revealed an increase of 200% in record processing speed from the legacy tool.</p>
                            </div>
                            <div className="ContentBlock ContentBlock--inlineList ContentBlock--labelImportant">
                                <label className="ContentBlock-label" htmlFor="contributions1">Contributions</label>
                                <ul className="ContentBlock-list" id="contributions1">
                                    <li className="ContentBlock-item">User Testing</li>
                                    <li className="ContentBlock-item">Wireframes</li>
                                    <li className="ContentBlock-item">Prototypes</li>
                                    <li className="ContentBlock-item">Style Guides</li>
                                    <li className="ContentBlock-item">User Acceptance Testing</li>
                                    <li className="ContentBlock-item"><abbr title="Hypertext Markup Language">HTML</abbr></li>
                                    <li className="ContentBlock-item"><abbr title="Syntactically Awesome Style Sheets">SCSS</abbr></li>
                                    <li className="ContentBlock-item">Angular</li>
                                    <li className="ContentBlock-item">TypeScript</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader">Waivers Portals <span className="CountentGroup-subHeaderInfo">2017</span><button className="ContentGroup-expandToggle" dangerouslySetInnerHTML={{__html: arrow}} /></h3>
                            <div className="ContentBlock ContentBlock--image">
                                <img src="http://via.placeholder.com/288x161" />
                            </div>
                            <div className="ContentBlock ContentBlock--labelImportant">
                                <label className="ContentBlock-label" htmlFor="workAbout2">About</label>
                                <p className="ContentBlock-text" id="workAbout2">A pair of internal and external portals improving upon an internal employee managed excel document and customer email system.</p>
                            </div>
                            <div className="ContentBlock ContentBlock--inlineList ContentBlock--labelImportant">
                                <label className="ContentBlock-label" htmlFor="contributions2">Contributions</label>
                                <ul className="ContentBlock-list" id="contributions2">
                                    <li className="ContentBlock-item">User Testing</li>
                                    <li className="ContentBlock-item">Wireframes</li>
                                    <li className="ContentBlock-item">Prototypes</li>
                                    <li className="ContentBlock-item">Style Guides</li>
                                    <li className="ContentBlock-item">User Acceptance Testing</li>
                                    <li className="ContentBlock-item"><abbr title="Hypertext Markup Language">HTML</abbr></li>
                                    <li className="ContentBlock-item"><abbr title="Syntactically Awesome Style Sheets">SCSS</abbr></li>
                                    <li className="ContentBlock-item">Angular</li>
                                    <li className="ContentBlock-item">TypeScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Work;
