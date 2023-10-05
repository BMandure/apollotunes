import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Favourites from "./pages/Favourites";
import Playlists from "./pages/Playlists";
import Home from "./pages/Home";

function App() {
  return (
    <main className="gap-3 h-screen w-full p-3 pb-3 bg-black">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="/:genreSlug" element={<Playlists />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
