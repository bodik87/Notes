import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksPage from "./pages/BooksPage.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
// import ChaptersPage from "./pages/ChaptersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/books",
        element: <BooksPage />,
      },
      // {
      //   path: "/chapters",
      //   element: <ChaptersPage />,
      // },
      // {
      //   path: "/notes/:id",
      //   element: <div>Note</div>,
      // },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
