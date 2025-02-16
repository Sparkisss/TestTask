import { CharacterType } from "@/shared/model/types";
import { BASE_URL } from "@/shared/model/constants";
import { useFetch } from "@/shared/hooks";

export function useFetchData(query: string, currentPage: string) {
  const url = query
    ? `${BASE_URL}?name=${encodeURIComponent(query)}`
    : `${BASE_URL}/${currentPage}`;

  const { data, isLoading, error } = useFetch<{
    results: CharacterType[];
    info: { pages: number };
  }>(url);
  return {
    characters: data || [],
    pageQty: data?.info?.pages || 1,
    isLoading,
    error,
  };
}
