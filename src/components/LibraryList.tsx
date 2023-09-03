import LibraryComp from "./LibraryComp";

function LibraryList() {
  const infoComponent = {
    name: "Library Name",
    artist: "Artist Name",
  };

  return (
    <div className="text-white flex flex-col max-h-[58vh] px-1 gap-2 overflow-auto flex-1">
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
      <LibraryComp link="/playlist/:id" info={infoComponent} />
    </div>
  );
}

export default LibraryList;
