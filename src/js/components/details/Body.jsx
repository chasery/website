import React from 'react'
import { Link } from 'react-router-dom'

import ContentBlockImage from '../shared/ContentBlockImage'
import ContentBlockText from '../shared/ContentBlockText'

const arrow = require('../../../assets/svg/arrow-icon.svg')

export default class DetailsBody extends React.Component {
    render() {
        const { name, id, groups } = this.props

        var sectionContent = groups.map((group, i) => {
            return (
                <div className="ContentGroup" key={i}>
                    {group.subHeading &&
                        <h3 className="ContentGroup-subHeader"><span className="ContentGroup-subHeaderText">{group.subHeading}</span><Link className="Anchor Anchor--reverse" to="/"><span className="Anchor-text">Back</span><span className="Anchor-icon" dangerouslySetInnerHTML={{__html: arrow}} /></Link></h3>
                    }
                    {group.content ? group.content.map((item, index) => {
                        return <ContentBlockImage key={index} folder={id} imageName={item.image} text={item.text} />
                        }) : (
                            <div>This example has no images currently.</div>
                        )
                    }
                </div>
            )
        })
        return (
            <section className="Section Section--details">
                <div className="Section-wrapper">
                    <h2 className="Section-header">{name}</h2>
                    <div className="Section-content">
                        {sectionContent}
                    </div>
                </div>
            </section>
        )
    }
}
