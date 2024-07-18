
import image from "../../assets/images/banner.webp"
import man from "../../assets/images/personone.jpg"
import { BriefcaseBusinessIcon, FacebookIcon, GithubIcon, HandIcon, InstagramIcon, LaptopIcon, LinkedinIcon, MailIcon, MouseIcon, PenBoxIcon, ShipWheelIcon, TwitchIcon, User2Icon } from 'lucide-react';
import Test from "../../components/Test/Test";
import { ComputerDesktopIcon, DevicePhoneMobileIcon, LightBulbIcon } from "@heroicons/react/16/solid";
import { BugAntIcon } from "@heroicons/react/16/solid";
import { TimerIcon } from "lucide-react";
import { GraduationCapIcon } from "lucide-react";
import about from "../../assets/images/tend.webp";
import fill from "../../assets/images/fill.png";
import worktwo from "../../assets/images/worktwo.jpg";
import workthree from "../../assets/images/workthree.png";
import weekfour from "../../assets/images/weekfour.png";
import fell from "../../assets/images/fell.png";
import fall from "../../assets/images/fall.jpg";



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
            <div>
              <button className='w-40 bg-white border-2 shadow-xl border-black mt-3 hover:-translate-x-2 transition motion-reduce:hover:translate-x-4 text-black text-md font-semibold rounded-0 mb-6'>DOWNLOAD CV</
              button>
            </div>


            <div className='flex flex-row justify-around py-4 w-full bg-blue-980 items-center rounded-md shadow-2xl text-[#3D254F]'>
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

      <section className="flex flex-col pt-20 bg-[#FFFDFC]">
        <span>
          <h2 className="text-4xl font-bold p-10">ABOUT ME</h2>
          <hr className='bg-[#FAE7D3] h-1' />
        </span>
        <div className="flex flex-row ">
          <div className="flex flex-col pt-4 pl-5 gap-5 ">
            <button><GraduationCapIcon className='size-6 text-[#E64D40] hover: animate-pulse' /></button>
            <button><BugAntIcon className='size-6 text-[#E64D40] hover: animate-spin' /></button>
            <button><TimerIcon className='size-6 text-[#E64D40] hover: animate-pulse' /></button>
            <button><ComputerDesktopIcon className='size-6 text-[#E64D40] hover: animate-pulse' /></button>
          </div>
          <div className="px-10 pt-4 text-sm font-semibold" >
            <p ><strong>I'm  a passionate UI/UX designer with 6 years of experience </strong>in crafting intuitive and user-centered designs that drive results. <br /> With a strong background <br /> in human-computer interaction and a keen eye for detail, I thrive in fast-paced environments where no two days are <br />ever the same. My design philosophy is centered around empathy, simplicity, and creativity. I believe that good <br /> design should be invisible, yet impactful. <br /> I'm obsessed with staying up-to-date with the <br />latest design trends and technologies, and I'm always looking for <br />ways to improve my skills and knowledge.</p>
          </div>
          <img src={about} alt="phone" className="w-[50%] h-[20%]" />
        </div>
      </section>

      <section className="flex flex-col bg-white shadow-lg ">
        <span >
          <h2 className="text-4xl font-bold p-10">SKILLS</h2>
          <hr className='bg-[#FAE7D3] h-1' />
        </span>
        <div className="flex flex-row justify-between items-center gap-6 p-10 ">
          <span className="flex flex-col">
            <LaptopIcon className="bg-[#a694af] size-10 rounded-full text-white text-center hover:bg-[#E64D40] hover: animate-pulse " />
            <h2 className="font-bold">SOFTWARE</h2>
            <p className="text-sm">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
          </span>

          <span className="flex flex-col">
            <MouseIcon className="bg-[#643162] size-10 rounded-full text-white text-center hover:bg-[#E64D40] " />
            <h2 className="font-bold">GRAPHIC DESIGN</h2>
            <p className="text-sm">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
          </span>

          <span className="flex flex-col">
            <DevicePhoneMobileIcon className="bg-[#a694af] size-10 rounded-full text-white text-center hover:bg-[#E64D40] animate-pulse" />
            <h2 className="font-bold">APPLICATION</h2>
            <p className="text-sm">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
          </span>


          <span className="flex flex-col">
            <PenBoxIcon className="bg-[#643162] size-10 rounded-full text-white text-center hover:bg-[#E64D40] " />
            <h2 className="font-bold">UI/UX DESIGN</h2>
            <p className="text-sm">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
          </span>

          <span className="flex flex-col">
            <LightBulbIcon className="bg-[#a694af] size-10 rounded-full text-white text-center hover:bg-[#E64D40] animate-pulse " />
            <h2 className="font-bold">INNOVATIVE IDEAS</h2>
            <p className="text-sm">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
          </span>

          <span className="flex flex-col">
            <User2Icon className="bg-[#643162] size-10 rounded-full text-white text-center hover:bg-[#E64D40]" />
            <h2 className="font-bold">SOFTWARE</h2>
            <p className="text-sm">Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
          </span>
        </div>

        <div className="">
          <p className="text-sm"> Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
        </div>
      </section>




      <span>
        <h1 className="text-4xl font-bold p-10"></h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>

      <span>
        <h1 className="text-4xl font-bold p-10">MY PROJECTS</h1>
        <hr className='bg-blue-950' />
      </span>
      <div className="grid grid-cols-3 gap-4 p-10 shadow-md ">
        <img src={fell} alt="first" />
        <img src={worktwo} alt="sec" />
        <img src={fall} alt="third" />
        <img src={workthree} alt="four" />
        <img src={weekfour} alt="five" />
        <img src={fill} alt="six" />
      </div>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>

      <span>
        <h1 className="text-4xl font-bold p-10">EDUCATION</h1>
        <hr className='bg-blue-950' />
      </span>

      <div className="flex flex-row justify-around  gap-y-4">
        <span className="">
          <h2>YEAR</h2>
          <p>2018-2020</p>
          <p>2018-2016</p>
          <p>2016-2014</p>
          <p>2014-2012</p>
        </span>
        <span>
          <h2>QUALIFICATION</h2>
          <button className="bg-purple-400 w-full border-2 shadow-xl border-black mt-3 hover:bg-gray-400 motion-reduce:">MASTERS DEGREE IN COMPUTER ENGINEERING</button>
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came </p>
          <button className="bg-purple-400 w-full">MASTERS DEGREE IN COMPUTER ENGINEERING</button>
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came.</p>
          <button className="bg-purple-400 w-full">MASTERS DEGREE IN COMPUTER ENGINEERING</button>
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came.</p>
          <button className="bg-purple-400 w-full">MASTERS DEGREE IN COMPUTER ENGINEERING</button>
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came.</p>
        </span>

      </div>

      <span>
        <h1>EXPERIENCES</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1 className="text-4xl font-bold p-10">ACHIEVEMENTS</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1 className="text-4xl font-bold p-10">BLOG</h1>
        <hr className='bg-blue-950' />
      </span>
      <span>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
      </span>
      <span>
        <h1 className="text-4xl font-bold p-10">CONTACT</h1>
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
};

export default Preview