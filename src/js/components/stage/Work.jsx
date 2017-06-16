import React from 'react'

import WorkExample from './work/WorkExample.jsx'

export default class Work extends React.Component {
    render() {
        var sectionContent = workContent.map((item) => {
            return (
                <WorkExample key={item.route} exampleName={item.exampleName} year={item.year} route={item.route} thumbnailUrl={item.thumbnailUrl} about={item.about} contributions={item.contributions.content} />
            )
        })
        return (
            <section className="Section Section--work">
                <div className="Section-wrapper">
                    <h2 className="Section-header">Work</h2>
                    <div className="Section-content">
                        {sectionContent}
                    </div>
                </div>
            </section>
        )
    }
}

const workContent = [
    {
        "exampleName":"Data Review",
        "year":"2017",
        "route":"data-review",
        "thumbnailUrl":"http://via.placeholder.com/288x161",
        "about":"An internal application for users to rapidly review and process registrations. User acceptance testing revealed an increase of 200% in record processing speed from the legacy tool.",
        "contributions":{
            "isInline":true,
            "content":[
                {"isAbbr":false, "title":null, "text":"User Testing"},
                {"isAbbr":false, "title":null, "text":"Wireframes"},
                {"isAbbr":false, "title":null, "text":"Prototypes"},
                {"isAbbr":false, "title":null, "text":"Style Guide"},
                {"isAbbr":false, "title":null, "text":"User Acceptance Testing"},
                {"isAbbr":true, "title":"Hypertext Markup Language", "text":"HTML"},
                {"isAbbr":true, "title":"Syntactically Awesome Style Sheets", "text":"SCSS"},
                {"isAbbr":false, "title":null, "text":"Angular"},
                {"isAbbr":false, "title":null, "text":"TypeScript"}
            ]
        }
    },{
        "exampleName":"Waivers Portals",
        "year":"2017",
        "route":"waivers-portals",
        "thumbnailUrl":"http://via.placeholder.com/288x161",
        "about":"A pair of internal and external portals improving upon an internal employee managed excel document and customer email system.",
        "contributions":{
            "isInline":true,
            "content":[
                {"isAbbr":false, "title":null, "text":"User Testing"},
                {"isAbbr":false, "title":null, "text":"Wireframes"},
                {"isAbbr":false, "title":null, "text":"Prototypes"},
                {"isAbbr":false, "title":null, "text":"Style Guide"},
                {"isAbbr":false, "title":null, "text":"User Acceptance Testing"},
                {"isAbbr":true, "title":"Hypertext Markup Language", "text":"HTML"},
                {"isAbbr":true, "title":"Syntactically Awesome Style Sheets", "text":"SCSS"},
                {"isAbbr":false, "title":null, "text":"Angular"},
                {"isAbbr":false, "title":null, "text":"TypeScript"}
            ]
        }
    }
]
