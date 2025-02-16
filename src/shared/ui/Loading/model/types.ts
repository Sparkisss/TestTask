export interface LoadingProps {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  isLoading: boolean;
  error: string | null;
}
