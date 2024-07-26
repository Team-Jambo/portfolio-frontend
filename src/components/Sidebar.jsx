import { LogOut } from "lucide-react";
import { K } from "../constants";
import { NavLink, useNavigate } from "react-router-dom";
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occured");
    }
  };
  return (
    <div className="flex flex-col max-h-full bg-primary shadow-xl hover:w-64 h-screen transition-all duration-300 ease-in-out pr-8 py-10">
      <span className="text-base font-bold text-zinc-50 text-center  transform scale-100 hover:scale-150 transition-transform duration-300 ease-in-out">
        Jamboree Hub
      </span>
      <div className="flex flex-col  mt-3">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-4 items-center hover:bg-white  hover:text-[#08355D] hover:rounded-md p-2 group ${
                isActive ? "bg-[#2286C9] text-white" : ""
              }`
            }
            end
          >
            <span className="bg-[#2286C9] text-white p-2 rounded-full">
              {icon}
            </span>
            <span className="text-white group-hover:text-[#0B4459]">
              {text}
            </span>
          </NavLink>
        ))}
      </div>
      <button
        className="flex gap-x-4 items-center mt-auto hover:bg-pink hover:text-white hover:rounded-md p-2"
        onClick={logout}
      >
        <span className="bg-[#2286C9] text-white p-2 rounded-full">
          <LogOut />
        </span>
        <span className="text-white group-hover:text-[#0B4459">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
