import logo from "../assets/sound.svg";
import { ArtistType, Playlist } from "../types";

function MusicCard(props: {
  infoArtist?: ArtistType;
  infoPlaylist?: Playlist;
}) {
  return (
    <article className="min-w-[220px] min-h-[220px] flex justify-center items-center flex-col rounded-xl bg-zinc-900 hover:cursor-pointer hover:bg-zinc-800">
      <div className="w-full h-[220px] p-4 relative">
        <img
          src={
            props.infoArtist
              ? props.infoArtist.image
              : props.infoPlaylist?.image
          }
          alt={props.infoArtist ? "cover_artist" : "cover_playlist"}
        />
      </div>
      <div className="text-start w-full p-4 flex justify-between items-center">
        <div className="h-[3rem] w-full flex flex-col justify-center">
          <p className="font-bold text-lg">
            {props.infoArtist?.name} {props.infoArtist?.lastname}{" "}
            {props.infoPlaylist?.plName}
          </p>
          {props.infoPlaylist && <p>{props.infoPlaylist?.username}</p>}
        </div>
      </div>
    </article>
  );
}

export default MusicCard;
