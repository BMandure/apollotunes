import ArtistCard from "../components/ArtistCard";
import { ArtistType, Playlist } from "../types";

import artistImg from "../assets/portraitArtist.jpg";
import albumPlaylistImg from "../assets/portraitAlbum_Playlist.jpg";
import UserOptions from "../components/UserOptions";
import Genre from "../components/Genre";
import SectionHeader from "../components/SectionHeader";

import kpop from "../assets/genres/kpopGenre.jpg";
import lofi from "../assets/genres/lofiGenre.jpg";
import pop from "../assets/genres/popGenre.jpg";
import rock from "../assets/genres/rockGenre.jpg";
import MusicCard from "../components/MusicCard";

function Home() {
  {
    /*TODO: Add message "Good Morning", "Afternoon" or "Night"*/
  }
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
          WELCOME, <span className="text-main">GOOD MORNING</span>!
        </p>
        <UserOptions />
      </div>
      <SectionHeader link="..." title="Genres" />
      <div className="w-full justify-start flex flex-wrap gap-5">
        <Genre name="Lo-Fi" img={lofi} />
        <Genre name="Pop" img={pop} />
        <Genre name="Rock" img={rock} />
        <Genre name="K-Pop" img={kpop} />
      </div>
      <div id="artist-list">
        <SectionHeader link="..." title="Artists" />
        <section className="flex gap-5 overflow-auto py-5">
          {/*TODO: create component: "ArtistCard"*/}
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
          <ArtistCard infoArtist={artistTest} link="/artist/:id" />
        </section>
      </div>{" "}
      <div id="playlists">
        <SectionHeader link="..." title="Playlists" />
        <section className="flex gap-5 overflow-auto py-5">
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
          <MusicCard infoPlaylist={playlistTest} link="/playlist/:id" />
        </section>
      </div>
    </main>
  );
}

export default Home;
