import { Link } from "react-router-dom";
import { ArtistType } from "../types";

function ArtistCard(props: { link: string; infoArtist: ArtistType }) {
  return (
    <Link
      to={props.link}
      className="min-w-[220px] h-auto flex justify-center items-center flex-col rounded-xl bg-zinc-900 hover:bg-zinc-800"
    >
      <img
        src={props.infoArtist.image}
        alt={"cover_playlist"}
        className="w-full h-[220px] object-cover p-3 rounded-2xl"
      />
      <div className="text-start w-full p-4 pt-0 flex justify-between items-center">
        <div className="h-[3rem] w-full flex flex-col justify-center">
          <p className="font-bold text-lg">
            {props.infoArtist.name} {props.infoArtist.lastname}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ArtistCard;
