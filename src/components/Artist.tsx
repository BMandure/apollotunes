import logo from "../assets/logo.svg";
import { ArtistType } from "../types";

function Artist(props: { infoArtist: ArtistType }) {
  const handlePlay = () => {
    console.log("Play Artist");
  };
  return (
    <article className="w-[220px] min-h-[220px] flex justify-center items-center flex-col rounded-xl bg-zinc-900 hover:cursor-pointer [&>div>svg]:hover:inline">
      <div className="w-full h-[220px] p-4 relative">
        <img src={logo} alt="cover_img" className="border-[1px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="white"
          className="bi bi-play-circle hidden absolute bottom-8 right-8"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      </div>
      <div className="text-start w-full px-4 pb-4 flex justify-between items-center">
        <div className="h-[2rem]">
          <p className="font-bold text-lg">
            {props.infoArtist.name} {props.infoArtist.lastname}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Artist;
