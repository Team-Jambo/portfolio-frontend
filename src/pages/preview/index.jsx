
import image from "../../assets/images/banner.webp"
import man from "../../assets/images/damn.jpg"
import { BriefcaseBusinessIcon, FacebookIcon, GithubIcon, Globe2Icon, HandIcon, InstagramIcon, LaptopIcon, LinkedinIcon, MailIcon, MouseIcon, PenBoxIcon, Phone, ShipWheelIcon, SpeechIcon, TextIcon, TextQuoteIcon, TwitchIcon, User2Icon } from 'lucide-react';
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
import blogo from "../../assets/images/blogo.png";
import blogtw from "../../assets/images/blogtw.png";
import blogt from "../../assets/images/blogt.jpg";
import blog from "../../assets/images/blog.png";
import down from "../../assets/images/download.png";
import ach from "../../assets/images/twoli.jpg";
import angel from "../../assets/images/angel.jpg";
import { useLoaderData } from "react-router-dom";


const Preview = () => {
  const data = useLoaderData();
  console.log("🚀 ~ Preview ~ data:", data);

  return (
    <div>
      <div className='flex overflow-x-hidden '>
        <div>
          <img src={image} alt="image" className=' w-full h-full opacity-5  ' />
        </div>
        <div className='absolute flex flex-row gap-2 justify-evenly'>
          <span className='p-10  '>
            <img src={man} alt="him" className='w-[200%] shadow-2xl rounded-2xl' />
          </span>
          <span className='pr-5'>
            <h1 className='text-4xl font-bold pt-12'>Hello,</h1>
            <h1 className='text-2xl pt-3'>I'm Ruth BOATENG</h1>
            <p className='font-semibold pt-3 '>Frontend Dev, UI/UX designer, Graphic Designer and Copywriter3</p>
            <p className='text-sm'>When it comes to writing my web developer technical bio, I want to make sure that I start <br />with a strong opening statement. I want to introduce myself and my skills in a way that is clear, concise, and catches the reader's attention. I am a web developer with years</p>
            <div>
              <button className='w-40 bg-white border-2  border-black mt-3 hover:-translate-x-2 transition motion-reduce:hover:translate-x-4 text-black text-md font-semibold rounded-0 mb-6'>DOWNLOAD CV</
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

        </span>
        <div className="flex flex-row ">
          <div className="flex flex-col pt-4 pl-5 gap-5 ">
            <button><GraduationCapIcon className='size-6 text-[#E64D40] hover: animate-pulse' /></button>
            <button><BugAntIcon className='size-6 text-[#E64D40] hover:' /></button>
            <button><TimerIcon className='size-6 text-[#E64D40] hover: animate-pulse' /></button>
            <button><ComputerDesktopIcon className='size-6 text-[#E64D40] hover: animate-pulse' /></button>
          </div>
          <div className="px-10 pt-4 text-sm font-semibold" >
            <p ><strong>I'm  a passionate UI/UX designer with 6 years of experience </strong>in crafting intuitive and user-centered designs that drive results. <br /> With a strong background <br /> in human-computer interaction and a keen eye for detail, I thrive in fast-paced environments where no two days are <br />ever the same. My design philosophy is centered around empathy, simplicity, and creativity. I believe that good <br /> design should be invisible, yet impactful. <br /> I'm obsessed with staying up-to-date with the <br />latest design trends and technologies, and I'm always looking for <br />ways to improve my skills and knowledge.</p>
          </div>
          <img src={about} alt="phone" className="w-[50%] h-[20%]" />
        </div>
        <hr className='bg-[#FAE7D3] h-1' />
      </section>

      <section className="flex flex-col bg-white shadow-lg ">
        <span >
          <h2 className="text-4xl font-bold p-10">SKILLS</h2>
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
      </section>

      <span>
        <hr className='bg-[#FAE7D3] h-1' />
      </span>

      <span>
        <h1 className="text-4xl font-bold p-10">MY PROJECTS</h1>
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
        <h1 className="text-4xl font-bold p-10">EDUCATION</h1>
        <hr className='bg-blue-950' />
      </span>

      <div className="flex flex-row justify-around ">
        <span className="">
          <h2 className="py-8 font-bold text-2xl">YEAR</h2>
          <p className="py-8">2018-2020</p>
          <p className="py-8">2018-2016</p>
          <p className="py-8">2016-2014</p>
          <p className="py-8">2014-2012</p>
        </span>
        <span>
          <h2 className="py-8 font-bold text-2xl">QUALIFICATION</h2>
          <span>
            <p className=" font-bold py-5 bg-[#e0d0e6] text-black w-full shadow-xl border-black mt-3 ">MASTERS DEGREE IN COMPUTER ENGINEERING</p>
            <p>University of Ghana </p>
          </span>
          <span>
            <p className=" font-bold py-5 bg-[#e0d0e6] text-black w-full shadow-xl border-black mt-3 "> DEGREE IN COMPUTER ENGINEERING</p>
            <p>Kwame Nkrumah University of Science and Technology </p>
          </span>
          <span>
            <p className="font-bold py-5 bg-[#e0d0e6] text-black w-full shadow-xl border-black mt-3 ">Training in Web Development</p>
            <p>MEST Africa</p>
          </span>
          <span>
            <p className=" font-bold py-5 bg-[#e0d0e6] text-black w-full shadow-xl border-black mt-3 ">MASTERS DEGREE IN COMPUTER ENGINEERING</p>
            <p>University of Ghana </p>
          </span>
        </span>
      </div>

      <span>
        <h1 className="text-4xl font-bold p-10">MY EXPERIENCES</h1>
      </span>
      <span className="flex px-20">
        <p className="py-5 bg-[#e0d0e6] rounded-lg text-black w-full shadow-xl border-black mt-10 "><strong className="text-orange-600">UI/UX Designer at Envato 2017-2018 <br /></strong>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      </span>
      <span className="flex px-20">
        <p className="py-5 bg-[#e0d0e6] rounded-lg text-black w-full shadow-xl border-black mt-10 "><strong className="text-orange-600">UI/UX Designer at Envato 2017-2018 <br /></strong>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      </span>
      <span className="flex px-20">
        <p className="py-5 bg-[#e0d0e6] rounded-lg text-black w-full shadow-xl border-black mt-10 "><strong className="text-orange-600">Front End Developer at Google Company 2017-2018 <br /></strong>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      </span>
      <span className="flex px-20">
        <p className="py-5 bg-[#e0d0e6] rounded-lg text-black w-full shadow-xl border-black mt-10 "><strong className="text-orange-600">System Analyst 2017-2018 <br /></strong>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      </span>
      <span>
        <h1 className="text-4xl font-bold p-10">ACHIEVEMENTS</h1>
        <hr className='bg-blue-950' />
      </span>
      <div className="flex flex-row gap-10">
        <img src={down} alt="achievement" className="p-10" />
        <span className="p-10">
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
        </span>
      </div>
      <div className="flex flex-row gap-10">
        <img src={ach} alt="achievement" className="p-10" />
        <span className="p-10">
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
        </span>
      </div>
      <div className="flex flex-row gap-10">
        <img src={angel} alt="achievement" className="p-10" />
        <span className="p-10">
          <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
        </span>
      </div>

      <span>
        <h1 className="text-4xl font-bold p-10">RECENT BLOG</h1>
        <hr className='bg-blue-950' />
      </span>

      <div className=" grid grid-cols-4 gap-4 p-10">
        <div className="container bg-white rounded-lg shadow-2">
          <img src={blogo} alt="blog" className="" />
          <p className="text-xs font-thin p-2">MARCH 14 | UI DESIGN</p>
          <p className="text-12 font-bold p-2">WHAT USERS REALLY NEED</p>
          <p className="text-md p-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <TextIcon />
        </div>
        <div className="container  bg-white rounded-lg shadow-2">
          <img src={blogt} alt="blog" />
          <p className="text-xs font-thin p-2">JUNE 27 | WEB DEVELOPMENT</p>
          <p className="text-12 font-bold p-2">DEAR NEW WEB DEVELOPER</p>
          <p className="text-md p-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <TextIcon />
        </div>
        <div className="container  bg-white rounded-lg shadow-2">
          <img src={blogtw} alt="blog" />
          <p className="text-xs font-thin p-2">MARCH 14 | WEB DESIGN</p>
          <p className="text-12 font-bold p-2">DEAR NEW WEB DEVELOPER</p>
          <p className="text-md p-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <TextIcon />
        </div>
        <div className="container bg-white rounded-lg shadow-2 h-45vh">
          <img src={blog} alt="blog" className="" />
          <p className="text-xs font-thin p-2">MARCH 14 | WEB DESIGN</p>
          <p className="text-12 font-bold p-2">DEAR NEW WEB DEVELOPER</p>
          <p className="text-md p-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <TextIcon />
        </div>
      </div>

      <span>
        <h1 className="text-4xl font-bold p-10">CONTACT ME</h1>
      </span>

      <span>
        <p className="pl-12">Let's keep in touch</p>
      </span>

      <div className="flex flex-row p-20 ">

        <div className="flex flex-col gap-7 ">
          <Globe2Icon className="text-violet-950 hover:" />
          <MailIcon />
          <Phone />
          <FacebookIcon />
          <LinkedinIcon />
          <GithubIcon />
        </div>
        <div className="flex flex-col gap-7 pl-10">
          <button>www.ruthieboat.org</button>
          <button>ruthieboat@hotmail.com</button>
          <p>+1 23 456 7890</p>
          <p>Ruthie Boat</p>
          <p>Ruth Boateng</p>
          <p>Ruthie Boat</p>
        </div>
        <div className="flex flex-col gap-7 ">
          <input type="text" className="bg-[#e0d0e6] text-black px-12 py-3 rounded-lg ml-20" placeholder="Name:" />
          <input type="text" className="bg-[#e0d0e6] text-black px-12 py-3 rounded-lg ml-20" placeholder="Email:" />
          <input type="text" className="bg-[#e0d0e6] text-black px-12 py-3 rounded-lg ml-20" placeholder="Subject:" />
          <input type="text" className="bg-[#e0d0e6] text-black px-12 py-12 rounded-lg ml-20" placeholder="Message:" />
          <button className="bg-[#e0d0e6] text-black px-6 py-2 ml-auto rounded-lg flex-gap-x-2">SEND MESSAGE</button>
        </div>
      </div>
    </div >
  )
};

export default Preview