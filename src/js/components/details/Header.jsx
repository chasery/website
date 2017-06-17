import React from 'react'

export default class DetailsHeader extends React.Component {
    render() {
        return (
            <header className="Header Header--detailsHeader">
                <h1 className="Header-subHeading">{this.props.test}</h1>
            </header>
        )
    }
}
