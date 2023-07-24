import test from "../assets/arrow-right.svg";

function LibraryComp() {
  return (
    <button className="flex p-2 me-2 justify-between items-center min-h-[70px] hover:bg-zinc-800 rounded [&>div>img]:hover:bg-zinc-700">
      <div className="flex items-center gap-8">
        <img
          className="w-[50px] bg-zinc-800 h-[50px] rounded"
          src={test}
          alt="song_img"
        />
        <h3 className="uppercase">Folder / Artist Name</h3>
      </div>
      <p className="text-sm">| Artist / Playlist |</p>
    </button>
  );
}

export default LibraryComp;
