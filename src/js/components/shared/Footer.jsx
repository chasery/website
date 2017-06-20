import React from 'react'

const githubIcon = require('../../../assets/svg/github-icon.svg')
const linkedInIcon = require('../../../assets/svg/linked-in-icon.svg')
const emailIcon = require('../../../assets/svg/email-icon.svg')
const phoneIcon = require('../../../assets/svg/phone-icon.svg')

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">
                <ul className="Footer-list">
                    <li className="Footer-item">
                        <a className="FooterAnchor" href="https://github.com/chasery">
                            <span className="FooterAnchor-icon" dangerouslySetInnerHTML={{__html: githubIcon}} />
                            <span className="FooterAnchor-text">Github</span>
                        </a>
                    </li>
                    <li className="Footer-item">
                        <a className="FooterAnchor" href="https://www.linkedin.com/in/chasery">
                            <span className="FooterAnchor-icon" dangerouslySetInnerHTML={{__html: linkedInIcon}} />
                            <span className="FooterAnchor-text">LinkedIn</span>
                        </a>
                    </li>
                    <li className="Footer-item">
                        <a className="FooterAnchor FooterAnchor--fillIcon" href="mailto:ryan@chasery.com">
                            <span className="FooterAnchor-icon" dangerouslySetInnerHTML={{__html: emailIcon}} />
                            <span className="FooterAnchor-text">Email</span>
                        </a>
                    </li>
                    <li className="Footer-item">
                        <a className="FooterAnchor" href="tel:503-367-7057">
                            <span className="FooterAnchor-icon" dangerouslySetInnerHTML={{__html: phoneIcon}} />
                            <span className="FooterAnchor-text">Call</span>
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}
