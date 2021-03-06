import React from 'react'
import { Link } from 'react-router-dom'

import ContentBlockImage from '../../shared/ContentBlockImage'
import ContentBlockList from '../../shared/ContentBlockList'
import ContentBlockText from '../../shared/ContentBlockText'

const arrow = require('../../../../assets/svg/arrow-icon.svg')

export default class WorkExample extends React.Component {
    render() {
        return (
            <div className="ContentGroup">
                <h3 className="ContentGroup-subHeader">{this.props.exampleName}<small className="ContentGroup-small">{this.props.year}</small><Link className="Anchor" to={`/${this.props.route}`}><span className="Anchor-text">View</span><span className="Anchor-icon" dangerouslySetInnerHTML={{__html: arrow}} /></Link></h3>
                <div className="ContentGroup-row">
                    <ContentBlockImage thumbnail="true" folder={this.props.route} imageName={this.props.exampleImage} />
                    <div className="ContentGroup-column">
                        <ContentBlockText emphasizeLabel="true" label="About" labelFor={this.props.route} content={this.props.about} />
                        <ContentBlockList isInline="true" emphasizeLabel="true" label="Contributions" labelFor={`${this.props.route}`} content={this.props.contributions} />
                    </div>
                </div>
            </div>
        )
    }
}
// <WorkExample projectName="Data Review" year="2017" route="data-review" thumbnailUrl="http://via.placeholder.com/288x161" about="" contributions=[] />
