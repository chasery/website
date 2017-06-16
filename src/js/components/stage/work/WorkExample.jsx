import React from 'react'
import { Link } from 'react-router-dom'

import ContentBlockText from '../../shared/ContentBlockText.jsx'
import ContentBlockList from '../../shared/ContentBlockList.jsx'
import ContentBlockThumbnail from '../../shared/ContentBlockThumbnail.jsx'

const arrow = require('../../../../assets/svg/arrow-icon.svg')

export default class WorkExample extends React.Component {
    render() {
        return (
            <div className="ContentGroup">
                <h3 className="ContentGroup-subHeader">{this.props.exampleName}<small className="ContentGroup-small">{this.props.year}</small><Link className="Button Button--smallTransparent" to={`/${this.props.route}`}><span className="Button-icon" dangerouslySetInnerHTML={{__html: arrow}} /></Link></h3>
                <div className="ContentGroup-row">
                    <ContentBlockThumbnail path={this.props.thumbnailUrl} width="288" height="161" />
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
