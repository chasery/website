import React from 'react';
import ContentBlockText from './shared/ContentBlockText.jsx';
import ContentBlockList from './shared/ContentBlockList.jsx';

export default class Skills extends React.Component {
    render() {
        return (
            <section className="Section">
                <div className="Section-wrapper">
                    <h2 className="Section-header">Skills</h2>
                    <div className="Section-content">
                        <div className="ContentGroup ContentGroup--half">
                            <h3 className="ContentGroup-subHeader"><abbr title="User Experience">UX </abbr>Visual Designer</h3>
                            <ContentBlockList isInline="true" label="Process" labelFor="designerProcess" items={designerProcessItems} />
                            <ContentBlockList isInline="true" label="Applications" labelFor="designerApplications" items={designerApplicationsItems} />
                        </div>
                        <div className="ContentGroup ContentGroup--half">
                            <h3 className="ContentGroup-subHeader">Front End Developer</h3>
                            <ContentBlockList isInline="true" label="Languages" labelFor="frontEndLanguages" items={frontEndLanguagesItems} />
                            <ContentBlockList isInline="true" label="Frameworks" labelFor="frontEndFrameworks" items={frontEndFrameworksItems} />
                            <ContentBlockList isInline="true" label="Compilers" labelFor="frontEndCompilers" items={frontEndCompilersItems} />
                            <ContentBlockList isInline="true" label="Other" labelFor="frontEndOther" items={frontEndOtherItems} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const designerProcessItems = [
    {"isAbbr":false, "title":null, "text":"User Testing"},
    {"isAbbr":false, "title":null, "text":"Personas"},
    {"isAbbr":false, "title":null, "text":"User Flows"},
    {"isAbbr":false, "title":null, "text":"Storyboards"},
    {"isAbbr":false, "title":null, "text":"Wireframes"},
    {"isAbbr":false, "title":null, "text":"Prototypes"},
    {"isAbbr":false, "title":null, "text":"Style Guides"},
    {"isAbbr":false, "title":null, "text":"User Acceptance Testing"}
];
const designerApplicationsItems = [
    {"isAbbr":false, "title":null, "text":"Sketch"},
    {"isAbbr":false, "title":null, "text":"Keynote"},
    {"isAbbr":false, "title":null, "text":"InVision"},
    {"isAbbr":false, "title":null, "text":"Adobe Experience Design"},
    {"isAbbr":false, "title":null, "text":"After Effects"},
    {"isAbbr":false, "title":null, "text":"Illustrator"},
    {"isAbbr":false, "title":null, "text":"Photoshop"}
];

const frontEndLanguagesItems = [
    {"isAbbr":true, "title":"Hypertext Markup Language 5", "text":"HTML5"},
    {"isAbbr":true, "title":"Cascading Style Sheets", "text":"CSS3"},
    {"isAbbr":true, "title":"Syntactically Awesome Style Sheets", "text":"SCSS"},
    {"isAbbr":false, "title":null, "text":"JavaScript"},
    {"isAbbr":false, "title":null, "text":"TypeScript"}
];
const frontEndFrameworksItems = [
    {"isAbbr":false, "title":null, "text":"Angular"},
    {"isAbbr":false, "title":null, "text":"React"},
    {"isAbbr":false, "title":null, "text":"Bootstrap"},
    {"isAbbr":false, "title":null, "text":"Foundation"}
];
const frontEndCompilersItems = [
    {"isAbbr":false, "title":null, "text":"Webpack"},
    {"isAbbr":false, "title":null, "text":"Gulp"},
    {"isAbbr":false, "title":null, "text":"Babel"}
];
const frontEndOtherItems = [
    {"isAbbr":false, "title":null, "text":"Agile"},
    {"isAbbr":false, "title":null, "text":"Certified ScrumMaster"},
    {"isAbbr":true, "title":"Node Packet Manager", "text":"NPM"},
    {"isAbbr":false, "title":null, "text":"Yarn"},
    {"isAbbr":false, "title":null, "text":"Git"},
    {"isAbbr":false, "title":null, "text":"Visual Studios"},
    {"isAbbr":false, "title":null, "text":"Visual Studios Code"}
];
