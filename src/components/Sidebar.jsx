import { Link } from "react-router-dom";
import { K } from "../constants";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-16 bg-[#04539C] shadow-xl hover:w-64 h-screen transition-all duration-300 ease-in-out pr-8 py-10">
      <span className="text-base font-bold text-zinc-50 text-center  transform scale-100 hover:scale-150 transition-transform duration-300 ease-in-out">
        Portfolio Hub
      </span>
      <div className="flex flex-col  mt-3">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center text-[#08355D] hover:text-[#08355D] hover:bg-white hover:rounded-md p-2"
          >
            <span className="bg-[#2286C9] text-white p-2 rounded-full">
              {icon}
            </span>
            <span className="text-white hover:text-[#0B4459]">{text}</span>
          </Link>
        ))}
      </div>
      <button className="flex gap-x-4 item-center  pt-8 mt-auto text-white hover:bg-white hover:text-[#0B4459] hover:rounded-md p-2">
        <span className=" text-white rounded-full">
          <LogOut className="bg-[#2286C9] text-white rounded-full " />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
