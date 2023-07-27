import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksPage from "./pages/BooksPage.jsx";
import ChaptersPage from "./pages/ChaptersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/chapters",
        element: <ChaptersPage />,
      },
      // {
      //   path: "/notes/:id",
      //   element: <div>Note</div>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
