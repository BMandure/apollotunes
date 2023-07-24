import Header from "./Header"
import Song from "./Song"

function SongList() {
  return (
    <section className="flex flex-col h-[90vh] col-span-9 row-span-10 [&>article]:bg-zinc-900">
        <article className="rounded-t-lg">
          <Header/>
        </article>
        <article className="flex-1 rounded-b-lg text-white py-[2rem] px-[5rem] overflow-auto">
          <table className="w-full [&>thead>th]:text-start [&>tbody>tr]:text-start">
            <thead>
              <th className="ps-4">#</th>
              <th>Title</th>
              <th>Album</th>
              <th className="!text-end">Date Added</th>
              <th className="!text-end pe-4">Duration</th>
            </thead>
            <tbody>
              <Song/>
              <Song/>
              <Song/>
              <Song/>
              <Song/>
              <Song/>
              <Song/>
              <Song/>
              <Song/>
              <Song/>
            </tbody>
          </table>
        </article>
    </section>
  )
}

export default SongList