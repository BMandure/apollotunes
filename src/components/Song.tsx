import songTest from "../assets/add.svg";

function Song() {
  return (
    <tr className="h-[50px] hover:bg-zinc-800">
      <td className="ps-4">5</td>
      <td className="flex gap-3 items-center h-full">
        <img className="my-2 w-[50px] h-[50px]" src={songTest} alt="song_img" />{" "}
        <p>Song Title</p>
      </td>
      <td>Album Name</td>
      <td className="text-end cursor-default">Today</td>
      <td className="text-end pe-4 cursor-default">2:50</td>
    </tr>
  );
}

export default Song;
