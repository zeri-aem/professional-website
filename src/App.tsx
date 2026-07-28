import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/pages/home/Home";

// BrowserRouter + Routes + Route Combo
// RouterProvider + createBrowserRouter
// BrowserRouter + Routes + Route + Outlet

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", index: true, element: <Home /> }, // Change to real element in the future
      { path: "/about", element: "About" },
      { path: "/projects", element: "Projects" },
      { path: "/experience", element: "Experience" },
      { path: "/contact", element: "Contact" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
