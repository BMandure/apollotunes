function Header(props: {
  plName: string;
  artistName: string | undefined;
  img: string;
}) {
  return (
    <article className="h-[25vh] rounded-t-xl bg-gradient-to-t from-transparent to-main flex items-center p-3">
      <span className="flex h-[200px] w-[35vw] rounded-xl items-center">
        <img
          src={props.img}
          alt={`Thumbnail of ${props.plName}`}
          className="h-[190px] w-[190px] rounded-xl bg-zinc-800 object-cover p-1"
        />
        <div className="text-left flex-grow mx-5">
          <h2 className="text-[2.5rem] font-extrabold">{props.plName}</h2>
          {
            <span className="flex items-center gap-2">
              <img
                src={props.img}
                alt={`Image of ${props.artistName && props.artistName}`}
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
              <h3>
                {props.artistName ? props.artistName : "Artist Name Here"}
              </h3>
            </span>
          }
        </div>
      </span>
    </article>
  );
}

export default Header;
