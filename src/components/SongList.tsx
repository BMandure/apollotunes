import Song from "./Song";

function SongList() {
  //TODO: Get songList from backend

  let songList = [];
  const songInfo = {
    name: "Song Name Test",
    album: "Album Test",
    dateAdded: "16/10/2023",
  };
  for (let i = 0; i < 10; i++) {
    songList.push(<Song key={i} position={i + 1} songInfo={songInfo} />);
  }

  return (
    <table className="rounded-b-xl m-5 mt-0 [&>thead>tr>th]:text-start [&>thead>tr>th]:py-3">
      <thead className="sticky top-0 bg-zinc-900 border-b">
        <tr>
          <th className="!text-center w-[50px]">#</th>
          <th>Title</th>
          <th>Album</th>
          <th>Date Added</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>{songList}</tbody>
    </table>
  );
}

export default SongList;
