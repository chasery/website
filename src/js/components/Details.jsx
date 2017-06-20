import React from 'react'

import DetailsBody from './details/Body'
import Footer from './shared/Footer'

export default class Details extends React.Component {
    render() {
        const routeDetails = this.props.routeDetails

        return (
            <main className="Details">
                <DetailsBody name={routeDetails.name} id={routeDetails.id} groups={routeDetails.groups} />
                <Footer />
            </main>
        )
    }
}
