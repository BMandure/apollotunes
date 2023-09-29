import { useState } from "react";
function PlayerNext(props: {
  songs: any;
  setCurrentSong: any;
  currentSong: any;
  currentDataSong: any;
  setCurrentDataSong: any;
  setIsPlaying: any;
}) {
  //TODO: Add different songs and start from the beginin when song is changed
  let currentIndex = props.songs.indexOf(props.currentSong);
  let length = props.songs.length;

  const [index, setIndex] = useState(currentIndex);

  const skipNext = (): void => {
    if (index === length - 1) {
      props.setCurrentSong(props.songs[0]);
      setIndex(0);
      props.setIsPlaying(true);
    } else {
      props.setCurrentSong(props.songs[index + 1]);
      props.setIsPlaying(true);
      setIndex(index + 1);
    }
  };
  return (
    <button onClick={skipNext} className="rounded-full hover:bg-zinc-700">
      <i className="bi bi-skip-end" style={{ fontSize: "25px" }}></i>
    </button>
  );
}

export default PlayerNext;
