import { Button } from "../Button";
import Right from "@/assets/icons/Right.svg";
import Left from "@/assets/icons/Left.svg";
import Line from "@/assets/icons/Line.svg";
import LoadingIcon from "@/assets/icons/Loading.svg";
import { LoadingProps } from "./model/types";

export function Loading({ handleClick, isLoading, error }: LoadingProps) {
  return (
    <article className="mb-44">
      <Button
        onClick={handleClick}
        className="mb-5 h-17 w-42 rounded-2xl border-white shadow-lg shadow-gray-500/50"
      >
        <div className="flex justify-between p-2">
          <img src={Left} alt="left" />
          <img src={Line} alt="line" />
          <img src={Right} alt="right" />
        </div>
      </Button>
      <div className="mt-4 flex h-12 flex-col items-center">
        <div
          className={`opacity-${isLoading ? "100" : "0"} transition-opacity duration-300 ease-in-out`}
        >
          {isLoading && (
            <img src={LoadingIcon} alt="Loading" className="animate-spin" />
          )}
          {error && <div>Error</div>}
        </div>
      </div>
    </article>
  );
}
