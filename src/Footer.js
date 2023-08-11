import { Icon } from '@iconify/react'
import userLang from './detectlang'

export default function Footer() {
    return (
        <footer className='container max-w-3xl mx-auto h-auto flex justify-between gap-4 mt-12 text-xs text-[var(--main-color)] py-10 px-6 border-t border-solid border-[var(--accent-color)] bg-[none]'>
            {userLang == 'id' ?
                <>
                    <p>
                        Dibuat dengan React JS dan Tailwind CSS.
                    </p>
                    <a href='https://kurnia-dev.github.io/curriculum-vitae/' className='flex items-center gap-1'>
                        Lihat Versi Web
                        <Icon icon="ci:external-link" color="var(--accent-color)"/>
                    </a>
                </>
                :
                <>
                    <p>
                        Built using React JS and Tailwind CSS.
                    </p>
                    <a href='https://kurnia-dev.github.io/curriculum-vitae/' className='flex items-center gap-1'>
                        See the Web Version
                        <Icon icon="ci:external-link" color="var(--accent-color)"/>
                    </a>
                </>}
        </footer>
    )
}