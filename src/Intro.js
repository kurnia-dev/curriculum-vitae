import userLang from './detectlang'

export default function Intro() {
    return (
        <section id='intro'>
          <p className='leading-5 font-normal text-xs text-[var(--text-color)]'>
          {userLang == 'id' ? 
              <>
                Nama saya Kurnia. Saya memiliki ketertarikan yang mendalam pada <b>Frontend Web Development</b> dan juga <b>SEO</b>. 
                <br /> <br/>
                Saya bersemangat membuat situs web yang menarik secara visual dan ramah pengguna. Saya selalu termotivasi untuk belajar dan meningkatkan kemampuan saya.  
              </>
            :
            <>
              Kurnia is my name. I have a deep interest in <b>Frontend Website Development and SEO.</b> I am passionate about crafting visually stunning and user-friendly websites. I am eager to learn and improve my skills.
            </>
          }
          </p>
        </section>
    )
}