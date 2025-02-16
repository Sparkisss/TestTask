import { CharacterType } from "@/shared/model/types";

export interface CharacterListType {
  characters: CharacterType[];
  favorPage?: boolean;
  setMessage: (msg: string | null) => void;
}
