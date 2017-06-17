import React from 'react'

import DetailsHeader from './details/Header.jsx'
import Footer from './shared/Footer.jsx'

export default class Details extends React.Component {
    render() {
        return (
            <main className="Details">
                <DetailsHeader test={this.props.detailsHeader} />
                <Footer />
            </main>
        )
    }
}
