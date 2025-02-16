import { useEffect, useState } from "react";
import { fetchData } from "@/shared/api/charactrsApi";

interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetchData(url);
        setData(response);
        setError(null);
      } catch (err) {
        setError(
          "Failed to fetch data." + (err instanceof Error ? err.message : ""),
        );
      } finally {
        setIsLoading(false);
      }
    }

    if (url) getData();
  }, [url]);

  return { data, isLoading, error } as UseFetchResult<T>;
}
