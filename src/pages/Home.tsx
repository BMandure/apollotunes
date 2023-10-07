import Artist from "../components/Cards/Artist";
import Genre from "../components/Cards/Genre";

import kpop from "../assets/genres/kpopGenre.jpg";
import lofi from "../assets/genres/lofiGenre.jpg";
import pop from "../assets/genres/popGenre.jpg";
import rock from "../assets/genres/rockGenre.jpg";
import PlaylistAlbum from "../components/Cards/PlaylistAlbum";
import artistImg from "../assets/genres/lofiGenre.jpg";

function Home() {
  return (
    <section className="p-5 rounded-md">
      <article id="genres-home-list" className="py-2">
        <div className="flex justify-between items-center">
          <h2 className="text-start text-xl pb-5">Genres</h2>
          <button
            className="rounded-3xl px-3 py-1 bg-customDark hover:bg-zinc-800"
            onClick={() => {
              alert("See more clicked");
            }}
          >
            <small>See more</small>
          </button>
        </div>
        <div className="flex justify-between flex-wrap gap-2">
          <Genre name="Lo-Fi" img={lofi} />
          <Genre name="K-Pop" img={kpop} />
          <Genre name="Pop" img={pop} />
          <Genre name="Rock" img={rock} />
        </div>
      </article>
      <article id="artist-home-list" className="py-2">
        <div className="flex justify-between items-center">
          <h2 className="text-start text-xl pb-5">Artists</h2>
          <button
            className="rounded-3xl px-3 py-1 bg-customDark hover:bg-zinc-800"
            onClick={() => {
              alert("See more clicked");
            }}
          >
            <small>See more</small>
          </button>
        </div>
        <div className="flex justify-between flex-wrap gap-2">
          {/*TODO: Bootstrap Columns or alternative */}
          <Artist name="Artist 1" img={artistImg} />
          <Artist name="Artist 2" img={artistImg} />
          <Artist name="Artist 3" img={artistImg} />
          <Artist name="Artist 4" img={artistImg} />
          <Artist name="Artist 5" img={artistImg} />
          <Artist name="Artist 6" img={artistImg} />
          <Artist name="Artist 7" img={artistImg} />
        </div>
      </article>
      <article id="artist-home-list" className="py-2">
        <div className="flex justify-between items-center">
          <h2 className="text-start text-xl pb-5">Playlists</h2>
          <button
            className="rounded-3xl px-3 py-1 bg-customDark hover:bg-zinc-800"
            onClick={() => {
              alert("See more clicked");
            }}
          >
            <small>See more</small>
          </button>
        </div>
        <div className="flex justify-between flex-wrap gap-2">
          {/*TODO: Bootstrap Columns or alternative */}
          <PlaylistAlbum name="Playlist 1" artist="Lofi Girl" img={artistImg} />
          <PlaylistAlbum name="Playlist 2" artist="Lofi Girl" img={artistImg} />
          <PlaylistAlbum name="Playlist 3" artist="Lofi Girl" img={artistImg} />
          <PlaylistAlbum name="Playlist 4" artist="Lofi Girl" img={artistImg} />
          <PlaylistAlbum name="Playlist 5" artist="Lofi Girl" img={artistImg} />
          <PlaylistAlbum name="Playlist 6" artist="Lofi Girl" img={artistImg} />
          <PlaylistAlbum name="Playlist 7" artist="Lofi Girl" img={artistImg} />
        </div>
      </article>
    </section>
  );
}

export default Home;
