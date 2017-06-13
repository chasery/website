import React from 'react';

export default class ContentBlockThumbnail extends React.Component {
    render() {
        return (
            <div className={"ContentBlock ContentBlock--thumbnail" + (this.props.isHalfWidth?"ContentBlock--half":"")}>
                <img src={this.props.path} width={this.props.width} height={this.props.height} />
            </div>
        );
    }
}
// <ContentBlockThumbnail isHalfWidth="" path="" width="" height="" />
