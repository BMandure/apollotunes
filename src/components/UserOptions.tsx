import { Tooltip } from "antd";
import test from "../assets/add.svg";

function UserOptions() {
  return (
    <div className="h-[40px] min-w-[40px] mb-2 ms-auto flex">
      <Tooltip
        placement="bottom"
        title="Go to profile"
        color="gray"
        arrow={false}
      >
        <button className="flex hover:bg-zinc-700 text-sm rounded-3xl bg-zinc-800 ps-3 pe-1 py-1 items-center gap-5">
          <p>Username</p>
          <img className="w-[30px] h-[30px]" src={test} alt="search_icon" />
        </button>
      </Tooltip>
    </div>
  );
}

export default UserOptions;
