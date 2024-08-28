import { ArrowBigDownDashIcon, ArrowBigDownIcon, SearchCodeIcon, SearchIcon, SearchXIcon, User2Icon } from 'lucide-react'
import ParticlesComponent from '../../components/Particles'
import { useNavigate } from 'react-router-dom'



const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <ParticlesComponent id="tsparticles" />
      <div className='flex flex-col justify-center items-center min-h-[50vh] pt-10 z-10'>
        <div className='max-w-2xl px-3'>
          <div className='flex flex-row justify-between '>
            <div className='flex justify-start text-2xl font-bold text-[#2286C9]'>jambo.</div>
            <button onClick={() => navigate("/pricing")} className='font-bold '>Get started</button>
            <button onClick={() => navigate("/signup")} className=' text-orange-500 font-bold hover:text-sky-700'>Sign Up</button>
            <p className=' text-orange-500 font-bold px-0'>|</p>
            <button onClick={() => navigate("/login")} className=' text-orange-500 font-bold hover:text-sky-700'>Log in</button>
          </div>

          <div className='flex flex-row'>
          <h1 className='text-5xl font-bold mt-44 p-6 text-center '>Upload your</h1>
          <h1 className='text-6xl font-bold mt-44 py-4 text-center text-[#2286C9]'>portfolio</h1>
          </div>
          <h1 className='text-3xl font-bold text-center '>Connect with the best</h1>
          <h1 className=' font-semibold p-4 text-center animate-[wiggle_1s_ease-in-out_infinite]'>WEB DEVELOPERS | UI/UX DESIGNERS | SOFTWARE DEVELOPERS </h1>

          <span className='flex items-center'>
            <input type="Search" className='relative w-full h-12 border-gray-500 border-2 rounded-3xl pl-10 pr-5 hover:shadow-2xl' placeholder='Search...' />
            <SearchXIcon size={28} className='absolute pl-1 text-[#290F66] font-semibold' />
          </span>
        </div>
      </div>
    </>
  )
}

export default Landing