import { Link } from "react-router-dom";
import { ArtistType, Playlist } from "../types";

function MusicCard(props: {
  infoArtist?: ArtistType;
  infoPlaylist?: Playlist;
  link: string;
}) {
  return (
    <Link
      to={props.link}
      className="min-w-[220px] h-auto flex justify-center items-center flex-col rounded-xl bg-zinc-900 hover:bg-zinc-800"
    >
      <img
        src={
          props.infoArtist ? props.infoArtist.image : props.infoPlaylist?.image
        }
        alt={props.infoArtist ? "cover_artist" : "cover_playlist"}
        className="w-full h-[220px] object-cover p-4"
      />
      <div className="text-start w-full p-4 pt-0 flex justify-between items-center">
        <div className="h-[3rem] w-full flex flex-col justify-center">
          <p className="font-bold text-lg">
            {props.infoArtist?.name} {props.infoArtist?.lastname}{" "}
            {props.infoPlaylist?.plName}
          </p>
          {props.infoPlaylist && <p>{props.infoPlaylist?.username}</p>}
        </div>
      </div>
    </Link>
  );
}

export default MusicCard;
