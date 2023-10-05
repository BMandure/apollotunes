function VolumeBar(props: {
  muteSong: any;
  volumeIcon: string;
  clickVolumeRef: React.RefObject<HTMLProgressElement>;
  audioElem: HTMLAudioElement | null;
  checkVolumeWidth: any;
}) {
  //TODO: Avaiablility to change volume with paused song
  return (
    <>
      <button onClick={() => props.muteSong()}>
        <i
          className={`bi ${props.volumeIcon}`}
          style={{ fontSize: "25px" }}
        ></i>
      </button>
      <progress
        ref={props.clickVolumeRef}
        max={1}
        id="volume"
        className="w-[150px] h-[7px] hover:cursor-pointer"
        value={props.audioElem?.volume}
        onClick={props.checkVolumeWidth}
      />
    </>
  );
}

export default VolumeBar;
