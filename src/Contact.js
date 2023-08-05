import {Icon} from '@iconify/react'


const contactListObject = {
    'ion:location-sharp': 'Kalipurwo, RT05 RW05, Kuwarasan, Kebumen, Jawa Tengah',
    'fluent:call-24-filled': '+62-8956-1313-5017',
    'mi:email': 'kurnia@onetekno.my.id',
    'pepicons-pencil:internet': 'www.zendcode.web.id', 
    'ri:github-fill' : 'github.com/Kurnia-dev'
}

function ContactList() {
    return (
        <ul className="flex flex-col gap-3">
            {Object.entries(contactListObject).map(([icon, value]) => (
                <li key={icon} className="text-xs text-[#1e1b4b] flex gap-3">
                    <Icon aria-hidden='true' className='shrink-0' color="var(--accent-color)" icon={icon} width={16} height={16}/>{value}
                </li>
            ))}
        </ul>
    )
}

export default function Contact() {
    return (
        <section id='contact'>
            <h2 className='mb-6 uppercase font-semibold text-xl text-[#1e1b4b]'>contact</h2>
            <ContactList/>
        </section>
    )
}