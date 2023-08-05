import pp from './pp.jpg'
import Intro from './Intro'
import Contact from './Contact'
import Education from './Education'
import Job_exp from './Job-exp'
import Skills from './Skills'


function App() {
  return (
    <main className="container max-w-3xl mx-auto h-auto grid grid-cols-[280px_auto] grid-rows-[200px_auto] gap-x-12 font-['Inter, system-ui'] text-[var(--main-text-color)]">
      <div className='bg-[#220644] p-[28px_20px_20px] rounded-b-[115px] w-max mx-auto border-solid border-[32px] border-white border-t-0 h-max z-10'>
        <img src={pp} alt='profile' className='rounded-[62px] w-[124px] h-[213px] object-cover ' />
      </div>
      <h1 className="flex flex-col font-bold leading-tight text-4xl text-[var(--main-text-color)] gap-4 my-auto uppercase ">KURNIAWAN <br/> SAPUTRO
        <span className='font-normal text-lg'>Frontend Web Developer</span>
      </h1>
      <div className='p-6 bg-[#FAF6FF] pt-[140px] flex flex-col gap-14'>
        <Intro />
        <Contact />
        <Education />
      </div>
      <div className='border-solid border-t-[3px] border-[var(--accent-color)] flex flex-col gap-12 py-12'>
        <Job_exp />
        <Skills />
      </div>
    </main>
  )
}

export default App;
