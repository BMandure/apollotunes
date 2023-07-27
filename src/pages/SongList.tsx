import Header from "../components/Header";
import Song from "../components/Song";

type id = `${string}-${string}-${string}-${string}-${string}`;
type idType = { id: id };

function SongList({ id }: idType) {
  return (
    <section className="flex flex-col max-h-[90vh] min-w-[780px] w-full [&>article]:rounded rounded overflow-auto bg-zinc-900">
      <Header />
      <article className="flex-1 text-white pb-[2rem] pt-0 backdrop-blur-3xl">
        <div className="w-full flex flex-col gap-2">
          <div className="sticky bg-zinc-900 top-0 pt-4 flex w-full justify-between text-center [&>span]:w-1/4 [&>span]:text-start border-b-[1px] pb-3 border-b-zinc-700 px-[5rem]">
            <span className="!w-[50px] !text-center">#</span>
            <span className="ps-5">Title</span>
            <span className="inline max-[1275px]:hidden">Album</span>
            <span className="inline max-[1275px]:hidden">Date Added</span>
            <span className="!text-end pe-4">Duration</span>
          </div>
          <div className="px-[5rem]">
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
          </div>
        </div>
      </article>
    </section>
  );
}

export default SongList;
