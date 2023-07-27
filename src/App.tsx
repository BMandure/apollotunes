import { Route, Routes } from "react-router-dom";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import SongList from "./pages/SongList";
import Login from "./pages/Login";

function App() {
  return (
    <main className="gap-3 h-screen w-full p-3 pb-3 bg-black">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/:username"
          element={
            <>
              <div className="flex gap-3 !max-h-[89vh]">
                <Sidebar />
                <SongList id={crypto.randomUUID()} />
              </div>
              <Player />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
