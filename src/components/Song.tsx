import imgProv from "../assets/genres/rockGenre.jpg";

import { useState } from "react";

function Song() {
  const [isHovering, setIsHovering] = useState<boolean>();

  const handlerPlayBtn = () => {
    console.log("Play Pressed");
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
          1
        ) : (
          <i
            className="bi bi-play-fill hover:cursor-pointer p-2"
            style={{ fontSize: "20px" }}
            onClick={handlerPlayBtn}
          ></i>
        )}
      </td>
      <td className="flex items-center gap-5">
        <img src={imgProv} alt="" className="h-[50px] w-[50px] my-2" />
        <span>Song Name</span>
      </td>
      <td>Album Name</td>
      <td>03/10/2023</td>
      <td className="w-[150px]">
        3:45 <button className="mx-5">❤️</button>
      </td>
    </tr>
  );
}

export default Song;
