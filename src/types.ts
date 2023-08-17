export type Id = `${string}-${string}-${string}-${string}-${string}`;

type ListType = "pl" | "ab" | "sg";

export type ArtistType = {
  name: string;
  lastname: string;
  songs: Song[];
};

export type Song = {
  songName: string;
  artist: ArtistType;
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
