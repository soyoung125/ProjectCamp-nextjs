import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Write from "../pages/Write";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/detail:id",
    element: <Detail />,
  },
]);

export default router;
