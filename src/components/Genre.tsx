import { Link } from "react-router-dom";

function Genre(props: { name: string; img: string }) {
  return (
    <Link
      to={`/genre/${props.name}`}
      className="h-[100px] w-[350px] rounded-lg flex flex-auto box-border bg-zinc-900 items-center hover:cursor-pointer hover:bg-zinc-800 justify-between"
    >
      <div className="h-[100px] flex items-center gap-[20px]">
        <img
          src={props.img}
          alt={`${props.name}_Img`}
          className="border-red-500 h-full w-[100px] rounded-lg rounded-e-none object-cover"
        />
        <p className="text-xl font-bold">{props.name}</p>
      </div>
    </Link>
  );
}

export default Genre;
