import { Tooltip } from "antd";
import songTest from "../assets/add.svg";
import { Song as SongType } from "../types";
import { useState } from "react";

function Song(props: { position: number; infoSong: SongType }) {
  const [favourite, setFavourite] = useState(false);
  const date = new Date();

  const handleSwitchFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <tr className="flex gap-5 w-full mx-auto justify-around [&>th]:text-start h-[60px] items-center my-[10px] text-start hover:bg-zinc-800 [&>td>button]:hover:visible [&>td>Tooltip>button]:hover:visible rounded">
      <td className="flex gap-5 w-[25px]">
        {props.position}
        <button className="invisible">
          <i className="bi bi-play-circle-fill"></i>
        </button>
      </td>
      <td className="w-[30%]">
        <div className="flex items-center gap-5">
          <img src={songTest} alt="..." className="w-[50px] h-[50px] bg-main" />
          <span className="truncate">{props.infoSong.songName}</span>
        </div>
      </td>
      <td className="w-1/6 truncate max-[1050px]:hidden">
        {props.infoSong.playlist.plName}
      </td>
      <td className="w-1/6 max-[1050px]:hidden">{date.toLocaleDateString()}</td>
      <td className="w-1/6 !text-end flex gap-20 justify-end">
        <Tooltip
          placement="top"
          arrow={false}
          title="Add to favourites"
          color="gray"
        >
          <button onClick={() => handleSwitchFavourite()} className="invisible">
            <i className={`bi ${favourite ? "bi-heart-fill" : "bi-heart"}`}></i>
          </button>
        </Tooltip>
        {props.infoSong.duration}
      </td>
    </tr>
  );
}

export default Song;
