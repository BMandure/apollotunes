import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SongList from "./pages/SongList";
import Home from "./pages/Home";

function App() {
  return (
    <main className="gap-3 h-screen w-full p-3 pb-3 bg-black">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/artist/:id"
            element={<SongList id={crypto.randomUUID()} />}
          />
          <Route
            path="/playlist/:id"
            element={<SongList id={crypto.randomUUID()} />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
