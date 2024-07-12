import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
  return (
    <div className='flex justify-center p-10 bg-violet-300 +items-center'>
      <div className='flex flex-col justify-center items-center bg-violet-700 w-[50%] h-[50%] rounded-2xl shadow-2xl'>
        <img src="" alt="" />
        <div className='flex flex-col gap-4 items-center p-3'>
          <h1 className='text-white font-bold text-3xl pt-3'>Login to Your Account</h1>
          <p className=' flex font-semibold '>Login using your social networks</p>
        </div>
        <div className='flex flex-row gap-5'>
          <FacebookIcon className=' bg-white rounded-full size-12 text-gray-800 text-sm' />
          <InstagramIcon className=' bg-white rounded-full size-12 text-gray-800' />
          <GithubIcon className=' bg-white rounded-full size-12 text-gray-800' />
          <LinkedinIcon className=' bg-white rounded-full size-12 text-gray-800' />
        </div>
        <div className='flex w-1/2 pt-20'>
          <hr className='w-[45%]' />
          <span>OR</span>
          <hr className='w-[45%]' />
        </div>
        <form >
          <div className=" mb-8 pt-14 ">
            <label
              htmlFor="name"
              className="block text-white font-medium mb-1 ml-4"
            ></label>
            <input
              type="text"
              placeholder="Enter Email"
              className="h-10 w-[400px] px-2 py-1 outline-transparent border-violet-950 border-2 rounded-3xl"
            />
            <label
              htmlFor="name"
              className="block text-white font-medium mb-1 ml-4"
            ></label>
            <input
              type="text"
              placeholder="Enter Password"
              className="h-10 w-[400px] px-2 py-1 outline-transparent border-violet-950 border-2 rounded-3xl "
            />

            <div className='flex justify-center p-2'>
              <button className=' bg-white rounded-2xl h-8 w-32 border-violet font-semibold '>Sign In</button>
            </div>
          </div>
        </form>
        <div>
          <button>Login Using google</button>
        </div>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login