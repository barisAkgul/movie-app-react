import { createBrowserRouter, RouterProvider } from "react-router-dom";

//styles
import "styles/reset.css";
import "styles/variables.css";
import "styles/global.css";

import { HomePage } from "pages/home-page";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/hakkımızda",
          element: <div>Hakkımızda</div>,
        },
      ])}
    />
  );
}

export default App;
