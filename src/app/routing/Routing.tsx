import { createBrowserRouter } from "react-router";
import { MainPage, CharacterPage, FavorCharacterPage, NotFound } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/character/:characterId",
    element: <CharacterPage />,
  },
  {
    path: "/favor",
    element: <FavorCharacterPage />,
  },
]);
