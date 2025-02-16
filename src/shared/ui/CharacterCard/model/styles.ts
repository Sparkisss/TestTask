import { CharacterType } from "@/shared/model/types";

export interface CharacterCardType {
  favorPage?: boolean;
  incomeData: CharacterType;
  setMessage?: (msg: string | null) => void;
}

export type addFavorType = {
  id: number;
  e: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>;
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage?: (msg: string | null) => void;
};
