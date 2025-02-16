import { CharacterType } from "@/shared/model/types";
import { BASE_URL } from "@/shared/model/constants";
import { useFetch } from "@/shared/hooks";

export function useFetchData(query: string, currentPage: number) {
  const url = query
    ? `${BASE_URL}?name=${encodeURIComponent(query)}`
    : `${BASE_URL}?page=${currentPage}`;

  const { data, isLoading, error } = useFetch<{
    results: CharacterType[];
    info: { pages: number };
  }>(url);

  return {
    characters: data?.results || [],
    pageQty: data?.info?.pages || 1,
    isLoading,
    error,
  };
}
