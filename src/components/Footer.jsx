import React, { Component } from 'react';
var linkedInIcon = require('../assets/svg/linked-in-icon.svg');
var emailIcon = require('../assets/svg/email-icon.svg');
var phoneIcon = require('../assets/svg/phone-icon.svg');
export class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <ul className="Footer-list">
                    <li className="Footer-item">
                        <a className="Anchor" href="https://www.linkedin.com/in/ryan-chase-75b79813">
                            <span className="Anchor-icon" dangerouslySetInnerHTML={{__html: linkedInIcon}} />
                            <span className="Anchor-text">LinkedIn</span>
                        </a>
                    </li>
                    <li className="Footer-item">
                        <a className="Anchor Anchor--fillIcon" href="mailto:ryan@chasery.com">
                            <span className="Anchor-icon" dangerouslySetInnerHTML={{__html: emailIcon}} />
                            <span className="Anchor-text">Email</span>
                        </a>
                    </li>
                    <li className="Footer-item">
                        <a className="Anchor" href="tel:503-367-7057">
                            <span className="Anchor-icon" dangerouslySetInnerHTML={{__html: phoneIcon}} />
                            <span className="Anchor-text">Call</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Footer;
