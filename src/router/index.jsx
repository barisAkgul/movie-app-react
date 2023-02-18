import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "pages/home-page";
import { MainLayouts } from "layouts/main";

export const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hakkımızda",
        element: <div>Hakkımızda</div>,
      },
    ],
  },
]);
