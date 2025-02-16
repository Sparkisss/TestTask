export interface HeaderProps {
  setQuery?: (str: string) => void;
  favorPage?: boolean;
}

export interface HeaderFormType {
  value: string;
  isHamburger: boolean;
  favorPage?: boolean;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
