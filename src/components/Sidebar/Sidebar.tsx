import SidebarButton from "./SidebarButton";
import home from "../../assets/icons/home.svg";
import fav from "../../assets/icons/fav.svg";
import playlists from "../../assets/icons/playlists.svg";
import logout from "../../assets/icons/logout.svg";
import logo from "../../assets/logo.svg";

function Sidebar() {
  const homeClick = () => {
    console.log("Goto Home");
  };
  const plClick = () => {
    console.log("Goto Pl");
  };
  const fsClick = () => {
    console.log("Goto Fs");
  };
  const logoutClick = () => {
    console.log("Goto Login Page");
  };
  return (
    <div className="h-full flex flex-col">
      <span className="flex justify-start px-5 gap-2 cursor-default">
        <img src={logo} alt="apollotunes_logo" className="w-[30px]" />
        <h1 className="text-xl py-5">APOLLOTUNES</h1>
      </span>
      <ul className="[&>li]:p-2 flex-grow">
        <li>
          <SidebarButton
            text="Home"
            handleOnClick={homeClick}
            imgSrc={home}
            link="/"
          />
        </li>
        <li>
          <SidebarButton
            text="Favourite Songs"
            handleOnClick={fsClick}
            imgSrc={fav}
            link="/favourites"
          />
        </li>
        <li>
          <SidebarButton
            text="Playlists"
            handleOnClick={plClick}
            imgSrc={playlists}
            link="/playlists"
          />
        </li>
        <li className="absolute bottom-0 w-full">
          <SidebarButton
            text="Logout"
            handleOnClick={logoutClick}
            imgSrc={logout}
            link="/login"
          />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
