import MusicCard from "../components/MusicCard";
import { ArtistType, Playlist } from "../types";

function Home() {
  const artistTest: ArtistType = {
    name: "Artist",
    lastname: "Name",
    image: "",
    songs: [],
  };
  const playlistTest: Playlist = {
    plName: "Playlist Name",
    image: "",
    list: "pl",
    username: "Username",
    songs: [],
  };
  return (
    <main className="text-white text-start w-full max-h-[90vh] overflow-auto m-auto flex flex-col gap-5">
      <p className="text-3xl">
        WELCOME to <span className="text-main">Apollotune</span>!
      </p>
      <div id="my-playlists">
        <p className="text-xl">My Playlists:</p>
        <section className="flex gap-10 overflow-auto py-5">
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
        <section className="flex gap-10 overflow-auto py-5">
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
        <section className="flex gap-10 overflow-auto py-5">
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
