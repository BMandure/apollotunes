import { Link } from "react-router-dom";
import slugify from "slugify";

function Artist(props: { name: string; img: string }) {
  const loweredName = props.name.toLowerCase();
  const slug = slugify(loweredName);

  return (
    <Link
      to={`/${slug}`}
      state={{
        artistName: props.name,
        img: props.img,
        isArtist: true,
      }}
      className="bg-customDark rounded-xl flex flex-col p-2 hover:bg-zinc-800 hover:cursor-pointer group w-[200px] h-[270px]"
    >
      <div className="relative h-[175px] flex justify-center items-center">
        <span className=" group-hover:bg-main group-hover:visible invisible absolute bottom-1 right-1 w-[50px] h-[50px] [&>img]:w-[50px] [&>img]:h-[50px] bg-main rounded-full hover:scale-105 pt-[2px] mx-auto">
          <i className="bi bi-play-fill text-[30px] text-black"></i>
        </span>
        <img
          src={props.img}
          alt="..."
          className="w-[175px] h-[175px] object-cover rounded-full"
        />
      </div>
      {/*TODO: Change Alt*/}
      <div className="flex flex-col flex-1 justify-center [&]:text-start pt-2">
        <span className="font-extrabold tracking-wide">{props.name}</span>
        <small>Artist</small>
      </div>
    </Link>
  );
}

export default Artist;
