import { InfoSong } from "../../types_interfaces";
function PlayerNext(props: {
  songs: InfoSong[];
  setCurrentSong: any;
  currentSong: any;
  currentDataSong: any;
  setCurrentDataSong: any;
  setIsPlaying: any;
  index: number;
  setIndex: any;
}) {
  //TODO: Add different songs and start from the beginin when song is changed

  const length = props.songs.length;

  const skipNext = () => {
    if (props.index === length - 1) {
      props.setCurrentSong(props.songs[0].audio);
      props.setCurrentDataSong(props.songs[0].info);
      props.setIndex(0);
    } else {
      props.setCurrentSong(props.songs[props.index + 1].audio);
      props.setCurrentDataSong(props.songs[props.index + 1].info);
      props.setIndex(props.index + 1);
    }
  };

  return (
    <button onClick={skipNext} className="rounded-full hover:bg-zinc-700">
      <i className="bi bi-skip-end" style={{ fontSize: "25px" }}></i>
    </button>
  );
}

export default PlayerNext;
