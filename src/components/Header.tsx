import apolloIcon from "../assets/logo.svg";
function Header(props: {
  qtySongs: number;
  plName: string;
  artistName: string | undefined;
  img: string;
  isArtist: boolean;
}) {
  return (
    <article className="h-[25vh] rounded-t-xl bg-gradient-to-t from-transparent to-main flex items-center p-5">
      <span className="flex h-[200px] w-[35vw] rounded-xl items-center">
        <img
          src={props.img}
          alt={`Thumbnail of ${props.plName}`}
          className={`h-[190px] w-[190px] ${
            props.isArtist ? "rounded-full" : "rounded-md"
          } bg-zinc-800 object-cover p-0`}
        />
        <div className="text-left flex-grow mx-5 flex flex-col gap-3">
          <div>
            <h2 className="text-[2.5rem] font-extrabold">{props.plName}</h2>
            {!props.isArtist && (
              <span className="flex items-center gap-2">
                <img
                  src={props.isArtist ? props.img : apolloIcon}
                  alt={`Image of ${props.artistName && props.artistName}`}
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
                <h3>{props.artistName ? props.artistName : "APOLLOTUNES"}</h3>
              </span>
            )}
          </div>
          <small>{props.qtySongs} songs</small>
        </div>
      </span>
    </article>
  );
}

export default Header;
