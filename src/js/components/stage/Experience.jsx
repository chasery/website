import React from 'react'
import ContentBlockText from '../shared/ContentBlockText.jsx'
import ContentBlockList from '../shared/ContentBlockList.jsx'

export default class Experience extends React.Component {
    render() {
        return (
            <section className="Section">
                <div className="Section-wrapper">
                    <h2 className="Section-header">Experience</h2>
                    <div className="Section-content">
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader">SureID</h3>
                            <div className="ContentGroup-row">
                                <ContentBlockText isHalfWidth="true" label="Title" labelFor="sureIdTitle" text="UI/UX Developer" />
                                <ContentBlockText isHalfWidth="true" label="Service" labelFor="sureIdService" text="April 2015 - May 2017" />
                            </div>
                            <ContentBlockText label="About" labelFor="sureIdAbout" text="Lead UX Visual Designer for the RAPIDGate platform; A vetting and credential system for contractors accessing military
facilities." />
                            <ContentBlockList label="Accomplishments" labelFor="sureIdAccomplishments" items={sureIdAccomplishmentsItems} />
                        </div>
                        <div className="ContentGroup">
                            <h3 className="ContentGroup-subHeader">Dealer Spike</h3>
                            <div className="ContentGroup-row">
                                <ContentBlockText isHalfWidth="true" label="Title" labelFor="dsTitle" text="Lead Front End Developer" />
                                <ContentBlockText isHalfWidth="true" label="Service" labelFor="dsService" text="December 2010 - April 2015" />
                            </div>
                            <ContentBlockText label="About" labelFor="dsAbout" text="Front end developer tasked with creating a responsive infrastructure for a fast growing power sports dealership website
provider." />
                            <ContentBlockList label="Accomplishments" labelFor="dsAccomplishments" items={dsAccomplishmentsItems} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const sureIdAccomplishmentsItems = [
    {"isAbbr":false, "title":null, "text":"Advised feature and platform engineering teams on user experience best practices."},
    {"isAbbr":false, "title":null, "text":"Exposed the legacy product’s first web portal."},
    {"isAbbr":false, "title":null, "text":"Established a pattern library and style guide."},
    {"isAbbr":false, "title":null, "text":"Created user testing standards for the legacy product."},
    {"isAbbr":false, "title":null, "text":"Made design and front end contributions on multiple projects."}
]

const dsAccomplishmentsItems = [
    {"isAbbr":false, "title":null, "text":"Collaborated with backend developers to create a responsive framework."},
    {"isAbbr":false, "title":null, "text":"Created front end standards for the company."},
    {"isAbbr":false, "title":null, "text":"Trained and lead a team of eleven front end developers."}
]
