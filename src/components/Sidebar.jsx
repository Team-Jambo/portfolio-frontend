import { Link } from "react-router-dom";
import { K } from "../constants";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-[250px] bg-[#04539C] shadow-xl flex flex-col px-8 py-10">
      <span className="text-2xl font-bold text-zinc-50 text-center">
        Portfolio Hub
      </span>
      <div className="flex flex-col  mt-3">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center hover:text-[#08355D] hover:bg-white hover:rounded-md p-2"
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
