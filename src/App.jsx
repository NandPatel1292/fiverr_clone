import { useState } from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Orders from "./pages/orders/Order";
import MyGigs from "./pages/myGigs/MyGigs";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/gigs",
          element: <Gigs></Gigs>,
        },
        {
          path: "/gig/:id",
          element: <Gig></Gig>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/mygigs",
          element: <MyGigs></MyGigs>,
        },
        {
          path: "/add",
          element: <Add></Add>,
        },
        {
          path: "/messages",
          element: <Messages></Messages>,
        },
        {
          path: "/message/:id",
          element: <Message></Message>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
