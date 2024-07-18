import { SearchIcon, User2Icon } from 'lucide-react'
import ParticlesComponent from '../../components/Particles'


const Landing = () => {
  return (
    <>
    <ParticlesComponent id="tsparticles" />
    <div className='flex flex-col justify-center items-center min-h-[50vh] pt-10 z-10'>
      <div className='max-w-2xl px-3'>
        <div className='flex flex-row justify-between '>
          <button className='font-bold'>Get Started</button>
          <button className='font-bold'>Pricing</button>
          <button className=' text-orange-500 font-bold hover:text-sky-700'>Sign Up</button>
          <button className=' text-orange-500 font-bold hover:text-sky-700'>Log in</button>
        </div>

        <h1 className='text-6xl font-bold mt-60 p-4 text-center'>Hire Top Developers</h1>

        <span className='flex items-center'>
          <input type="Search" className='relative w-full h-12 border-blue-950 border-2 rounded-3xl pl-10 pr-5 hover:shadow-md active:border-0' />
          <SearchIcon size={36} className='absolute pl-1' />
        </span>
      </div>
    </div>
    </>
  )
}

export default Landing