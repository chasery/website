import React, { Component } from 'react';
import ReactSVG from 'react-svg';
export class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <ul className="Footer-list">
                    <li className="Footer-item">
                        <a className="Anchor" href="https://www.linkedin.com/in/ryan-chase-75b79813">
                            <span className="Anchor-icon">
                                <ReactSVG
                                    path="/assets/svg/linked-in-icon.svg"
                                    evalScript="always"
                                />
                            </span>
                            <span className="Anchor-text">LinkedIn</span>
                        </a>
                    </li>
                    <li className="Footer-item">
                        <a className="Anchor Anchor--fillIcon" href="mailto:ryan@chasery.com">
                            <span className="Anchor-icon">
                                <ReactSVG
                                    path="/assets/svg/email-icon.svg"
                                    evalScript="always"
                                />
                            </span>
                            <span className="Anchor-text">Email</span>
                        </a>
                    </li>
                    <li className="Footer-item">
                        <a className="Anchor" href="tel:503-367-7057">
                            <span className="Anchor-icon">
                                <ReactSVG
                                    path="/assets/svg/phone-icon.svg"
                                    evalScript="always"
                                />
                            </span>
                            <span className="Anchor-text">Call</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Footer;
