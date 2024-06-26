import { Navigate, RouteObject } from "react-router-dom";
import { RootLayout } from "@/Layouts/RootLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { PokemonListPage } from "./pages/pokemon-list/page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/pokemon-list" replace />,
          },
          {
            path: "/pokemon-list",
            element: <PokemonListPage />,
          },
        ],
      },
    ],
  },
];
