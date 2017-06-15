import React from 'react'

export default class ContentBlockText extends React.Component {
    render() {
        return (
            <div className={"ContentBlock" + (this.props.isHalfWidth?" ContentBlock--half":"") + (this.props.emphasizeLabel?" ContentBlock--emphasizeLabel":"")}>
                <label className="ContentBlock-label" htmlFor={this.props.labelFor}>{this.props.label}</label>
                <p className="ContentBlock-text" id={this.props.labelFor}>{this.props.text}</p>
            </div>
        )
    }
}
// <ContentBlockText isHalfWidth="" emphasizeLabel="" label="" labelFor="" text="" />
