export interface ModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
}
export interface InfoSong {
  audio: HTMLAudioElement;
  info: Song;
}
export interface Song {
  title: string;
  album: string;
  artist: string;
  imgAlbum: string;
  route: string;
  progress?: number;
}
