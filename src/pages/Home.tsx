import MusicCard from "../components/MusicCard";
import { ArtistType, Playlist } from "../types";
import img from "../assets/library.svg";
import UserOptions from "../components/UserOptions";

function Home() {
  const artistTest: ArtistType = {
    name: "Artist",
    lastname: "Name",
    image: img,
    songs: [],
  };
  const playlistTest: Playlist = {
    plName: "Playlist Name",
    image: img,
    list: "pl",
    username: "Username",
    songs: [],
  };
  return (
    <main className="text-white text-start w-full max-h-[90vh] overflow-auto m-auto flex flex-col gap-5 py-2 px-4">
      <div className="flex w-full">
        <p className="text-3xl">
          WELCOME to <span className="text-main">Apollotune</span>!
        </p>
        <UserOptions />
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
