import React from 'react'

import ContentBlockText from '../shared/ContentBlockText'
import ContentBlockList from '../shared/ContentBlockList'

export default class Experience extends React.Component {
    render() {
        var sectionContent = experienceContent.map(function(item) {
            return (
                <div className="ContentGroup" key={item.companyName}>
                    <h3 className="ContentGroup-subHeader">{item.companyName}</h3>
                    <div className="ContentGroup-row">
                        <ContentBlockText isHalfWidth={item.title.isHalfWidth} label={item.title.label} labelFor={`${item.companyName}${item.title.label}`} content={item.title.content} />
                        <ContentBlockText isHalfWidth={item.service.isHalfWidth} label={item.service.label} labelFor={`${item.companyName}${item.service.label}`} content={item.service.content} />
                    </div>
                    <ContentBlockText isHalfWidth={item.about.isHalfWidth} label={item.about.label} labelFor={`${item.companyName}${item.about.label}`} content={item.about.content} />
                    <ContentBlockList isHalfWidth={item.accomplishments.isHalfWidth} isInline={item.accomplishments.isInline} label={item.accomplishments.label} labelFor={`${item.companyName}${item.accomplishments.label}`} content={item.accomplishments.content} />
                </div>
            )
        })
        return (
            <section className="Section">
                <div className="Section-wrapper">
                    <h2 className="Section-header">Experience</h2>
                    <div className="Section-content">
                        {sectionContent}
                    </div>
                </div>
            </section>
        )
    }
}

const experienceContent = [
    {
        "companyName":"SureID",
        "title":{
            "label":"Title",
            "isHalfWidth":true,
            "content":"UI/UX Developer"
        },
        "service":{
            "label":"Service",
            "isHalfWidth":true,
            "content":"April 2015 - May 2017"
        },
        "about":{
            "label":"About",
            "isHalfWidth":false,
            "content":"Lead UX Visual Designer for the RAPIDGate platform, a vetting and credential system for contractors accessing military facilities."
        },
        "accomplishments":{
            "label":"Accomplishments",
            "isInline":false,
            "content":[
                {"isAbbr":false, "title":null, "text":"Advised feature and platform engineering teams on user experience best practices."},
                {"isAbbr":false, "title":null, "text":"Exposed the legacy product’s first web portal."},
                {"isAbbr":false, "title":null, "text":"Established a pattern library and style guide."},
                {"isAbbr":false, "title":null, "text":"Created user testing standards for the legacy product."},
                {"isAbbr":false, "title":null, "text":"Made design and front end contributions on multiple projects."}
            ]
        }
    },{
        "companyName":"Dealer Spike",
        "title":{
            "label":"Title",
            "isHalfWidth":true,
            "content":"Lead Front End Developer"
        },
        "service":{
            "label":"Service",
            "isHalfWidth":true,
            "content":"December 2010 - April 2015"
        },
        "about":{
            "label":"About",
            "isHalfWidth":false,
            "content":"Front end developer tasked with creating a responsive infrastructure for a fast growing power sports dealership website provider."
        },
        "accomplishments":{
            "label":"Accomplishments",
            "isInline":false,
            "content":[
                {"isAbbr":false, "title":null, "text":"Collaborated with backend developers to create a responsive framework."},
                {"isAbbr":false, "title":null, "text":"Created front end standards for the company."},
                {"isAbbr":false, "title":null, "text":"Trained and lead a team of eleven front end developers."}
            ]
        }
    }
]
