import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";

function App() {
  return (
    <main className="grid grid-cols-12 gap-2 h-screen w-full p-3 bg-black">
      <Sidebar />
      <SongList />
      <Player />
    </main>
  );
}

export default App;
