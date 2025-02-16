import { useEffect } from "react";
import { useSearchParams } from "react-router";

export function useCustomSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: "1" });
    }
  }, [searchParams, setSearchParams]);

  return { setSearchParams, currentPage };
}
