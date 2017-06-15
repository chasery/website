import React from 'react'

import ContentBlockList from './ContentBlockList.jsx'

export default class ContentGroup extends React.Component {
    render() {
        var groupContent = this.props.content.map(function(item) {
            return (
                item.items ? (
                    <ContentBlockList key={item.label} isInline={item.isInline} label={item.label} labelFor={`${item.label}List`} items={item.items} />
                ) : (
                    null
                )
            )
        })
        return (
            <div className={"ContentGroup"  + (this.props.isHalfWidth?" ContentBlock--half":"")}>
                <h3 className="ContentGroup-subHeader">{this.props.groupHeading}</h3>
                {groupContent}
            </div>
        )
    }
}
// <ContentGroup groupHeading="" isHalfWidth="" content={} />
