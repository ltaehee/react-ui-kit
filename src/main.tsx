import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@ui/Layout";
import TestPage from "./pages/testpage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/test", element: <TestPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
