export interface ImageData {
  url: string;
  author: string;
  id: string;
}

export interface FilterValue {
  author: string;
  authors: string[];
}

export interface UserInterface {
    value: string | null;
    name: string;
    error: string | null;
  }