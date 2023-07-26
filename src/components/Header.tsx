import play from "../assets/play.svg";
import test from "../assets/add.svg";

function Header() {
  return (
    <article className="m-0 px-[5rem] py-5 flex flex-col text-white">
      <div className="h-[40px] min-w-[40px] mb-2 ms-auto flex">
        <button className="flex hover:bg-zinc-700 text-sm rounded-3xl bg-zinc-800 ps-3 pe-1 py-1 items-center gap-5">
          <p>Username</p>
          <img className="w-[30px] h-[30px]" src={test} alt="search_icon" />
        </button>
      </div>
      <div className="flex">
        <div className="bg-[#8cd3bb] rounded-lg w-[250px] h-[250px]">
          <img src={test} alt="album/artist_image" />
        </div>
        <div className="flex flex-col justify-between items-start p-5 [&]:font-semibold text-white">
          <small className="text-[1rem]">Category test</small>
          <h2 className="text-[5rem] leading-tight">Test list name</h2>

          <button
            id="play"
            className="w-[70px] h-[70px] border-transparent hover:border-2 hover:border-white rounded-[50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play-circle w-full h-full"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          </button>
        </div>
      </div>
      <span className="text-left pt-4 flex gap-3 items-center">
        <img src={test} alt="" className="h-8" />
        <p>Username / Artist &#x2022; 935 songs</p>
      </span>
    </article>
  );
}

export default Header;
