import { ThumbsUpIcon } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#2286C9] w-45 '>
      <div className='flex flex-col text-white justify-center'>
        <h1 className='flex text-5xl font-bold justify-center pt-5'>We do this for free!</h1>
        <p className='flex justify-center p-3'>Just showcase all with a flex - no holding back...</p>
      </div>
      <div>
        <h1 className='flex justify-center text-orange-100'>Build Value</h1>
        <button onClick={() => navigate("/signup")} className='flex justify-items-endtext-orange-500 bg-white p-2 rounded-2xl font-bold hover:text-sky-700'>Sign Up</button>
      </div>


      <div className='flex flex-row justify-evenly'>
        <div className='p-8 bg-white w-80 mt-10 rounded-3xl'>
          <p>A team of up to 5 developers*</p>
          <h1 className='font-bold '>$ 0.00</h1>
          <p className='pb-5'>Transferable annual license with unlimited deployment</p>
          <button className='bg-[#2286C9] text-white p-2 rounded-2xl font-bold'>BUY NOW</button>
          <span className='text-sm font-semibold gap-y-2'>
            <p>Platforms Included</p>
            <p>ASP.NET MVC</p>
            <p>ASP.NET Core</p>
            <p>Angular</p>
            <p>Blazor</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Vue</p>
            <p>WinForms</p>
            <p>WPF</p>
            <p>Xamarin</p>
            <p>Wasm</p>

          </span>
        </div>
        <div className='p-8 bg-white w-80 mt-10 rounded-3xl'>
          <span className='flex flex-row gap-2 justify-center'>
            <p className='text-2xl font-bold text-orange-600'>Recommended</p>
            <ThumbsUpIcon className='text-orange-600 size-70' />
          </span>

          <p>A team of up to 10 developers*</p>
          <h1 className='font-bold'>$ 0.00</h1>
          <p className='pb-5'>Transferable annual license with unlimited deployment</p>
          <button className='bg-[#2286C9] text-white p-2 rounded-2xl font-bold'>BUY NOW</button>
          <span className='text-sm font-semibold gap-y-2'>
            <p>Platforms Included</p>
            <p>ASP.NET MVC</p>
            <p>ASP.NET Core</p>
            <p>Angular</p>
            <p>Blazor</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Vue</p>
            <p>WinForms</p>
            <p>WPF</p>
            <p>Xamarin</p>
            <p>Wasm</p>
          </span>
        </div>
        <div className='p-8 bg-white w-80 mt-10 rounded-3xl'>
          <p>A team of more than 10 developers*</p>
          <h1 className='font-bold'>$ 0.00</h1>
          <p className='pb-5'>Transferable annual license with unlimited deployment</p>
          <button className='bg-[#2286C9] text-white p-2 rounded-2xl font-bold'>BUY NOW</button>

          <span className='text-sm font-semibold gap-y-2'>
            <p>Platforms Included</p>
            <p>ASP.NET MVC</p>
            <p>ASP.NET Core</p>
            <p>Angular</p>
            <p>Blazor</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Vue</p>
            <p>WinForms</p>
            <p>WPF</p>
            <p>Xamarin</p>
            <p>Wasm</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Pricing;