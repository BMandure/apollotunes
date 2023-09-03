import { Link } from "react-router-dom";

function SectionHeader(props: { link: string; title: string }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-xl">{props.title}:</p>
      <Link
        to={props.link}
        className="text-sm rounded-3xl bg-zinc-900 px-4 py-2 hover:bg-zinc-800"
      >
        See All
      </Link>
    </div>
  );
}

export default SectionHeader;
