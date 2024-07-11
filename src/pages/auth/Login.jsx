import React from 'react'
import { Form } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <form >
      <div className="mb-8 pt-14">
          <label
            htmlFor="name"
            className="block text-black font-medium mb-1 ml-4"
          ></label>
          <input
            type="text"
            placeholder="Email Address"
            className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg "
          />
           <label
            htmlFor="name"
            className="block text-black font-medium mb-1 ml-4"
          ></label>
          <input
            type="text"
            placeholder="Password"
            className="h-10 w-full px-2 py-1 outline-transparent border-[#2d6599] border-2 rounded-lg "
          />
        </div>
        
      



      </form>
      <div>
        
      </div>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Login