export interface ModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
}
export interface Song {
  title: string;
  album: string;
  route: string;
  progress: number;
  length: number;
}
