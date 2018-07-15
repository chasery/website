import React from 'react'

const logo = require('../../../assets/svg/chasery-logo.svg')

export default class StageHeader extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className="Header-logo" dangerouslySetInnerHTML={{__html: logo}} />
                <h1 className="Header-subHeading"><span className="u-isHidden">Ryan Chase, an </span>UX Visual Designer and Front End Developer</h1>
            </header>
        )
    }
}
