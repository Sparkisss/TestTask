import { addFavorType } from "../ui/CharacterCard/model/styles";

export const addToFavor = ({
  e,
  id,
  isFavorite,
  setIsFavorite,
  setMessage,
}: addFavorType & { setMessage?: (msg: string | null) => void }) => {
  let target = e.target as HTMLElement;

  while (target && !target.id) {
    target = target.parentElement as HTMLElement;
  }

  if (target && target.id && isFavorite) {
    setIsFavorite(false);
    localStorage.removeItem(String(id));
    setMessage?.("The card was removed from favorites");
  } else if (target && target.id && !isFavorite) {
    setIsFavorite(true);
    localStorage.setItem(String(id), "true");
    setMessage?.("The card was added to favorites");
  }

  if (setMessage) {
    setTimeout(() => {
      setMessage(null);
    }, 1000);
  }
};
