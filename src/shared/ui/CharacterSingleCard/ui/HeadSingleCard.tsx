import { Link } from "react-router";
import Back from "@/assets/icons/Back.svg";

export function HeadSingleCard() {
  return (
    <article className="mb-14 flex gap-8">
      <Link to={"/"}>
        <img className="cursor-pointer" src={Back} alt="back" />
      </Link>
      <h2 className="text-3xl leading-7 font-semibold lg:text-4xl">
        Product Detail
      </h2>
    </article>
  );
}
