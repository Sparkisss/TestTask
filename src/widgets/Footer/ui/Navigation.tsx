import LogoWhite from "@/assets/icons/LogoWhite.svg";
import { NavBar } from "@/shared/ui";
import { navbarData } from "@/shared/model/constants";

export function Navigation() {
  return (
    <article className="flex h-full items-center justify-center pt-24 pr-24 pl-24">
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-center">
          <img className="mr-3.5" src={LogoWhite} alt="logo" />
          <div className="text-2xl leading-10 font-semibold">DiveSea</div>
        </div>
        <NavBar navbarData={navbarData} />
      </div>
    </article>
  );
}
