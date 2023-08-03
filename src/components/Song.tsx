import { Tooltip } from "antd";
import songTest from "../assets/add.svg";
import { Song as SongType } from "../types";

function Song(props: { position: number; infoSong: SongType }) {
  return (
    <tr className="flex gap-5 w-full mx-auto justify-around [&>th]:text-start h-[60px] items-center text-start hover:bg-zinc-800  rounded my-[1%]">
      <td className="flex gap-5">
        {props.position}
        <button className="w-full h-full">
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
      <td className="w-1/6 max-[1050px]:hidden">Date Added</td>
      <td className="w-1/6 !text-end flex gap-20 justify-end">
        <Tooltip
          placement="top"
          arrow={false}
          title="Add to favourites"
          color="gray"
        >
          <i className="bi bi-heart hover:cursor-pointer"></i>
        </Tooltip>
        {props.infoSong.duration}
      </td>
    </tr>
  );
}

export default Song;
