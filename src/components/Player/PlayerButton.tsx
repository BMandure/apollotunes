import { useEffect } from "react";

function PlayerButton(props: {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioElem: HTMLAudioElement | null;
}) {
  useEffect(() => {
    props.audioElem && (props.audioElem.volume = 0.5);
  }, [props.audioElem]);

  const PlayPause = () => {
    props.setIsPlaying(!props.isPlaying);
  };

  return (
    <button onClick={PlayPause} className="rounded-full hover:bg-zinc-700">
      {props.isPlaying ? (
        <i className="bi bi-pause" style={{ fontSize: "30px" }}></i>
      ) : (
        <i className="bi bi-play" style={{ fontSize: "30px" }}></i>
      )}
    </button>
  );
}

export default PlayerButton;
