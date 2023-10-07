import { Link } from "react-router-dom";

function SidebarButton(props: {
  text: string;
  imgSrc: string;
  link: string;
  redButton: boolean;
  bigIcons: boolean;
}) {
  return (
    <Link
      to={props.link}
      className={`w-full py-5 text-left px-3 rounded-xl flex items-center gap-2 h-[70px] ${
        props.redButton ? "hover:bg-red-800" : "hover:bg-zinc-700"
      }`}
    >
      <img
        src={props.imgSrc}
        alt="sidebar_icon"
        className={`${
          !props.bigIcons ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"
        }`}
      />
      {props.text}
    </Link>
  );
}

export default SidebarButton;
