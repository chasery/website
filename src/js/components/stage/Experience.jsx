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
        "companyName":"CareMore Health",
        "title":{
            "label":"Title",
            "isHalfWidth":true,
            "content":"UX Visual Designer"
        },
        "service":{
            "label":"Service",
            "isHalfWidth":true,
            "content":"August 2017 - Present"
        },
        "about":{
            "label":"About",
            "isHalfWidth":false,
            "content":"Currently leading UX strategy for an iOS app aimed at exposing critical information to the company's doctors."
        },
        "accomplishments":{
            "label":"Accomplishments",
            "isInline":false,
            "content":[
                {"isAbbr":false, "title":null, "text":"Established a regular and frequent user testing feedback loop."},
                {"isAbbr":false, "title":null, "text":"Advocated for an UX process within the team and across the company."},
                {"isAbbr":false, "title":null, "text":"Mentored team members on rapid prototyping and wireframing to test ideas."},
                {"isAbbr":false, "title":null, "text":"Advised iOS and web app IT teams on user experience best practices."},
                {"isAbbr":false, "title":null, "text":"Developed reusable patterns for both mobile and web app experiences to reduce development efforts."}
            ]
        }
    },{
        "companyName":"SureID",
        "title":{
            "label":"Title",
            "isHalfWidth":true,
            "content":"UX Visual Designer"
        },
        "service":{
            "label":"Service",
            "isHalfWidth":true,
            "content":"April 2015 - May 2017"
        },
        "about":{
            "label":"About",
            "isHalfWidth":false,
            "content":"Lead UX Visual Designer for the RAPIDGate platform, a vetting and credential system for contractors accessing military facilities. Primary responsibilities included driving user focused design and assisting front end engineers with creating Angular directives and components."
        },
        "accomplishments":{
            "label":"Accomplishments",
            "isInline":false,
            "content":[
                {"isAbbr":false, "title":null, "text":"Advised feature and platform engineering teams on user experience best practices."},
                {"isAbbr":false, "title":null, "text":"Exposed the legacy product’s first web portal which cut hundreds of hours of manual labor a month."},
                {"isAbbr":false, "title":null, "text":"Established a pattern library and style guide making product decisions more clear and uniform."},
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
