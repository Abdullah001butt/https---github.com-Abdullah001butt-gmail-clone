import React from "react";
import Navbar from "./components/shared/Navbar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
