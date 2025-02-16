import Instagram from "@/assets/mediaIcon/inst.svg";
import LN from "@/assets/mediaIcon/ln.svg";
import Twit from "@/assets/mediaIcon/twit.svg";
import Facebook from "@/assets/mediaIcon/facebook.svg";

export function SocialMedia() {
  return (
    <article className="flex h-full items-center justify-between pr-24 pl-24">
      <div className="text-base leading-6 font-medium">
        © 2025 EATLY All Rights Reserved.
      </div>
      <ul className="flex">
        <li className="mr-13.5">
          <img src={Instagram} alt="instagram" />
        </li>
        <li className="mr-13.5">
          <img src={LN} alt="linkedin" />
        </li>
        <li className="mr-13.5">
          <img src={Twit} alt="twit" />
        </li>
        <li>
          <img src={Facebook} alt="facebook" />
        </li>
      </ul>
    </article>
  );
}
