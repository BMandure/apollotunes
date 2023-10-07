import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SongList from "../components/SongList";

function Playlists() {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="flex flex-col h-full">
      <Header
        plName={state.name}
        artistName={state.artistName}
        img={state.img}
        isArtist={state.isArtist}
        qtySongs={13}
      />
      <div className="flex flex-col overflow-y-auto">
        <SongList />
      </div>
    </section>
  );
}

export default Playlists;
