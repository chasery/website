import React from 'react'

const linkedInIcon = require('../../../assets/svg/linked-in-icon.svg')
const emailIcon = require('../../../assets/svg/email-icon.svg')
const phoneIcon = require('../../../assets/svg/phone-icon.svg')

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">
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
            </footer>
        )
    }
}
