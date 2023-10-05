import { InfoSong } from "../../types_interfaces";
function PlayerPrevious(props: {
  songs: InfoSong[];
  setCurrentSong: any;
  currentSong: any;
  currentDataSong: any;
  setCurrentDataSong: any;
  setIsPlaying: any;
  index: number;
  setIndex: any;
}) {
  //TODO Change Any

  const length = props.songs.length;

  const skipBack = () => {
    if (props.index === 0) {
      props.setCurrentSong(props.songs[length - 1].audio);
      props.setCurrentDataSong(props.songs[length - 1].info);
      props.setIndex(length - 1);
    } else {
      props.setCurrentSong(props.songs[props.index - 1].audio);
      props.setCurrentDataSong(props.songs[props.index - 1].info);
      props.setIndex(props.index - 1);
    }
  };
  return (
    <button onClick={skipBack} className="rounded-full hover:bg-zinc-700">
      <i className="bi bi-skip-start" style={{ fontSize: "25px" }}></i>
    </button>
  );
}

export default PlayerPrevious;
