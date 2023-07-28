import test from "../assets/arrow-right.svg";

function LibraryComp() {
  return (
    <button className="flex p-2 justify-between items-center min-h-[70px] hover:bg-zinc-800 rounded [&>div>img]:hover:bg-zinc-700 max-[920px]:w-[65px] !mx-auto !ms-2">
      <div className="flex items-center justify-start text-start gap-5">
        <img
          className="w-[50px] bg-zinc-800 h-[50px] rounded"
          src={test}
          alt="song_img"
        />
        <h3 className="uppercase max-[920px]:hidden">Folder / Artist Name</h3>
      </div>
      <p className="text-sm text-right max-[920px]:hidden">Artist / Playlist</p>
    </button>
  );
}

export default LibraryComp;
