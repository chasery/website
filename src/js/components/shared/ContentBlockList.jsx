import React from 'react'

export default class ContentBlockList extends React.Component {
    render() {
        var listItems = this.props.content.map(function(item) {
            return (
                item.isAbbr ? (
                    <li className="ContentBlock-item" key={item.text}>
                        <abbr title={item.title}>{item.text}</abbr>
                    </li>
                ) : (
                    <li className="ContentBlock-item" key={item.text}>
                        {item.text}
                    </li>
                )
            )
        })
        return (
            <div className={"ContentBlock" + (this.props.isHalfWidth?" ContentBlock--half":"") + (this.props.isInline?" ContentBlock--inlineList":"") + (this.props.emphasizeLabel?" ContentBlock--emphasizeLabel":"")}>
                {this.props.label &&
                    <label className="ContentBlock-label" htmlFor={this.props.labelFor}>{this.props.label}</label>
                }
                <ul className="ContentBlock-list" id={this.props.labelFor}>
                    {listItems}
                </ul>
            </div>
        )
    }
}
// <ContentBlockList isHalfWidth="" isInline="" emphasizeLabel="" label="" labelFor="" content={} />
