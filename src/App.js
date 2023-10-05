import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout/Layout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routs = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home />, errorElement: <Home /> },
        { path: "/home", element: <Home />, errorElement: <Home /> },
        { path: "/about", element: <About />, errorElement: <Home /> },
        { path: "/portfolio", element: <Portfolio />, errorElement: <Home /> },
        { path: "/contact", element: <Contact />, errorElement: <Home /> },
        { path: "*", element: <Home /> },
      ],
    },
  ]);
  return <RouterProvider router={routs}></RouterProvider>;
}

export default App;
