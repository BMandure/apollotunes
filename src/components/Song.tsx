import imgProv from "../assets/genres/rockGenre.jpg";

import { useState } from "react";

type songInfo = {
  name: string;
  album: string;
  dateAdded: string;
};

function Song(props: { position: number; songInfo: songInfo }) {
  const [isHovering, setIsHovering] = useState<boolean>();
  const [isFavourite, setIsFavourite] = useState<boolean>();

  const handlerPlayBtn = () => {
    console.log("Play Pressed");
  };
  const handleFavouriteBtn = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <tr
      className="[&>td]:text-start hover:bg-zinc-800 m-0 rounded-full [&>td>span]:cursor-default [&>td]:cursor-default select-none"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <td className="!text-center">
        {!isHovering ? (
          <span>{props.position}</span>
        ) : (
          <i
            className="bi bi-play-fill hover:cursor-pointer p-2 text-[20px]"
            onClick={handlerPlayBtn}
          ></i>
        )}
      </td>
      <td className="flex items-center gap-5">
        <img src={imgProv} alt="" className="h-[50px] w-[50px] my-2" />
        <span>{props.songInfo.name}</span>
      </td>
      <td>{props.songInfo.album}</td>
      <td>{props.songInfo.dateAdded}</td>
      <td className="w-[150px]">
        <span>3:45</span>
        <button className="mx-5" onClick={handleFavouriteBtn}>
          <i
            className={`bi ${
              isFavourite ? "bi-heart-fill text-red-500" : "bi-heart text-white"
            } hover:cursor-pointer p-2 text-[15px]`}
            onClick={handlerPlayBtn}
          ></i>
        </button>
      </td>
    </tr>
  );
}

export default Song;
