import { Link } from "react-router";
import { Button } from "../Button";
import { CharacterCardType } from "./model/styles";
import { addToFavor } from "@/shared/helpers";
import { useFavoriteStatus } from "@/shared/hooks";

export function CharacterCard({ incomeData, setMessage }: CharacterCardType) {
  const { id, name, image } = incomeData;
  const { isFavorite, setIsFavorite } = useFavoriteStatus(String(id));

  return (
    <section className="flex h-101 w-full flex-row rounded-2xl bg-white p-3.5 text-left shadow-lg shadow-gray-500/50 sm:w-70 sm:flex-col">
      <img className="mr-5 mb-4 w-fit sm:mr-0" src={image} alt="image" />
      <h2 className="mb-3.5 text-xl leading-7 font-semibold">{name}</h2>
      <div className="sm:flex sm:justify-between">
        <div>
          <div className="flex h-full items-center justify-center">
            <svg
              onClick={(e) => {
                addToFavor({
                  e: e,
                  id,
                  isFavorite,
                  setIsFavorite,
                  setMessage,
                });
              }}
              id={name}
              data-name="add"
              viewBox="0 0 24 24"
              className={
                isFavorite
                  ? "h-8 w-8 cursor-pointer fill-blue-600"
                  : "h-8 w-8 cursor-pointer"
              }
            >
              <path d="M.485,8.088l9.862,5.917c.51,.306,1.081,.459,1.653,.459,.571,0,1.143-.153,1.653-.459l9.861-5.917c.301-.181,.485-.506,.485-.857s-.184-.677-.485-.857L13.654,.456c-1.021-.613-2.287-.613-3.307,0L.485,6.373c-.301,.181-.485,.506-.485,.857s.184,.677,.485,.857ZM11.376,2.171h0c.384-.23,.863-.23,1.248,0l8.432,5.06-8.432,5.06c-.385,.23-.864,.23-1.249,0L2.944,7.23,11.376,2.171Zm12.624,17.829c0,.553-.448,1-1,1h-2v2c0,.553-.448,1-1,1s-1-.447-1-1v-2h-2c-.552,0-1-.447-1-1s.448-1,1-1h2v-2c0-.553,.448-1,1-1s1,.447,1,1v2h2c.552,0,1,.447,1,1Zm-11.143,3.286c-.188,.312-.519,.485-.858,.485-.175,0-.353-.046-.514-.143L.485,17.029c-.474-.284-.627-.898-.343-1.372,.283-.474,.897-.628,1.372-.343l11,6.6c.474,.284,.627,.898,.343,1.372Zm11-12.196c.284,.474,.131,1.088-.343,1.372l-11,6.6c-.159,.095-.336,.143-.515,.143s-.356-.048-.515-.143L.485,12.462c-.474-.284-.627-.898-.343-1.372,.283-.475,.897-.628,1.372-.343l10.485,6.291,10.485-6.291c.474-.284,1.088-.131,1.372,.343Z" />
            </svg>
          </div>
        </div>
        <Button className="h-13 w-30 bg-black text-white">
          <Link to={`/character/${id}`}>Character page</Link>
        </Button>
      </div>
    </section>
  );
}
