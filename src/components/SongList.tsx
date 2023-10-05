import Song from "./Song";

function SongList() {
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
      <tbody>
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </tbody>
    </table>
  );
}

export default SongList;
