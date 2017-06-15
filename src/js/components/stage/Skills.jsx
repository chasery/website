import React from 'react'

import ContentGroup from '../shared/ContentGroup.jsx'

export default class Skills extends React.Component {
    render() {
        var sectionContent = skillsContent.map(function(item) {
            return (
                <ContentGroup key={item.groupHeading} groupHeading={item.groupHeading} isHalfWidth={item.isHalfWidth} content={item.content} />
            )
        })
        return (
            <section className="Section">
                <div className="Section-wrapper">
                    <h2 className="Section-header">Skills</h2>
                    <div className="Section-content">
                        {sectionContent}
                    </div>
                </div>
            </section>
        )
    }
}

const skillsContent = [
    {
        "groupHeading":"User Experience Visual Designer",
        "isHalfWidth":true,
        "content":[
            {
                "label":"Process",
                "isInline":true,
                "items":[
                    {"isAbbr":false, "title":null, "text":"User Testing"},
                    {"isAbbr":false, "title":null, "text":"Personas"},
                    {"isAbbr":false, "title":null, "text":"User Flows"},
                    {"isAbbr":false, "title":null, "text":"Storyboards"},
                    {"isAbbr":false, "title":null, "text":"Wireframes"},
                    {"isAbbr":false, "title":null, "text":"Prototypes"},
                    {"isAbbr":false, "title":null, "text":"Style Guides"},
                    {"isAbbr":false, "title":null, "text":"User Acceptance Testing"}
                ]
            },{
                "label":"Applications",
                "isInline":true,
                "items":[
                    {"isAbbr":false, "title":null, "text":"Sketch"},
                    {"isAbbr":false, "title":null, "text":"Keynote"},
                    {"isAbbr":false, "title":null, "text":"InVision"},
                    {"isAbbr":false, "title":null, "text":"Adobe Experience Design"},
                    {"isAbbr":false, "title":null, "text":"After Effects"},
                    {"isAbbr":false, "title":null, "text":"Illustrator"},
                    {"isAbbr":false, "title":null, "text":"Photoshop"}
                ]
            }
        ]
    },{
        "groupHeading":"Front End Developer",
        "isHalfWidth":true,
        "content":[
            {
                "label":"Languages",
                "isInline":true,
                "items":[
                    {"isAbbr":true, "title":"Hypertext Markup Language 5", "text":"HTML5"},
                    {"isAbbr":true, "title":"Cascading Style Sheets", "text":"CSS3"},
                    {"isAbbr":true, "title":"Syntactically Awesome Style Sheets", "text":"SCSS"},
                    {"isAbbr":false, "title":null, "text":"JavaScript"},
                    {"isAbbr":false, "title":null, "text":"TypeScript"}
                ]
            },{
                "label":"Frameworks",
                "isInline":true,
                "items":[
                    {"isAbbr":false, "title":null, "text":"Angular"},
                    {"isAbbr":false, "title":null, "text":"React"},
                    {"isAbbr":false, "title":null, "text":"Bootstrap"},
                    {"isAbbr":false, "title":null, "text":"Foundation"}
                ]
            },{
                "label":"Compilers & Transpilers",
                "isInline":true,
                "items":[
                    {"isAbbr":false, "title":null, "text":"Webpack"},
                    {"isAbbr":false, "title":null, "text":"Gulp"},
                    {"isAbbr":false, "title":null, "text":"Babel"}
                ]
            },{
                "label":"Other",
                "isInline":true,
                "items":[
                    {"isAbbr":false, "title":null, "text":"Agile"},
                    {"isAbbr":false, "title":null, "text":"Certified ScrumMaster"},
                    {"isAbbr":true, "title":"Node Packet Manager", "text":"NPM"},
                    {"isAbbr":false, "title":null, "text":"Yarn"},
                    {"isAbbr":false, "title":null, "text":"Git"},
                    {"isAbbr":false, "title":null, "text":"Visual Studios"},
                    {"isAbbr":false, "title":null, "text":"Visual Studios Code"}
                ]
            }
        ]
    }
]
