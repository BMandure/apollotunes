import { useState } from "react";
function PlayerPrevious(props: {
  songs: any;
  setCurrentSong: any;
  currentSong: any;
  currentDataSong: any;
  setCurrentDataSong: any;
  setIsPlaying: any;
}) {
  //TODO Change Any

  let currentIndex = props.songs.indexOf(props.currentSong);
  let length = props.songs.length;

  const [index, setIndex] = useState(currentIndex);

  const skipBack = (): void => {
    if (index === 0) {
      props.setCurrentSong(props.songs[length - 1]);
      props.setIsPlaying(true);
      setIndex(length - 1);
    } else {
      props.setCurrentSong(props.songs[index - 1]);
      props.setIsPlaying(true);
      setIndex(index - 1);
    }
  };
  return (
    <button onClick={skipBack} className="rounded-full hover:bg-zinc-700">
      <i className="bi bi-skip-start" style={{ fontSize: "25px" }}></i>
    </button>
  );
}

export default PlayerPrevious;
