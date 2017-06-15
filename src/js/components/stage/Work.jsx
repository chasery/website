import React from 'react'

import WorkExample from './work/WorkExample.jsx'

export default class Work extends React.Component {
    render() {
        return (
            <section className="Section Section--work">
                <div className="Section-wrapper">
                    <h2 className="Section-header">Work</h2>
                    <div className="Section-content">
                        <WorkExample name="Data Review" year="2017" route="data-review" thumbnail="http://via.placeholder.com/288x161" aboutText="An internal application for users to rapidly review and process registrations. User acceptance testing revealed an increase of 200% in record processing speed from the legacy tool." contributionsList={dataReviewContributionItems} />
                        <WorkExample name="Waivers Portals" year="2017" route="waivers-portals" thumbnail="http://via.placeholder.com/288x161" aboutText="A pair of internal and external portals improving upon an internal employee managed excel document and customer email system." contributionsList={waiversPortalsContributionItems} />
                    </div>
                </div>
            </section>
        )
    }
}

const dataReviewContributionItems = [
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
const waiversPortalsContributionItems = [
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
