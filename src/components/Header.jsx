import React from 'react';

const logo = require('../assets/svg/chasery-logo.svg');

export default class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className="Header-logo" dangerouslySetInnerHTML={{__html: logo}} />
                <h1 className="Header-subHeading"><span className="u-isHidden">Ryan Chase is </span>An user experience visual designer and front end developer</h1>
            </header>
        );
    }
}
