import userLang from './detectlang'

export default function OrgExp() {
    return (
        <section id="org-exp">
            <h2 className='mb-6 uppercase font-semibold text-xl text-[#1e1b4b]'>
                {userLang == 'id' ? <>Pengalaman Organisasi</> : <>Organizational Experiences</>}
            </h2>
            {userLang == 'id' ?
                    <ul className="text-xs text-[#1e1b4b] flex flex-col gap-3">
                        <li className='list'>
                            Ketua Organisasi Tamka English Club, organisasi Bahasa Ingris di SMK Tamtama Karanganyar.
                        </li>
                        <li className='list'>
                            Anggota Dewan Ambalan Pramuka SMK Tamtama Karanganyar. 
                        </li>
                    </ul>
                    :
                    <ul className="text-xs text-[#1e1b4b] flex flex-col gap-3">
                        <li className='list'>``
                            Leader of Tamka English Club, an English Organization at SMK Tamtama Karanganyar.
                        </li>
                        <li className='list'>
                            Rover Scout Council Member at Pramuka SMK Tamtama Karanganyar. 
                        </li>
                    </ul>
            }
        </section>
    )
}