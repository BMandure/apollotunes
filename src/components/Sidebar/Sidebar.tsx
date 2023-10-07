import SidebarButton from "./SidebarButton";
import home from "../../assets/icons/home.svg";
import fav from "../../assets/icons/fav.svg";
import logout from "../../assets/icons/logout.svg";
import plImg from "../../assets/genres/kpopGenre.jpg";
import logo from "../../assets/logo.svg";

function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      <ul className="[&>li]:p-2 flex flex-col h-full">
        <li className="flex justify-start !ps-5 gap-2 cursor-default h-[8vh] items-center">
          <img src={logo} alt="apollotunes_logo" className="w-[30px]" />
          <h1 className="text-xl py-5">APOLLOTUNES</h1>
        </li>
        <li>
          <SidebarButton
            text="Home"
            imgSrc={home}
            link="/"
            redButton={false}
            bigIcons={false}
          />
        </li>
        <li>
          <SidebarButton
            text="Favourite Songs"
            imgSrc={fav}
            link="/favourites"
            redButton={false}
            bigIcons={false}
          />
        </li>
        <li className="flex-grow overflow-y-auto my-3 me-2">
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
          <SidebarButton
            text="Playlist Name"
            imgSrc={plImg}
            link="/favourites"
            redButton={false}
            bigIcons={true}
          />
        </li>
        <li>
          <SidebarButton
            text="Logout"
            imgSrc={logout}
            link="/login"
            redButton={true}
            bigIcons={false}
          />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

/*
      <span className="flex justify-start px-5 gap-2 cursor-default">
        <img src={logo} alt="apollotunes_logo" className="w-[30px]" />
        <h1 className="text-xl py-5">APOLLOTUNES</h1>
      </span>
      <ul className="[&>li]:p-2 flex flex-col">
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
      </ul>
      <span className="w-[95%] h-[2px] mx-auto bg-zinc-800" />
      <ul className="[&>li]:p-2 flex flex-col flex-1">
        <li className="flex-grow relative !py-2 h-[53vh] overflow-y-auto">
          <div className="flex flex-col px-1">
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
        <span className="w-[95%] h-[2px] mx-auto bg-zinc-800" />
        <li>
          <SidebarButton
            text="Logout"
            imgSrc={logout}
            link="/login"
            redButton={true}
          />
        </li>
      </ul> */
