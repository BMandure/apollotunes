import { Link } from "react-router-dom";
import test from "../assets/add.svg";
import { Playlist } from "../types";
import UserOptions from "./UserOptions";
import backImg from "../assets/back.svg";

function Header(props: { infoPlaylist?: Playlist; genreName?: String }) {
  let listTitle: string = "";
  switch (props.infoPlaylist?.list) {
    case "ab":
      listTitle = "Album";
      break;
    case "pl":
      listTitle = "Playlist";
      break;
    case "sg":
      listTitle = "Single";
      break;
  }

  return (
    <article className="m-0 px-10 py-5 flex flex-col text-white bg-gradient-to-b from-mainTransparent from-10% to-zinc-900 to-100%">
      <div className="flex justify-around">
        <Link
          to={"/"}
          className="flex hover:bg-zinc-700 text-sm rounded-3xl bg-zinc-800 items-center gap-5 px-2 h-[40px]"
        >
          <img
            src={backImg}
            alt="go-back"
            className="w-[27px] h-[27px] m-auto"
          />
          <p>Back</p>
        </Link>
        <UserOptions />
      </div>
      <div className="flex h-[200px] max-[1080px]:flex-col max-[1080px]:items-center">
        <div className="bg-zinc-800 rounded-lg w-[200px] h-[200px] p-1">
          <img
            src={test}
            alt="album/playlist_image"
            className="border-2 rounded-lg"
          />
        </div>

        <div className="h-[200px] flex flex-col gap-2 text-start ps-5 justify-center">
          <p className="font-semibold text-lg">{listTitle}</p>

          <h2 className="text-[4rem] font-extrabold">
            {props.genreName
              ? `${props.genreName}`
              : `${props.infoPlaylist?.plName}`}
          </h2>
          {!props.genreName && (
            <span className="text-left flex gap-3 items-center">
              <img src={test} alt="user_profile_img" className="h-8" />
              <p>
                {`${props.infoPlaylist?.username}`} &#x2022;{" "}
                {`${props.infoPlaylist?.songs.length} songs`}
              </p>
            </span>
          )}
        </div>
      </div>
      <button className="w-[60px] h-[60px] hover:scale-110 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="full"
          height="full"
          fill="currentColor"
          className="bi bi-play-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
        </svg>
      </button>
    </article>
  );
}

export default Header;
