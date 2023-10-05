import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SongList from "../components/SongList";

function Playlists() {
  const { state } = useLocation();
  return (
    <section className="flex flex-col h-full">
      <Header
        plName={state.genreName}
        artistName={state.artist}
        img={state.genreImg}
      />
      <div className="flex flex-col overflow-y-auto">
        <SongList />
      </div>
    </section>
  );
}

export default Playlists;
