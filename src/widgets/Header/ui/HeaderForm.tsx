import { Button, Input } from "@/shared/ui";
import { Link } from "react-router";
import clsx from "clsx";
import { HeaderFormType } from "../model/styles";

export function HeaderForm({
  value,
  isHamburger,
  favorPage,
  handleSearchChange,
}: HeaderFormType) {
  return (
    <form
      className={clsx(
        "relative hidden items-center gap-2 md:flex",
        isHamburger && "md:isHamburger",
      )}
    >
      <Input
        className="item"
        value={value}
        onChange={handleSearchChange}
        placeholder="Поиск..."
      />
      <Button className="h-14 w-50 bg-black text-white">
        {favorPage ? (
          <Link to={"/"}>Main</Link>
        ) : (
          <Link to={"/favor"}>Favor</Link>
        )}
      </Button>
    </form>
  );
}
