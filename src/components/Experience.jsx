import React, { Component } from 'react';
export class Experience extends Component {
    render() {
        return (
            <div className="Section">
                <div className="Section-wrapper">
                    <h2 className="Section-header">Experience</h2>
                    <div className="Section-content">
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader">SureID</h3>
                            <div className="ContentGroup-row">
                                <div className="ContentBlock ContentBlock--half">
                                    <label className="ContentBlock-label" htmlFor="title1">Title</label>
                                    <p className="ContentBlock-text" id="title1"><abbr title="User Interface">UI</abbr>/<abbr title="User Experience">UX</abbr> Developer</p>
                                </div>
                                <div className="ContentBlock ContentBlock--half">
                                    <label className="ContentBlock-label" htmlFor="service1">Service</label>
                                    <p className="ContentBlock-text" id="service1">April 2015 - May 2017</p>
                                </div>
                            </div>
                            <div className="ContentBlock">
                                <label className="ContentBlock-label" htmlFor="about1">About</label>
                                <p className="ContentBlock-text" id="about1">Lead UX Visual Designer for the RAPIDGate platform; A vetting and credential system for contractors accessing military
    facilities.</p>
                            </div>
                            <div className="ContentBlock">
                                <label className="ContentBlock-label" htmlFor="accomplishments1">Accomplishments</label>
                                <ul className="ContentBlock-list" id="accomplishments1">
                                    <li className="ContentBlock-item">Advised feature and platform engineering teams on user experience best practices.</li>
                                    <li className="ContentBlock-item">Exposed the legacy product’s first web portal.</li>
                                    <li className="ContentBlock-item">Established a pattern library and style guide.</li>
                                    <li className="ContentBlock-item">Created user testing standards for the legacy product.</li>
                                    <li className="ContentBlock-item">Made design and front end contributions on multiple projects.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader">Dealer Spike</h3>
                            <div className="ContentGroup-row">
                                <div className="ContentBlock ContentBlock--half">
                                    <label className="ContentBlock-label" htmlFor="title2">Title</label>
                                    <p className="ContentBlock-text" id="title2">Lead Front End Developer</p>
                                </div>
                                <div className="ContentBlock ContentBlock--half">
                                    <label className="ContentBlock-label" htmlFor="service2">Service</label>
                                    <p className="ContentBlock-text" id="service2">December 2010 - April 2015</p>
                                </div>
                            </div>
                            <div className="ContentBlock">
                                <label className="ContentBlock-label" htmlFor="about2">About</label>
                                <p className="ContentBlock-text" id="about2">Front end developer tasked with creating a responsive infrastructure for a fast growing power sports dealership website
    provider.</p>
                            </div>
                            <div className="ContentBlock">
                                <label className="ContentBlock-label" htmlFor="accomplishments2">Accomplishments</label>
                                <ul className="ContentBlock-list" id="accomplishments2">
                                    <li className="ContentBlock-item">Collaborated with backend developers to create a responsive framework.</li>
                                    <li className="ContentBlock-item">Created front end standards for the company.</li>
                                    <li className="ContentBlock-item">Trained and lead a team of eleven front end developers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Experience;
