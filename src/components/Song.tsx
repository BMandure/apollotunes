import { Tooltip } from "antd";
import songTest from "../assets/add.svg";

function Song() {
  return (
    <div className="h-[60px] hover:bg-zinc-800 [&>td]:cursor-pointer flex justify-between rounded items-center text-start">
      <span className="w-[50px] text-center">5</span>
      <div className="flex gap-3 items-center h-full w-1/4 ps-5">
        <img className="my-2 w-[50px] h-[50px]" src={songTest} alt="song_img" />
        <p>Song Title</p>
      </div>
      <span className="w-1/4 inline max-[1275px]:hidden">Album Name</span>
      <span className="w-1/4 inline max-[1275px]:hidden">Today</span>
      <span className="w-1/4 text-end pe-4 flex gap-4 justify-end">
        <Tooltip
          placement="top"
          title="Add to your favourites"
          color="gray"
          arrow={false}
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
        </Tooltip>
        2:50
      </span>
    </div>
  );
}

export default Song;
