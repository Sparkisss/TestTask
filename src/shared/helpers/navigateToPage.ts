import { MouseEvent } from "react";
import { navigateToPageProps } from "@/shared/model/types";

export function navigateToPage(
  e: MouseEvent<HTMLElement>,
  { currentPage, pageQty, setSearchParams }: navigateToPageProps,
) {
  const target = e.target as HTMLElement;

  if (target instanceof HTMLImageElement) {
    if (target.alt === "right" && currentPage < pageQty) {
      setSearchParams({ page: String(currentPage + 1) });
    } else if (target.alt === "left" && currentPage > 1) {
      setSearchParams({ page: String(currentPage - 1) });
    }
  }
}
