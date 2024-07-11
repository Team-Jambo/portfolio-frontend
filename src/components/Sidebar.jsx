import { Link } from "react-router-dom";
import { K } from "../constants";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] bg-[#0B4459] shadow-xl flex flex-col px-4 py-3 ">
      <span className="text-2xl font-bold text-zinc-50 text-center">
        iPortfolio
      </span>
      <div className="flex flex-col  mt-3">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center hover:text-[#0A524F] hover:bg-white hover:rounded-md p-2"
          >
            <span className="bg-[#487180] text-white p-2 rounded-full">
              {icon}
            </span>
            <span className="text-white hover:text-[#0A524F]">{text}</span>
          </Link>
        ))}
      </div>
      <button className="flex gap-x-4 item-center mt-auto hover:bg-[#0A524F] hover:text-[#0A524F] hover:rounded-md p-2">
        <span className=" text-white p-2  rounded-full">
          <LogOut className="" />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
