import React from 'react'

export default class ContentBlockImage extends React.Component {
    render() {
        const { folder, imageName } = this.props
        const imageUrl = require(`../../../assets/images/${folder}/${imageName}`)

        return (
            <div className={"ContentBlock" + (this.props.thumbnail?" ContentBlock--thumbnail":" ContentBlock--image")}>
                <img className="ContentBlock-image" src={imageUrl} width="100%" height="100%" title={this.props.text} />
                {this.props.text &&
                    <p className="ContentBlock-text">{this.props.text}</p>
                }
            </div>
        )
    }
}
// <ContentBlockImage thumbnail=false path="" text="" />
