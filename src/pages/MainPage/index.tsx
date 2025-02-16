import { useState, MouseEvent } from "react";
import { useFetchData } from "./model/hooks";
import { useCustomSearchParams } from "@/shared/hooks";
import { navigateToPage } from "@/shared/helpers";
import { Content, Footer, Header } from "@/widgets";
import { Loading } from "@/shared/ui";

export function MainPage() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const { setSearchParams, currentPage } = useCustomSearchParams();
  const { characters, pageQty, isLoading, error } = useFetchData(
    query,
    currentPage,
  );

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    navigateToPage(e, { currentPage, pageQty, setSearchParams });
  };

  return (
    <>
      <Header setQuery={setQuery} />
      <Content characters={characters} setMessage={setMessage} />
      {message && <div className="notification">{message}</div>}
      <Loading handleClick={handleClick} isLoading={isLoading} error={error} />
      <Footer />
    </>
  );
}
