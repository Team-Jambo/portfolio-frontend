
import image from "../../assets/images/banner.webp"
import man from "../../assets/images/personone.jpg"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitchIcon } from 'lucide-react';
import Test from "../../components/Test/Test";
import { ComputerDesktopIcon } from "@heroicons/react/16/solid";
import { BugAntIcon } from "@heroicons/react/16/solid";
import { TimerIcon } from "lucide-react";
import { GraduationCapIcon } from "lucide-react";
import about from "../../assets/images/tend.webp"



const Preview = () => {

  return (
    <div>
      <div className='flex overflow-x-hidden '>
        <div>
          <img src={image} alt="image" className=' w-full h-full opacity-5  ' />
        </div>
        <div className='absolute flex flex-row gap-2 justify-evenly'>
          <span className='p-10  '>
            <img src={man} alt="him" className='w-[200%] shadow-2xl rounded-lg' />
          </span>
          <span className='pr-5'>
            <h1 className='text-4xl font-bold pt-12'>Hello,</h1>
            <h1 className='text-2xl'>I'm Daniel BOATENG</h1>
            <p className='font-semibold pt-3 '>Frontend Dev, UI/UX designer, Graphic Designer and Copywriter3</p>
            <p className='text-sm'>When it comes to writing my web developer technical bio, I want to make sure that I start <br />with a strong opening statement. I want to introduce myself and my skills in a way that is clear, concise, and catches the reader's attention. I am a web developer with years</p>
            <button className='w-40 bg-slate-300 border-2 shadow-xl border-blue-950 mt-3 hover:-translate-y-1 transition motion-reduce:hover:translate-y-2 text-blue-950 font-bold rounded-md mb-6'>DOWNLOAD CV</button>

            <div className='flex flex-row justify-around py-4 w-full bg-blue-950 items-center rounded-md shadow-2xl text-white'>
              <button><FacebookIcon className='motion-reduce:hidden animate-pulse ..." viewBox="0 0 24 24"><!-- ... --> hover:-translate-y-1 transition motion-reduce' /></button>
              <button><InstagramIcon className='motion-reduce:hidden animate-pulse ..." viewBox="0 0 24 24"><!-- ... --> hover:-translate-y-1 transition motion-reduce' /></button>
              <button><TwitchIcon className='motion-reduce:hidden animate-pulse ..." viewBox="0 0 24 24"><!-- ... --> hover:-translate-y-1 transition motion-reduce' /></button>
              <button><MailIcon className='motion-reduce:hidden animate-pulse ..." viewBox="0 0 24 24"><!-- ... --> hover:-translate-y-1 transition motion-reduce' /></button>
              <button><GithubIcon className='motion-reduce:hidden animate-pulse ..." viewBox="0 0 24 24"><!-- ... --> hover:-translate-y-1 transition motion-reduce ' /></button>
              <button><LinkedinIcon className='motion-reduce:hidden animate-pulse ..." viewBox="0 0 24 24"><!-- ... --> hover:-translate-y-1 transition motion-reduce' /></button>

            </div>
            <Test />
          </span>
        </div>
      </div>

      <section className="flex flex-col pt-20 bg-[#FFFDFC]">
        <span >
          <h2 className="text-4xl font-bold p-10">ABOUT ME</h2>
          <hr className='bg-blue-950' />
        </span>
        <div className="flex flex-row ">
        <div className="flex flex-col pt-4 pl-5 gap-5 ">
            <button><GraduationCapIcon className='size-10 text-[#E64D40] hover: animate-pulse' /></button>
            <button><BugAntIcon className='size-10 text-[#E64D40] hover: animate-spin'/></button>
            <button><TimerIcon className='size-10 text-[#E64D40] hover: animate-pulse'/></button>
            <button><ComputerDesktopIcon className='size-10 text-[#E64D40] hover: animate-pulse'/></button>
          </div>
          <div className="px-10 pt-4 text-sm font-semibold" >
            <p ><strong>I'm  a passionate UI/UX designer with 6 years of experience </strong>in crafting intuitive and user-centered designs that drive results. <br /> With a strong background <br /> in human-computer interaction and a keen eye for detail, I thrive in fast-paced environments where no two days are <br />ever the same. My design philosophy is centered around empathy, simplicity, and creativity. I believe that good <br /> design should be invisible, yet impactful. <br /> I'm obsessed with staying up-to-date with the <br />latest design trends and technologies, and I'm always looking for <br />ways to improve my skills and knowledge.</p>
          </div>
          <img src={about} alt="phone" className="w-[50%] h-[20%]"/>
        </div>
      </section>

      <section className="flex flex-col bg-slate-100 ">
        <span className="flex pt-10">
          <h1>MY SERVICES</h1>
          <hr className='' />
        </span>
        <span className="text-wrap">
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
        </span>
      </section>




      <span>
        <h1>MY EXPERTISE</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1>WORK EXPERIENCE</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1>MY EDUCATION</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1>BLOG</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1>MY CONTACT</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1>MY EXPERTISE</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1>MY EXPERTISE</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>


      <div>
        <h1>
          I am happy to know you
          that 300+ projects done sucessfully!
        </h1>
        <button>HIRE ME</button>
      </div>
      <div>
        <h1>HERE ARE SOME OF MY EXPERTISE</h1>
        <p></p>
      </div>
      <span>
        <p>MY SKILLS</p>
      </span>
    </div>
  )
}

export default Preview