import Header from "./Header";
import Song from "./Song";

function SongList() {
  return (
    <section className="flex flex-col !max-h-[90vh] w-[80%] bg-gradient-to-b from-[#64bd9f] from-20% to-zinc-900 to-50% [&>article]:rounded rounded">
      <Header />
      <article className="flex-1 text-white py-[2rem] pt-0 px-[5rem] overflow-auto backdrop-blur-sm">
        <table className="w-full [&>thead>th]:text-start [&>tbody>tr]:text-start">
          <thead className="sticky top-0">
            <tr>
              <th className="ps-4 !text-start">#</th>
              <th className="!text-start">Title</th>
              <th className="!text-start">Album</th>
              <th className="!text-end">Date Added</th>
              <th className="!text-end pe-4">Duration</th>
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
            <Song />
            <Song />
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default SongList;
