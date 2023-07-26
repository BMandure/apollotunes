import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";

function App() {
  return (
    <main className="gap-3 h-screen w-full p-3 pb-0 bg-black">
      <div className="flex gap-3 !max-h-[89vh]">
        <Sidebar />
        <SongList />
      </div>
      <Player />
    </main>
  );
}

export default App;
