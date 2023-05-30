import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { getResizeEventListener } from "./services/responsiveFrame";

import Intro from "pages/intro";
import Home from "pages/home";
import Root from "pages/root";
import Indict from "pages/Indict";
import Dialogue from "pages/chapter";
import Ending, { loader as endingLoader } from "pages/ending";

const router = createBrowserRouter([
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <div />,
        loader: () => redirect("/intro"),
      },
      {
        path: "chapter",
        element: <Dialogue />,
      },
      {
        path: "document",
        element: <Indict />,
      },
      {
        path: "ending/:fairy",
        element: <Ending />,
        loader: endingLoader,
      },
    ],
  },
]);

export default () => {
  useEffect(() => {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  });

  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
};
