import { Loading } from "@/shared/ui";
import { Content, Footer, Header } from "@/widgets";
import { useState, useEffect } from "react";
import { MouseEvent } from "react";
import { useFetchData } from "./model/hooks";
import { useCustomSearchParams } from "@/shared/hooks";
import { navigateToPage } from "@/shared/helpers";
import { getFavorIds } from "./model/helpers/getFavorIds";

export function FavorCharacterPage() {
  const [query, setQuery] = useState("");
  const [favorId, setFavorId] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const { setSearchParams, currentPage } = useCustomSearchParams();
  const { characters, pageQty, isLoading, error } = useFetchData(
    query,
    favorId,
  );

  const updateFavorIds = () => {
    const favorIds = getFavorIds();
    if (favorIds !== favorId) {
      setFavorId(favorIds);
    }
  };

  useEffect(() => {
    updateFavorIds();
    const interval = setInterval(updateFavorIds, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [favorId]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    navigateToPage(e, { currentPage, pageQty, setSearchParams });
  };

  return (
    <>
      <Header setQuery={setQuery} favorPage={true} />
      <Content
        characters={Array.isArray(characters) ? characters : characters.results}
        favorPage={true}
        setMessage={setMessage}
      />
      {message && <div className="notification">{message}</div>}
      <Loading handleClick={handleClick} isLoading={isLoading} error={error} />
      <Footer />
    </>
  );
}
