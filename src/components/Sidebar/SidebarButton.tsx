import { Link } from "react-router-dom";

function SidebarButton(props: {
  text: string;
  handleOnClick: any;
  imgSrc: string;
  link: string;
}) {
  return (
    <Link
      to={props.link}
      className="w-full py-5 text-left px-3 rounded-xl hover:bg-zinc-700 flex items-center gap-2 h-[70px]"
      onClick={() => props.handleOnClick()}
    >
      <img src={props.imgSrc} alt="sidebar_icon" className="w-[30px]" />
      {props.text}
    </Link>
  );
}

export default SidebarButton;
