import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Header from './components/Header'
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/contact";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
// React Element
const heading = React.createElement("h1", { id: "heading" }, "this is heading");

// Chunking
// code Spliting
// Dynamic Loading
// on demand Loading
// dynamic bundling
// lazy loading
const Groscery = lazy(() => import("./components/Groscery"));
const AppLayout = () => {
  const [userName,setUserName] = useState();
  useEffect(()=>{
    const data ={
      name:"xyz "
    };
    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName , setUserName}}  >
      <div className="app">
        {/* Header */}
        <Header />
        {/* Outlet for rendering nested routes */}
        <Outlet />
        <Toaster />
      </div>
    </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/groscery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Groscery />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      
      {
        path: "/cart",
        element: <Cart />
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

// RouterProvider should wrap the entire application
root.render(<RouterProvider router={appRouter} />);
