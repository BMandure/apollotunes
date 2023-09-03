import { Link } from "react-router-dom";
import test from "../assets/arrow-right.svg";

function LibraryComp(props: {
  link: string;
  info: {
    name: string;
    artist: string;
  };
}) {
  return (
    <Link
      to={props.link}
      className="flex p-2 justify-between items-center min-h-[70px] hover:bg-zinc-800 rounded [&>div>img]:hover:bg-zinc-700 max-[920px]:w-[65px] !mx-auto !ms-2"
    >
      <div className="flex items-center justify-start text-start gap-5">
        <img
          className="w-[50px] bg-zinc-800 h-[50px] rounded"
          src={test}
          alt="song_img"
        />
        <h3 className="uppercase max-[920px]:hidden">{props.info.name}</h3>
      </div>
      <p className="text-sm text-right max-[920px]:hidden">
        {props.info.artist}
      </p>
    </Link>
  );
}

export default LibraryComp;
