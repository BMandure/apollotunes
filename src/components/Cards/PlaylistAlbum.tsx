import { Link } from "react-router-dom";
import slugify from "slugify";

function PlaylistAlbum(props: { name: string; artist: string; img: string }) {
  const loweredName = props.name.toLowerCase();
  const slug = slugify(loweredName);
  return (
    <Link
      to={slug}
      state={{
        name: props.name,
        img: props.img,
        isArtist: false,
        artistName: props.artist,
      }}
      className="bg-customDark rounded-xl flex flex-col p-2 hover:bg-zinc-800 hover:cursor-pointer group w-[200px] h-[270px]"
    >
      <div className="relative">
        <span className=" group-hover:bg-main group-hover:visible invisible absolute bottom-2 right-2 w-[50px] h-[50px] [&>img]:w-[50px] [&>img]:h-[50px] bg-main rounded-full hover:scale-105 pt-[2px] mx-auto">
          <i className="bi bi-play-fill text-[30px] text-black"></i>
        </span>
        <img
          src={props.img}
          alt="Thumbnail of... "
          className="w-full h-[175px] object-cover rounded-2xl mx-auto"
        />
      </div>
      {/*TODO: Change Alt*/}
      <div className="flex flex-col flex-1 justify-center [&]:text-start pt-2">
        <span className="font-extrabold tracking-wide">{props.name}</span>
        <small>By {props.artist}</small>
      </div>
    </Link>
  );
}

export default PlaylistAlbum;
