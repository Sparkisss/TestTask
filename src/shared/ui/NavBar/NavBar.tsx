import clsx from "clsx";
import { Button } from "../Button";
import { NavBarProps } from "./model/types";

export function NavBar({ navbarData }: NavBarProps) {
  return (
    <nav>
      <ul className="flex h-full items-center justify-center gap-1">
        {navbarData.map((date) => (
          <li key={date.id} className="mr-13.5">
            <Button
              className={clsx(
                "border-none text-gray-500 hover:bg-transparent hover:text-black",
                date.color,
              )}
              as="a"
              href={date.href}
            >
              {date.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
