import { Button } from "@/shared/ui/Button";
import { addToFavor } from "@/shared/helpers";
import Woman from "@/assets/photos/women.png";
import Man from "@/assets/photos/man.png";
import { useFavoriteStatus } from "@/shared/hooks";
import { useFetchCharacter } from "../model/useFetchCharacter";

export function ContentSingleCard() {
  const { character, isLoading, error } = useFetchCharacter();
  const { isFavorite, setIsFavorite } = useFavoriteStatus(
    character?.id?.toString() || "",
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!character) return <div>Character not found</div>;

  return (
    <article className="flex h-159 items-center justify-between rounded-2xl border-white p-9 shadow-lg shadow-gray-500/50">
      <div>
        <img
          className="h-140 w-141 rounded-2xl"
          src={character?.image}
          alt={character?.name}
        />
      </div>
      <div className="flex h-full flex-col justify-between">
        <h3 className="mb-18 text-[51px] leading-8 font-semibold">
          {character?.name}
        </h3>
        <div className="mb-16 flex justify-between">
          <div className="flex items-center gap-4">
            <img src={Man} alt="man" />
            <div className="text-2xl leading-10 font-medium">
              {character?.gender}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={Woman} alt="woman" />
            <div className="text-2xl leading-10 font-medium">
              {character?.status}
            </div>
          </div>
        </div>
        <div className="mb-15">
          <div className="mb-1 text-left text-lg leading-6 font-normal">
            Created
          </div>
          <div className="text-left text-xl leading-8 font-normal">
            {character?.created}
          </div>
        </div>
        <Button
          onClick={(e) =>
            addToFavor({
              e,
              id: character?.id,
              isFavorite,
              setIsFavorite,
            })
          }
          className={`h-20 w-118 ${
            isFavorite ? "bg-black" : "bg-amber-300"
          } text-white`}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
      </div>
    </article>
  );
}
