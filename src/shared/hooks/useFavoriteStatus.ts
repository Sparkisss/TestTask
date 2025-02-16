import { useState, useEffect } from "react";

export function useFavoriteStatus(id: string | undefined) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const saved = localStorage.getItem(id);
      setIsFavorite(saved === "true");
    }
  }, [id]);

  return { isFavorite, setIsFavorite };
}
