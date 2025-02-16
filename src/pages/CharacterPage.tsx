import { CharacterSingleCard } from "@/shared/ui/CharacterSingleCard/CharacterSingleCard";
import { Footer, Header } from "@/widgets";

export function CharacterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <CharacterSingleCard />
      <Footer />
    </div>
  );
}
