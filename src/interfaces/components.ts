export interface GalleryItemProps {
  src: string;
  author: string;
}

export interface FormProps {
  formTitle: string;
  isRegisterForm: boolean;
  btnText: string;
  handleClick: (email: string, password: string, userName?: string) => void;
}
