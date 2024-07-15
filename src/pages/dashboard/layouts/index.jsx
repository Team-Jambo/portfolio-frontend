import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 overflow-y-auto h-screen pl-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
