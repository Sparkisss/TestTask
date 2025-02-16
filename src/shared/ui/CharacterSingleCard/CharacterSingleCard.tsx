import { HeadSingleCard } from "./ui/HeadSingleCard";
import { ContentSingleCard } from "./ui/ContentSingleCard";

export function CharacterSingleCard() {
  return (
    <main className="mr-24 mb-33 ml-24 flex flex-1 flex-shrink flex-grow basis-auto flex-col">
      <HeadSingleCard />
      <ContentSingleCard />
    </main>
  );
}
