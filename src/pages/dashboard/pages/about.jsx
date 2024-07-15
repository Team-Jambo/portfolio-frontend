import { Link } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";

const About = () => {
  return (
    <>
      <PagesLayout headerText="About" buttonText="Add to About">
        <span>WHO AM I?</span>
      </PagesLayout>

      <div className=" flex p-7 leading-10">
        <p className="p-[5em] text-[#B0B0B0] text-[18px] font-thin font-serif w-[90%]">
          <span className="text-blue-400 text-[18px] font-thin">
            I am Jackson Ford
          </span>{" "}
          &nbsp;on her way she met a copy.that where it came from it would have
          been rewritten a thousand times and everything that was left from its
          origin would be the word "and" and the Little Blind Text should turn
          around and return to its own, safe country. Even the all-powerful
          Pointing has no control about the blind texts it is an almost
          unorthographic life One day however a small line of blind text by the
          name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
        <p className="text-white text-xl max-sm:text-lg font-extralight"></p>
      </div>
    </>
  );
};

export default About;
