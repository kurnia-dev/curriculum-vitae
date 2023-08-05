import { Icon } from '@iconify/react';

const SkillSet = {
    'HTML5|vscode-icons:file-type-html': [
        'Semantic Elements',
        'Web Storages: Local and Session Storage',
        'Accessibility: Proper Headings Level, Alt Attributes, Tabs Index, Labels, Input Types, etc.',
        'From Validation',
        'Etc.'
    ], 
    'CSS3|devicon:css3': [
        'Basic CSS: Font Properties, Spacing, Box Model, Pseudo Elements and Pseudo Classes, Color and Background, Layout (Display and Position), etc.', 
        'Media Queries for Responsive Design.', 
        'Flexbox and Grid Layouts. ',
        'Transitions and Animations. ',
        'Accessibility: Color Contrast Ratio, Font Scalability',
        'Etc.'
    ], 
    'JavaScript|vscode-icons:file-type-js-official': [
        'Basic JS: Variables, Data Types and Conversions, Comparisons, Operators and Expressions. Looping, Control Flows, and Functions. ',
        'DOM Manipulation and Event Handling. ',
        'Error Handling. ',
        'Asynchronous JS: setTimeout and setInterval. ',
        'Network Request: XHR and Fetch API.',
        'JavaScript OOP: Class, Object, and Inheritance.',
        'Data Structure: Array and JSON.  ', 
        'Etc.',
    ], 
    'Figma|devicon:figma': [
        'Using Figma to Design: ', [
            'Blogger Template: simpli-template.zendcode.web.id',
            'Notes Application: www.figma.com/community/file/1221551746912439502',   
            'This CV also designed with Figma',
            'and more.'
        ], 
        'Prototyping: https://shorturl.at/qxEH4', 
        'Slicing from Figma to Real Web/App.',
        'Etc.'
    ]
}

function SkillDescription({ skillDescription }) {
    return (<>
        {skillDescription.map((desc, Index) => {
            if (Array.isArray(desc)) {
                return (
                    <li key={Index}>
                        <ul className='list-disc pl-5'>
                            {desc.map((subDesc, subIndex) => (
                                <li key={subIndex}>{ subDesc}</li>
                            ))}
                        </ul>
                    </li>
                )
            } else {
                return <li key={Index}>{desc}</li>
            }
            })}
        </>)
}

export default function SkillsSection() {
    return (
        <section id="skills" className="flex flex-col gap-5">
            <h2 className='mb-6 uppercase font-semibold text-xl text-[#1e1b4b]'>Skills</h2>
            {Object.entries(SkillSet).map(([skillName, skillDescription], Index) => (
                <div key={Index} className="grid grid-cols-[1fr_3fr] gap-5">
                    <span className="flex gap-2 items-center justify-start text-xs font-semibold w-full my-auto" style={{overflowWrap : 'anywhere'}}>
                        <Icon aria-hidden='true' icon={skillName.substring(skillName.indexOf('|') + 1)} width={30} height={30}/>
                        {skillName.substring(0, skillName.indexOf('|'))}
                    </span>
                    <ul className="border-solid border-l-[3px] border-[var(--accent-color)] px-4 py-2 text-xs flex flex-col gap-2">
                        <SkillDescription skillDescription={skillDescription} />
                    </ul>
                </div>
            ))}
        </section>
    );
}
