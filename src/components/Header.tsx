import test from "../assets/add.svg";
import { Playlist } from "../types";

function Header(props: { info: Playlist }) {
  let listTitle: string = "";
  switch (props.info.list) {
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
    <article className="m-0 px-10 py-5 flex flex-col text-white bg-gradient-to-b from-[#64bd9f] from-40% to-zinc-900 to-100%">
      <div className="h-[40px] min-w-[40px] mb-2 ms-auto flex">
        <button className="flex hover:bg-zinc-700 text-sm rounded-3xl bg-zinc-800 ps-3 pe-1 py-1 items-center gap-5">
          <p>Username</p>
          <img className="w-[30px] h-[30px]" src={test} alt="search_icon" />
        </button>
      </div>

      <div className="flex h-[200px] max-[1080px]:flex-col max-[1080px]:items-center">
        <div className="bg-zinc-800 rounded-lg w-[200px] h-[200px] p-1">
          <img
            src={test}
            alt="album/artist_image"
            className="border-2 rounded-lg"
          />
        </div>

        <div className="h-[200px] flex flex-col gap-2 text-start ps-5 justify-center">
          <p className="font-semibold text-lg">{listTitle}</p>
          <h2 className="text-[4rem] font-extrabold">{`${props.info.plName}`}</h2>
          <span className="text-left flex gap-3 items-center">
            <img src={test} alt="user_profile_img" className="h-8" />
            <p>
              {`${props.info.username}`} &#x2022;{" "}
              {`${props.info.songs.length} songs`}
            </p>
          </span>
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
