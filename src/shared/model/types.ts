export interface CharacterType {
  id: number;
  name: string;
  image: string;
  status: boolean;
}

export interface navigateToPageProps {
  currentPage: number;
  pageQty: number;
  setSearchParams: (params: { page: string }) => void;
}
