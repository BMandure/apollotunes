import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="h-full flex flex-col justify-around">
      <div className="flex gap-3 h-[85vh]">
        <Sidebar />
        <Outlet />
      </div>
      <Player />
    </div>
  );
}

export default Dashboard;
