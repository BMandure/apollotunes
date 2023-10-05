import { Link } from "react-router-dom";
import slugify from "slugify";

function Genre(props: { name: string; img: string }) {
  const loweredName = props.name.toLowerCase();
  const slug = slugify(loweredName);
  return (
    <Link
      to={`/${slug}`}
      state={{ genreName: props.name, genreImg: props.img }}
      className="rounded-xl w-[350px] h-[80px] flex items-center gap-5 bg-customDark hover:bg-zinc-800 group"
    >
      <img
        src={props.img}
        alt="genre_img"
        className="border-red-500 h-full w-[80px] rounded-xl rounded-e-none object-cover"
      />
      {/*TODO: Change Alt */}
      <span className="text-lg font-semibold tracking-wide">{props.name}</span>
      <div className="flex flex-1 justify-end px-5">
        <span className="group-hover:bg-main group-hover:visible invisible rounded-full w-[50px] h-[50px] [&>img]:w-[50px] [&>img]:h-[50px] hover:scale-105 pt-[2px]">
          <i
            className="bi bi-play-fill"
            style={{ fontSize: "30px", color: "black" }}
          ></i>
        </span>
      </div>
    </Link>
  );
}

export default Genre;
