import { useEffect, useRef, useState } from "react";
import Player from "../components/Player/Player";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Dashboard.css";
import { songs as songImp } from "../db";
import { Outlet } from "react-router-dom";

function Dashboard() {
  //TODO: Change importedSongs to audios fetched

  //---------TEST---------

  const importedSong1: any = new Audio(songImp[0].route);
  const importedSong2: any = new Audio(songImp[1].route);
  const importedSong3: any = new Audio(songImp[2].route);
  const songData = [...songImp];
  const stateArray: HTMLAudioElement[] = [];
  stateArray.push(importedSong1);
  stateArray.push(importedSong2);
  stateArray.push(importedSong3);

  //----------------------

  const [songs, setSongs] = useState(stateArray);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDataSong, setCurrentDataSong] = useState(songData[0]);
  const [currentSong, setCurrentSong] = useState(importedSong1);

  const audioElem = useRef<HTMLAudioElement>(null);
  useEffect((): void => {
    isPlaying ? audioElem.current?.play() : audioElem.current?.pause();
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current?.duration;
    const currentTime = audioElem.current?.currentTime;

    if (currentTime && duration) {
      setCurrentSong({
        ...currentSong,
        progress: (currentTime / duration) * 100,
        length: duration,
      });
    }
  };
  return (
    <div className="dashboard-container-wrapper">
      <div className="dashboard-container-one bg-zinc-900 rounded-xl">
        <Sidebar />
      </div>
      <div className="dashboard-container-two bg-zinc-900 rounded-xl p-3">
        <Outlet />
      </div>
      <div className="dashboard-container-three flex items-center">
        <audio
          src={currentSong.currentSrc}
          ref={audioElem}
          onTimeUpdate={onPlaying}
          autoPlay
        />
        <Player
          songs={songs}
          setSongs={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioElem={audioElem.current}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          setCurrentDataSong={setCurrentDataSong}
          currentDataSong={currentDataSong}
        />
      </div>
    </div>
  );
}

export default Dashboard;
