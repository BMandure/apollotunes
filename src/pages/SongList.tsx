import Header from "../components/Header";
import Song from "../components/Song";
import { Playlist } from "../types";

function SongList() {
  const playList: Playlist = {
    plName: "Album Name Default",
    username: "Bruno Manduré",
    songs: [],
    image: "...",
    list: "ab",
  };

  let i: number = 0;
  while (i < 50) {
    playList.songs.push({
      songName: "Song Name Default",
      artist: {
        name: "Bruno",
        lastname: "Manduré",
        songs: [],
      },
      duration: 4.53,
      playlist: playList,
    });
    i++;
  }

  return (
    <section className="flex flex-col max-h-[90vh] w-full [&>article]:rounded rounded overflow-auto bg-zinc-900">
      <Header info={playList} />
      <article className="flex-1 text-white pb-[2rem] pt-0 backdrop-blur-3xl">
        <table className="w-[95%] mx-auto">
          <thead className="sticky top-0 h-[50px] flex items-center border-b-2 border-zinc-800 bg-zinc-900">
            <tr className="flex gap-5 w-full justify-around [&>th]:text-start">
              <th className="w-[50px]">#</th>
              <th className="w-[30%]">Title</th>
              <th className="w-1/6 max-[1050px]:hidden">Album</th>
              <th className="w-1/6 max-[1050px]:hidden">Date Added</th>
              <th className="w-1/6 !text-end">Duration</th>
            </tr>
          </thead>
          <tbody>
            {playList.songs.map((song, i) => (
              <Song key={i} infoSong={song} position={i + 1} />
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default SongList;
