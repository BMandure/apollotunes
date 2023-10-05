import { useEffect, useRef, useState } from "react";
import Player from "../components/Player/Player";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Dashboard.css";
import { songs as songImp } from "../db";
import { Outlet } from "react-router-dom";
import { InfoSong } from "../types_interfaces";

function Dashboard() {
  //TODO: Change importedSongs to audios and songData to data fetched

  //---------TEST---------

  const importedSong1: any = new Audio(songImp[0].route);
  const importedSong2: any = new Audio(songImp[1].route);
  const importedSong3: any = new Audio(songImp[2].route);
  const songData1 = songImp[0];
  const songData2 = songImp[1];
  const songData3 = songImp[2];
  const stateArray: InfoSong[] = [];
  stateArray.push({ audio: importedSong1, info: songData1 });
  stateArray.push({ audio: importedSong2, info: songData2 });
  stateArray.push({ audio: importedSong3, info: songData3 });

  //----------------------

  const [songs, setSongs] = useState(stateArray);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDataSong, setCurrentDataSong] = useState(songData1);
  const [currentSong, setCurrentSong] = useState(importedSong1);
  const [index, setIndex] = useState(0);

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
  const skipNext = () => {
    if (index === songs.length - 1) {
      setCurrentSong(songs[0].audio);
      setCurrentDataSong(songs[0].info);
      setIndex(0);
    } else {
      setCurrentSong(songs[index + 1].audio);
      setCurrentDataSong(songs[index + 1].info);
      setIndex(index + 1);
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
          onEnded={skipNext}
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
          skipNext={skipNext}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}

export default Dashboard;
