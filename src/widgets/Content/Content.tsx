import { CharacterCard } from "@/shared/ui";
import { CharacterListType } from "./model/types";

export function Content({
  characters = [],
  favorPage,
  setMessage,
}: CharacterListType) {
  return (
    <>
      {characters.length <= 1 && favorPage ? (
        <main className="mb-50 flex items-center justify-center">
          <div>
            Список избранных пуст. Добавьте персонажей с главной страницы!
          </div>
        </main>
      ) : (
        <main className="mb-44 grid grid-cols-2 grid-rows-3 place-items-center gap-4 px-24 sm:grid-cols-4">
          {characters?.map((character) => (
            <CharacterCard
              key={character.id}
              incomeData={character}
              favorPage={favorPage}
              setMessage={setMessage}
            />
          ))}
        </main>
      )}
    </>
  );
}
