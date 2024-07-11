import React from 'react'
import image from "../../assets/images/banner.webp"
import man from "../../assets/images/personone.jpg"

const Preview = () => {
  return (
    <div>
      <div className='flex relative'>
        <img src={image} alt="image" className='w-full h-[10] opacity-5' />
        <img src={man} alt="him" className='absolute rounded-full size-8+
        0 p-5' />
        <span>
        <h1 className='text-4xl font-bold'>Hello</h1>
        <h1 className='text-2xl'>Daniel BOATENG</h1>
        <p>Frontend Dev, UI/UX designer, Graphic Designer and Copywriter3</p>
        </span>
      </div>

      <div className='flex flex-col '>
        
        <button>DOWNLOAD CV</button>
      </div>

      <div>
        <h1>ABOUT</h1>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
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