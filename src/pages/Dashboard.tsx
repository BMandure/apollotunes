import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex gap-3 !max-h-[89vh]">
        <Sidebar />
        <Outlet />
      </div>
      <Player />
    </>
  );
}

export default Dashboard;
