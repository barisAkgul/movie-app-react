import { RouterProvider } from "react-router-dom";

import { router } from "router";

//styles
import "styles/reset.css";
import "styles/variables.css";
import "styles/global.css";

function App() {
  console.log(router);
  return <RouterProvider router={router} />;
}

export default App;
