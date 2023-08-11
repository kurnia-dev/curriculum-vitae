import userLang from './detectlang'

export default function Portfolio() {
    return (
        <section id="portfolio">
            <h2 className='mb-6 uppercase font-semibold text-xl text-[#1e1b4b]'>
                {userLang == 'id' ? <>Portofolio</> : <>Portfolio</>}
            </h2>
            <p className='leading-5 font-normal text-xs text-[var(--text-color)]'>
                {userLang == 'id' ?
                    <>
                        Meskipun pengalaman kerja saya masih sangat sedikit, saya sudah mempelajari banyak hal tentang Front End Web Development.
                        <br /><br />
                        Saya menyimpan proyek yang saya kerjakan untuk mengasah kemampuan saya di GitHub: <a href='https://github.com/kurnia-dev' title='GitHub Profile'>Kurnia-Dev</a>
                        <br /><br />
                        Lihat juga portfolio saya di: <a href='https://kurnia-dev.github.io' title='Portofolio'>kurnia-dev.github.io</a>
                    </>
                    :
                    <>
                        Even though I only have a little work experience, I've learned many things about Front End Web Development.
                        <br /><br />
                        I save projects I worked on to improve my skill on GitHub: <a href='https://github.com/kurnia-dev' title='GitHub Profile'>Kurnia-Dev</a>
                        <br /><br />
                        Also see my portfolio on: <a href='https://kurnia-dev.github.io' title='Portofolio'>kurnia-dev.github.io</a>
                    </>
                }
            </p>
        </section>
    )
}