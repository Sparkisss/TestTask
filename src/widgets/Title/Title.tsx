import { Button } from "@/shared/ui";
import List from "@/assets/icons/List.svg";
import Voice from "@/assets/icons/Voice.svg";
import Dollar from "@/assets/icons/Dollar.svg";

export function Title() {
  return (
    <section className="mb-25">
      <h1 className="mb-11.25 text-4xl font-bold">Discover NFTs</h1>
      <div>
        <Button icon={List} className="h mr-7.5 h-15 w-36 border-3">
          Category
        </Button>
        <Button icon={Voice} className="mr-7.5 h-15 w-36 border-3">
          Collection
        </Button>
        <Button icon={Dollar} className="mr-7.5 h-15 w-36 border-3">
          Price
        </Button>
      </div>
    </section>
  );
}
