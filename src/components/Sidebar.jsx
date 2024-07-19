import { Link } from "react-router-dom";
import { K } from "../constants";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col max-h-full w-16 bg-[#04539C] shadow-xl hover:w-64 h-screen transition-all duration-300 ease-in-out pr-8 py-10">
      <span className="text-base font-bold text-zinc-50 text-center  transform scale-100 hover:scale-150 transition-transform duration-300 ease-in-out">
        Jamboree Hub
      </span>
      <div className="flex flex-col  mt-3">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center text-[#08355D] hover:bg-white  hover:text-[#08355D] hover:rounded-md p-2"
          >
            <span className="bg-[#2286C9] text-white p-2 rounded-full">
              {icon}
            </span>
            <span className="text-white hover:text-[#0B4459]">{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
