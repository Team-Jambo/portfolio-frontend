import React from 'react'
import image from "../../assets/images/banner.webp"
import man from "../../assets/images/personone.jpg"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitchIcon } from 'lucide-react'

const Preview = () => {
  return (
    <div>
      <div className='flex overflow-x-hidden '>
        <img src={image} alt="image" className=' w-full h-1/2 opacity-5  ' />

        <div className='absolute flex flex-row gap-2 justify-evenly'>
          <span className='p-10  '>
            <img src={man} alt="him" className='size-[20] shadow-2xl rounded-md' />
          </span>
          <span className='pr-5'>
            <h1 className='text-4xl font-bold pt-12'>Hello,</h1>
            <h1 className='text-2xl'>Daniel BOATENG</h1>
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
          </span>
        </div>
      </div>
      <div >
        <span>
          <h1>ABOUT ME</h1>
          <hr className='bg-blue-950' />
        </span>
        <span>
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
        </span>
        <span>
          <h1>MY SERVICES</h1>
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
      </div>

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