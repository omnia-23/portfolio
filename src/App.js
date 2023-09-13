import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout/Layout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index:true, element: <Home /> },
        {path:"/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
