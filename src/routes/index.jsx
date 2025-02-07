import {
  Home,
  About,
  NotFound,
  AlbumLayout,
  AlbumIndex,
  AlbumPhoto,
  AlbumSearch,
} from "../pages";
import App from "../App";
import { createHashRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "album",
        element: <AlbumLayout />,
        children: [
          {
            index: true,
            element: <AlbumIndex />,
          },
          {
            path: "search",
            element: <AlbumSearch />,
          },
          {
            path: ":id",
            element: <AlbumPhoto />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
