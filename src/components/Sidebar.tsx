import { Link } from "react-router-dom";
import { Tooltip } from "antd";

import homeImg from "../assets/home.svg";
import libraryImg from "../assets/library.svg";
import addImg from "../assets/add.svg";
import logo from "../assets/logo.svg";
import LibraryList from "./LibraryList";
import SearchBar from "./SearchBar";

function Sidebar() {
  const handleSearch = () => {};

  return (
    <section className="flex flex-col gap-3 min-w-[70px] max-[920px]:w-[100px] [&>article]:bg-zinc-900 [&>article]:gap-1 [&>article]:rounded-lg">
      <article className="flex flex-col max-h-[30%]">
        <ul className="text-start [&>li]:flex [&>li]:gap-2 [&>li]:text-white [&>li]:text-xl gap-5 [&>li]:p-3">
          <li className="pointer-events-none max-[920px]:flex max-[920px]:justify-center">
            <img src={logo} alt="" className="w-[30px] h-[30px]" />
            <h1 className="text-2xl max-[920px]:hidden">APOLLOTUNE</h1>
          </li>
          <li>
            <Link
              to="#"
              className="flex gap-2 w-full max-[920px]:justify-center"
            >
              <img
                src={homeImg}
                alt="home_icon"
                className="w-[30px] h-[30px]"
              />
              <span className="max-[920px]:hidden">Home</span>
            </Link>
          </li>
          <li>
            <SearchBar handleSearch={handleSearch} />
          </li>
        </ul>
      </article>

      <article className="flex flex-col flex-grow h-full">
        <ul className="text-start [&>li]:text-white [&>li]:text-xl gap-5 [&>li]:p-3">
          <li className="flex justify-between [&>div]:flex max-[920px]:justify-center">
            <div className="flex gap-2 max-[920px]:justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={libraryImg}
                alt="search_icon"
              />
              <span className="max-[920px]:hidden">Library</span>
            </div>
            <div className="gap-4 max-[920px]:!hidden max-[920px]:w-0">
              <Tooltip
                placement="top"
                title="Create playlist or folder"
                color="gray"
                arrow={false}
              >
                <button>
                  <img
                    className="w-[30px] h-[30px]"
                    src={addImg}
                    alt="search_icon"
                  />
                </button>
              </Tooltip>
            </div>
          </li>
          <li className="max-[920px]:hidden [&>button]:text-sm [&>button]:rounded-2xl [&>button]:bg-zinc-800 [&>button]:px-5 [&>button]:py-1 flex gap-2">
            <button className="hover:bg-zinc-700">Playlists</button>
            <button className="hover:bg-zinc-700">Artists</button>
            <button className="hover:bg-zinc-700">Albums</button>
          </li>
        </ul>
        <LibraryList />
      </article>
    </section>
  );
}

export default Sidebar;
