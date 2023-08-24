import MusicCard from "../components/MusicCard";
import { ArtistType, Playlist } from "../types";
import artistImg from "../assets/portraitArtist.jpg";
import albumPlaylistImg from "../assets/portraitAlbum_Playlist.jpg";
import UserOptions from "../components/UserOptions";
import Genre from "../components/Genre";

import kpop from "../assets/genres/kpopGenre.jpg";
import lofi from "../assets/genres/lofiGenre.jpg";
import pop from "../assets/genres/popGenre.jpg";
import rock from "../assets/genres/rockGenre.jpg";

function Home() {
  const artistTest: ArtistType = {
    name: "Artist",
    lastname: "Name",
    image: artistImg,
    songs: [],
  };
  const playlistTest: Playlist = {
    plName: "Playlist Name",
    image: albumPlaylistImg,
    list: "pl",
    username: "Username",
    songs: [],
  };
  return (
    <main className="text-white text-start w-full max-h-[85vh] overflow-auto m-auto flex flex-col gap-5 py-2 px-4">
      <div className="flex w-full">
        <p className="text-3xl">
          WELCOME to <span className="text-main">Apollotune</span>!
        </p>
        <UserOptions />
      </div>
      <p className="text-xl">Search by Genres:</p>
      <div className="w-full flex justify-between">
        <Genre name="LoFi" img={lofi} />
        <Genre name="Pop" img={pop} />
        <Genre name="Rock" img={rock} />
        <Genre name="K-Pop" img={kpop} />
      </div>
      <div id="my-playlists">
        <p className="text-xl">My Playlists:</p>
        <section className="flex gap-5 overflow-auto py-5">
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
        </section>
      </div>
      <div id="artist-list">
        <p className="text-xl">Artists:</p>
        <section className="flex gap-5 overflow-auto py-5">
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
          <MusicCard infoArtist={artistTest} />
        </section>
      </div>{" "}
      <div id="playlists">
        <p className="text-xl">Playlists:</p>
        <section className="flex gap-5 overflow-auto py-5">
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
          <MusicCard infoPlaylist={playlistTest} />
        </section>
      </div>
    </main>
  );
}

export default Home;
