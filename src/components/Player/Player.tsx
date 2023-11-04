import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import "./Player.css";

import PlayerButton from "./PlayerButton";
import PlayerNext from "./PlayerNext";
import PlayerPrevious from "./PlayerPrevious";
import testImg from "../../assets/genres/lofiGenre.jpg";
import { InfoSong } from "../../types_interfaces";
import VolumeBar from "./VolumeBar";

function Player(props: {
  songs: InfoSong[];
  setSongs: React.Dispatch<React.SetStateAction<InfoSong[]>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioElem: HTMLAudioElement | null;
  currentSong: any;
  setCurrentSong: any;
  currentDataSong: any;
  setCurrentDataSong: any;
  skipNext: () => void;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  //TODO: Change Any type
}) {
  const clickRef = useRef<HTMLProgressElement>(null);
  const clickVolumeRef = useRef<HTMLProgressElement>(null);
  const [volumeIcon, setVolumeIcon] = useState("bi-volume-up");
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (!props.audioElem) return;
    if (props.audioElem.muted || props.audioElem.volume === 0) {
      setVolumeIcon("bi-volume-mute");
    } else if (!props.audioElem.muted && props.audioElem.volume >= 0.5) {
      setVolumeIcon("bi-volume-up");
    } else {
      setVolumeIcon("bi-volume-down");
    }
  }, [props.audioElem?.muted || props.audioElem?.volume]);

  const checkWidth = (event: React.MouseEvent<HTMLElement>) => {
    let width = clickRef.current?.clientWidth;
    const offset = event.nativeEvent.offsetX;
    if (width && props.audioElem) {
      const totalProgress = (offset / width) * 100;
      props.audioElem.currentTime =
        (totalProgress / 100) * props.currentSong.length;
    }
  };

  const checkVolumeWidth = (event: React.MouseEvent<HTMLElement>) => {
    let width = clickVolumeRef.current?.clientWidth;
    const offset = event.nativeEvent.offsetX;
    if (width && props.audioElem) {
      const totalProgress = (offset / width) * 100;
      props.audioElem.volume = totalProgress / 100;
      setVolume(props.audioElem.volume);
    }
  };

  const muteSong = () => {
    if (props.audioElem) {
      props.audioElem.muted = !props.audioElem.muted;
    }
  };
  return (
    <div className="h-[100%] w-full flex justify-between">
      <div id="songInfo" className="flex items-center gap-3 min-w-[250px]">
        <img
          src={testImg}
          alt="album_thumbnail"
          className="h-[70px] w-[70px] object-cover rounded-lg"
        />
        <span className="flex flex-col text-start gap-1">
          <span>{props.currentDataSong.title}</span>
          <span>{props.currentDataSong.artist}</span>
        </span>
      </div>
      <div id="playerContainer" className="flex flex-col gap-2 pb-3">
        {props.currentDataSong.duration}
        <div className="flex justify-center px-1 items-center gap-3">
          <PlayerPrevious
            songs={props.songs}
            setCurrentSong={props.setCurrentSong}
            currentSong={props.currentSong}
            currentDataSong={props.currentDataSong}
            setCurrentDataSong={props.setCurrentDataSong}
            setIsPlaying={props.setIsPlaying}
            index={props.index}
            setIndex={props.setIndex}
          />
          <PlayerButton
            isPlaying={props.isPlaying}
            setIsPlaying={props.setIsPlaying}
            audioElem={props.audioElem}
          />
          <PlayerNext
            songs={props.songs}
            setCurrentSong={props.setCurrentSong}
            currentSong={props.currentSong}
            currentDataSong={props.currentDataSong}
            setCurrentDataSong={props.setCurrentDataSong}
            setIsPlaying={props.setIsPlaying}
            skipNext={props.skipNext}
          />
        </div>
        <div className="flex justify-center items-center gap-5">
          <progress
            ref={clickRef}
            max={100}
            id="seekbar"
            className="w-[400px] h-[7px] hover:cursor-pointer"
            value={props.currentSong.progress}
            onClick={checkWidth}
          />
        </div>
      </div>
      <div
        id="songInfo"
        className="flex items-center justify-end gap-3 min-w-[250px]"
      >
        <VolumeBar
          muteSong={muteSong}
          volumeIcon={volumeIcon}
          clickVolumeRef={clickVolumeRef}
          audioElem={props.audioElem}
          checkVolumeWidth={checkVolumeWidth}
          volume={volume}
        />
      </div>
    </div>
  );
}

export default Player;
