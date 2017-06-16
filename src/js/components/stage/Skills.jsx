import React from 'react'

import ContentBlockText from '../shared/ContentBlockText.jsx'
import ContentBlockList from '../shared/ContentBlockList.jsx'

export default class Skills extends React.Component {
    render() {
        var sectionContent = skillsContent.map((item) => {
            return (
                <div className="ContentGroup ContentBlock--half" key={item.skillsHeading}>
                    <h3 className="ContentGroup-subHeader">{item.skillsHeading}</h3>
                    {item.skills ? item.skills.map ((skill) => {
                        return (
                            <ContentBlockList key={skill.label} isInline={skill.isInline} label={skill.label} labelFor={`${skill.label}List`} content={skill.content} />
                        )
                    })
                    : <div>{item.skillsHeading} has no skills asscoiated with it currently.</div>
                    }
                </div>
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
        "skillsHeading":"User Experience Visual Designer",
        "skills":[
            {
                "label":"Process",
                "isInline":true,
                "content":[
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
                "content":[
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
        "skillsHeading":"Front End Developer",
        "skills":[
            {
                "label":"Languages",
                "isInline":true,
                "content":[
                    {"isAbbr":true, "title":"Hypertext Markup Language 5", "text":"HTML5"},
                    {"isAbbr":true, "title":"Cascading Style Sheets", "text":"CSS3"},
                    {"isAbbr":true, "title":"Syntactically Awesome Style Sheets", "text":"SCSS"},
                    {"isAbbr":false, "title":null, "text":"JavaScript"},
                    {"isAbbr":false, "title":null, "text":"TypeScript"}
                ]
            },{
                "label":"Frameworks",
                "isInline":true,
                "content":[
                    {"isAbbr":false, "title":null, "text":"Angular"},
                    {"isAbbr":false, "title":null, "text":"React"},
                    {"isAbbr":false, "title":null, "text":"Bootstrap"},
                    {"isAbbr":false, "title":null, "text":"Foundation"}
                ]
            },{
                "label":"Compilers & Transpilers",
                "isInline":true,
                "content":[
                    {"isAbbr":false, "title":null, "text":"Webpack"},
                    {"isAbbr":false, "title":null, "text":"Gulp"},
                    {"isAbbr":false, "title":null, "text":"Babel"}
                ]
            },{
                "label":"Other",
                "isInline":true,
                "content":[
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
