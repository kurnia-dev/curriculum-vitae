const EducationList = {
    'major':  ['Teknik Komputer dan Jaringan'],
    'institution': ['SMK Tamtama Karanganyar'], 
    'year' : ['2019 - 2022']
} 

function Education() {
    let list = []
    for (const a in EducationList.major) {
        for (const i in a) {
            list.push(
                <li className="px-4 py-[6px] border-solid border-l-[3px] border-[var(--accent-color)] text-xs flex flex-col gap-[6px]">
                    <span className="block font-semibold">{EducationList.major[i]}</span>
                    <span className="block">{EducationList.institution[i]}</span>
                    <span className="block">{EducationList.year[i]}</span>
                </li>
            )
        }
    }

    return (
        <ul>
            {list}
        </ul>
    )
}

export default function EducationSection() {
    return (
        <section id="education">
            <h2 className='mb-6 uppercase font-semibold text-xl text-[var(--text-color)]'>Education</h2>
            <Education/>
        </section>
    )
}