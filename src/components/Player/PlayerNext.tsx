import { InfoSong } from "../../types_interfaces";
function PlayerNext(props: {
  songs: InfoSong[];
  setCurrentSong: any;
  currentSong: any;
  currentDataSong: any;
  setCurrentDataSong: any;
  setIsPlaying: any;
  skipNext: () => void;
}) {
  //TODO: Add different songs and start from the beginin when song is changed

  return (
    <button onClick={props.skipNext} className="rounded-full hover:bg-zinc-700">
      <i className="bi bi-skip-end" style={{ fontSize: "25px" }}></i>
    </button>
  );
}

export default PlayerNext;
