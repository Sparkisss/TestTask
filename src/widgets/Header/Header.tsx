import Icon from "@/assets/icons/Logo.svg";
import { NavBar } from "@/shared/ui";
import { useEffect, useState } from "react";
import { HeaderProps } from "./model/styles";
import { navbarData } from "@/shared/model/constants";
import Menu from "@/assets/icons/menu.svg";
import { HeaderForm } from "./ui/HeaderForm";

export function Header({ setQuery, favorPage }: HeaderProps) {
  const [value, setValue] = useState("");
  const [isHamburger, setIsHamburger] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onAddClass = () => {
    setIsHamburger((prev) => !prev);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (setQuery) setQuery(value);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [value, setQuery]);

  return (
    <header className="mx-auto mt-12 mb-40 flex w-full max-w-screen-xl justify-between px-24">
      <img src={Icon} alt="icon" />
      <NavBar navbarData={navbarData} />
      <HeaderForm
        value={value}
        isHamburger={isHamburger}
        favorPage={favorPage}
        handleSearchChange={handleSearchChange}
      />
      <img
        className="block cursor-pointer md:hidden"
        src={Menu}
        alt="menu"
        onClick={onAddClass}
      />
    </header>
  );
}
