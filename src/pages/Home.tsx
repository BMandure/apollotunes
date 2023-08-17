import Artist from "../components/Artist";
import { ArtistType } from "../types";

function Home() {
  const infoTest: ArtistType = {
    lastname: "Apellido",
    name: "Nombre",
    songs: [],
  };
  return (
    <main className="text-white text-start w-full max-h-[90vh] overflow-auto m-auto flex flex-col gap-5">
      <p className="text-3xl">Hello!</p>
      <p className="text-xl">Artists:</p>
      <section className="flex gap-10 flex-wrap justify-center">
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
        <Artist infoArtist={infoTest} />
      </section>
    </main>
  );
}

export default Home;
