import technologiesIcons from '../data/technologiesIcons.json'
import TechIcon from './TechIcon'

const TechStack = () => {
  return (
    <div
      className="text-md flex flex-wrap justify-center gap-6 bg-slate-800 bg-opacity-50 w-4/5 mt-14 px-5 py-14 rounded-md
     shadow-xl shadow-[#615545] font-bold relative"
    >
        <div className="absolute left-4 top-4 text-white text-lg underline underline-offset-1 cursor-default">
        Tech Stack
      </div>
      <div className='flex flex-wrap justify-center items-end gap-6 relative'>
        {technologiesIcons.map(( tech ) => <TechIcon key={tech.name} tech={tech}/>)}
      </div>
    </div>
  )
}

export default TechStack