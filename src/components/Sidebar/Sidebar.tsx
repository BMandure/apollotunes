import SidebarButton from "./SidebarButton";
import home from "../../assets/icons/home.svg";
import fav from "../../assets/icons/fav.svg";
import playlists from "../../assets/icons/playlists.svg";
import logout from "../../assets/icons/logout.svg";
import logo from "../../assets/logo.svg";

function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      <span className="flex justify-start px-5 gap-2 cursor-default">
        <img src={logo} alt="apollotunes_logo" className="w-[30px]" />
        <h1 className="text-xl py-5">APOLLOTUNES</h1>
      </span>
      <ul className="[&>li]:p-2 flex-grow flex flex-col">
        <li>
          <SidebarButton text="Home" imgSrc={home} link="/" redButton={false} />
        </li>
        <li>
          <SidebarButton
            text="Favourite Songs"
            imgSrc={fav}
            link="/favourites"
            redButton={false}
          />
        </li>
        <li className="flex-grow relative">
          <span className="w-full py-5 text-left px-3 rounded-xl hover:bg-zinc-700 flex items-center gap-2 h-[70px] pointer-events-none">
            <img src={playlists} alt="sidebar_icon" className="w-[30px]" />
            Playlists
          </span>
          <div className="flex flex-col overflow-auto h-[420px] px-1">
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
            <SidebarButton
              text="Playlist Name"
              imgSrc={logo}
              link="/favourites"
              redButton={false}
            />
          </div>
        </li>
        <li className="mt-auto">
          <SidebarButton
            text="Logout"
            imgSrc={logout}
            link="/login"
            redButton={true}
          />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
