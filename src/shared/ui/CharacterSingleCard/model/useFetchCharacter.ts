import { useParams } from "react-router";
import { BASE_URL } from "@/shared/model/constants";
import { CharacterSingleCardType } from "./types";
import { useFetch } from "@/shared/hooks";

export function useFetchCharacter() {
  const { characterId = "1" } = useParams<{ characterId: string }>();
  const url = `${BASE_URL}/${characterId}`;
  const {
    data: character,
    isLoading,
    error,
  } = useFetch<CharacterSingleCardType>(url);

  return { character, isLoading, error };
}
