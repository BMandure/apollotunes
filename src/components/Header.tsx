import play from "../assets/play.svg";
function Header() {
  return (
    <div className="m-0 bg-gradient-to-b from-[#FC5404] from-20% rounded-lg p-5 flex">
      <div className="bg-zinc-800 rounded-lg w-[250px] h-[250px]">
        <img src="..." alt="album/artist_image" />
      </div>
      <div className="flex flex-col justify-between items-start p-5 [&]:font-semibold text-white">
        <small className="text-[1rem]">Category test</small>
        <h2 className="text-[5rem] leading-tight">Test list name</h2>
        <button className="h-[70px] w-[70px] rounded-[50%] hover:border-2 hover:border-gray-600">
          <img src={play} alt="..." />
        </button>
      </div>
    </div>
  );
}

export default Header;
