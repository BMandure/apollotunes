export type Id = `${string}-${string}-${string}-${string}-${string}`;

type ListType = "pl" | "ab" | "sg";

export type Song = {
  songName: string;
  username: string;
  artist: string;
  duration: number;
  playlist: Playlist;
  dateAdded?: Date;
  favourite?: boolean;
};

export type Playlist = {
  plName: string;
  username: string;
  songs: Song[];
  image: string;
  list: ListType;
};
