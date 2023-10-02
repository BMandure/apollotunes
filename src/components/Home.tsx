import Artist from "./Cards/Artist";
import Genre from "./Cards/Genre";

import kpop from "../assets/genres/kpopGenre.jpg";
import lofi from "../assets/genres/lofiGenre.jpg";
import pop from "../assets/genres/popGenre.jpg";
import rock from "../assets/genres/rockGenre.jpg";
import PlaylistAlbum from "./Cards/PlaylistAlbum";

function Home() {
  return (
    <section className="px-2">
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
          <Artist />
          <Artist />
          <Artist />
          <Artist />
          <Artist />
          <Artist />
          <Artist />
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
          <PlaylistAlbum />
          <PlaylistAlbum />
          <PlaylistAlbum />
          <PlaylistAlbum />
          <PlaylistAlbum />
          <PlaylistAlbum />
          <PlaylistAlbum />
        </div>
      </article>
    </section>
  );
}

export default Home;
