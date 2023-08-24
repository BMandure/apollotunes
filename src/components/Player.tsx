import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

import sound from "../assets/sound.svg";
import songImg from "../assets/portraitAlbum_Playlist.jpg";

type Repeat = "y" | "n" | "one";
const repeatTypes: Repeat[] = ["y", "n", "one"];

function Player() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<Repeat>(repeatTypes[1]);
  const [shuffle, setShuffle] = useState<boolean>(false);

  const handlePlay = (): void => {
    setPlaying(!playing);
  };

  const handleShuffle = (): void => {
    setShuffle(!shuffle);
  };

  const handleRepeat = (): void => {
    switch (repeat) {
      // @ts-ignore
      case "y":
        setRepeat(repeatTypes[1]);
        console.log("to n");
        break;
      // @ts-ignore
      case "n":
        setRepeat(repeatTypes[2]);
        console.log("to one");
        break;
      // @ts-ignore
      case "one":
        setRepeat(repeatTypes[0]);
        console.log("to y");
        break;
    }
  };

  return (
    <div className="text-white flex w-full justify-between items-center basis-0">
      <div className="flex flex-grow gap-5 items-center basis-0">
        <img src={songImg} alt="Song_Img" className="h-[70px] w-[70px]" />
        <div className="text-left flex flex-col">
          <p className="pb-[0.2rem]">SongName</p>
          <Link to="#" className="hover:underline text-xs">
            Artists
          </Link>
        </div>
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
      </div>
      <div className="flex flex-col h-full items-center justify-between gap-2">
        <div className="flex gap-5 [&>button]:h-[22px] [&>button]:w-[22px] [&>button>svg]:h-full [&>button>svg]:w-full items-center">
          {shuffle ? (
            <Tooltip
              placement="top"
              title="Disable Shuffle"
              color="gray"
              arrow={false}
            >
              <button id="shuffle" onClick={handleShuffle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="rgba(1, 87, 6, 0.5)"
                  className="bi bi-shuffle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                  />
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                </svg>
              </button>
            </Tooltip>
          ) : (
            <Tooltip
              placement="top"
              title="Enable Shuffle"
              color="gray"
              arrow={false}
            >
              <button id="shuffle" onClick={handleShuffle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-shuffle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                  />
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                </svg>
              </button>
            </Tooltip>
          )}
          <Tooltip placement="top" title="Previous" color="gray" arrow={false}>
            <button id="previous">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-skip-start-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z" />
              </svg>
            </button>
          </Tooltip>

          {playing ? (
            <Tooltip placement="top" title="Pause" color="gray" arrow={false}>
              <button id="pause" className="!w-[40px] !h-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pause-circle"
                  viewBox="0 0 16 16"
                  onClick={handlePlay}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
              </button>
            </Tooltip>
          ) : (
            <Tooltip placement="top" title="Play" color="gray" arrow={false}>
              <button id="play" className="!w-[40px] !h-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-play-circle"
                  viewBox="0 0 16 16"
                  onClick={handlePlay}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </button>
            </Tooltip>
          )}

          <Tooltip placement="top" title="Next" color="gray" arrow={false}>
            <button id="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-skip-end-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
              </svg>
            </button>
          </Tooltip>
          {repeat === "one" ? (
            <Tooltip
              placement="top"
              title="Repeat All"
              color="gray"
              arrow={false}
            >
              <button id="repeat-one" onClick={handleRepeat}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="rgba(1, 87, 6, 0.5)"
                  className="bi bi-repeat-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4h6Zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z" />
                  <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0v-5Z" />
                </svg>
              </button>
            </Tooltip>
          ) : repeat === "y" ? (
            <Tooltip
              placement="top"
              title="Disable Repeat"
              color="gray"
              arrow={false}
            >
              <button id="repeat" onClick={handleRepeat}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="rgba(1, 87, 6, 0.5)"
                  className="bi bi-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
              </button>
            </Tooltip>
          ) : (
            <Tooltip
              placement="top"
              title="Enable Repeat One"
              color="gray"
              arrow={false}
            >
              <button id="no-repeat" onClick={handleRepeat}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
              </button>
            </Tooltip>
          )}
        </div>
        <div className="flex gap-2">
          <small>4:50</small>
          <input type="range" min="0" max="100" className="accent-main w-80" />
          <small>4:50</small>
        </div>
      </div>
      <div className="flex flex-grow justify-end basis-0 items-center gap-5">
        <Tooltip placement="top" title="Mute/Unmute" color="gray" arrow={false}>
          <button className="w-5 h-5">
            <img src={sound} alt="sound/mute_Icon" />
          </button>
        </Tooltip>
        <Tooltip placement="top" title="Volume: 20" color="gray" arrow={false}>
          <input type="range" min="0" max="100" className="accent-main" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Player;
