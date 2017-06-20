import React from 'react'

import DetailsBody from './details/Body'
import Footer from './shared/Footer'

export default class Details extends React.Component {
    render() {
        const detailsContent = [
            {
                "name":"Registration Processing App",
                "id":"registration-processing",
                "groups":[
                    {
                        "subHeading":"Processing A Registration",
                        "content":[
                            {
                                "image":"initial.png",
                                "text":"One of two workflows allowing for the processing of an individual registration."
                            },{
                                "image":"loading.png"
                            },{
                                "image":"editing.png",
                                "text":"Inline text editing for names that come in mispelled or malformed."
                            },{
                                "image":"loaded.png",
                                "text":"Urgency indication in queue counts allows users to quickly recognize priority work."
                            }
                        ]
                    }
                ]
            },{
                "name":"Decisions Web Portal",
                "id":"decisions-portals",
                "groups":[
                    {
                        "subHeading":"Employee Search",
                        "content":[
                            {
                                "image":"employee-search-initial.png",
                                "text":"An advanced search that internal users could use to quickly locate a participant in their workflow."
                            },{
                                "image":"employee-search-view.png",
                                "text":"The new workflow conveniently exposes all of the participant's active and inactive records in a single location."
                            },{
                                "image":"employee-search-view-menu.png",
                                "text":"Now the interface allows users to efficently apply state changes for multiple records."
                            },{
                                "image":"employee-search-view-detail.png",
                                "text":"Users needed a great level of detail exposed in a modal."
                            }
                        ]
                    },{
                        "subHeading":"Rendering Decisions",
                        "content":[
                            {
                                "image":"decisions-initial.png",
                                "text":"External customers previously sent decisions by email for participants seeking access."
                            },{
                                "image":"decisions-selections.png"
                            },{
                                "image":"decisions-modal.png"
                            }
                        ]
                    },{
                        "subHeading":"Report Creation",
                        "content":[
                            {
                                "image":"reporting-initial.png",
                                "text":"A first pass for exposure of reports to internal and external users."
                            },{
                                "image":"reporting-results.png",
                                "text":"Previously, internal users procured and emailed a document tailored individually to hundreds of customers."
                            }
                        ]
                    }
                ]
            }
        ]
        const result = detailsContent.find(d => d.id === this.props.route);

        return (
            <main className="Details">
                <DetailsBody name={result.name} id={result.id} groups={result.groups} />
                <Footer />
            </main>
        )
    }
}
