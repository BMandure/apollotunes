import artistImg from "../../assets/genres/lofiGenre.jpg";

function PlaylistAlbum() {
  return (
    <div className="bg-customDark rounded-xl flex flex-col gap-4 p-3 hover:bg-zinc-800 hover:cursor-pointer group w-[200px] h-[270px]">
      <div className="relative">
        <span className=" group-hover:bg-main group-hover:visible invisible absolute bottom-2 right-2 w-[50px] h-[50px] [&>img]:w-[50px] [&>img]:h-[50px] bg-main rounded-full hover:scale-105 pt-[2px] mx-auto">
          <i
            className="bi bi-play-fill"
            style={{ fontSize: "30px", color: "black" }}
          ></i>
        </span>
        <img
          src={artistImg}
          alt="..."
          className="w-full h-[170px] object-cover rounded-2xl mx-auto"
        />
      </div>
      {/*TODO: Change Alt*/}
      <div className="flex flex-col flex-1 justify-center [&]:text-start">
        <span className="font-extrabold tracking-wide">Lofi Girl</span>
        <small>By Username</small>
      </div>
    </div>
  );
}

export default PlaylistAlbum;
