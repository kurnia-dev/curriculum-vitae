import userLang from './detectlang'

const JobsList = {
    1: {
        'title':  'Website Administrator and Content Writer',
        'company': 'CV. Sarana Integrasi Kebumen (Kebumen, Jawa Tengah)', 
        'year': ['2021 - 2023'], 
        'jobdesc': [
            "Setting WordPress Template", 
            "Creating Articles about Computer and Digital Technology"
        ]
    }, 
}

const DaftarJob = {
    1: {
        'title':  'Website Admin dan Penulis Artikel',
        'company': 'CV. Sarana Integrasi Kebumen (Kebumen, Jawa Tengah)', 
        'year': ['2021 - 2023'], 
        'jobdesc': [
            "Mengatur Template Wordpress.", 
            "Membuat Artikel Komputer dan Teknologi IT. "
        ]
    }, 
}


function Jobs() { 
    let list = []
    for (const i in JobsList) {
            const job = userLang == 'id' ? DaftarJob[i] : JobsList[i] 
            const jobDesc = job.jobdesc.map((item) => (
                <li key={item}>{item}</li>    
            ))
        
            list.push(
                <li className=" text-xs flex flex-col gap-2">
                    <span className="block font-semibold">{job.title}</span>
                    <span className="block">{job.company}</span>
                    <span className="block">{job.year}</span>
                    <ul className=" mt-4 flex flex-col gap-[6px] px-4 py-[6px] border-solid border-l-[3px] border-[var(--accent-color)]">
                        {jobDesc}
                    </ul>
                </li>
            )
        }

        return (
            <ul>{list}</ul>
        )

    }



export default function JobsSection() {
    return (
        <section id="job-exp">
            <h2 className='mb-8 uppercase font-semibold text-xl text-[#1e1b4b]'>
                {userLang == 'id'
                    ? <>Pengalaman Kerja</>
                    : Object.keys(JobsList).length > 1
                        ? <>Job Experience</>
                        : <>Job Experiences</>} 
            </h2>
            <Jobs/>
        </section>
    )
}