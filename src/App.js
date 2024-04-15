import React, { lazy ,Suspense} from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Header from './components/Header'
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurentMenu";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
// import Groscery from "./components/Groscery";
// import logo from './logo.png'
import Contact from "./components/contact";
// React Element

const heading = React.createElement("h1",{id:"heading"},"this is heading");


// Chunking
// code Spliting
// Dynamic Loading 
// on demand Loading
//  dynamic bundling
// lazy loading
const Groscery = lazy(()=> import("./components/Groscery"));
const AppLayout =()=>{

    return(
        <div className="app">
            {/* //Header   */}
            <Header/>
            {/* if path = / */}
            {/* <Body />  */}
            {/* if path /about */}
            {/* <About /> */}
            {/* if path /contact */}
            {/* <Contact /> */}
            <Outlet />
        </div>
    )
}

const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>, 
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element:<About/>,
    
      },
      {
        path:"/restaurents/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/groscery",
        element: 
          <Suspense fallback={<h1>Loading</h1>} >
        <Groscery/>
          </Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
 
])

const root=createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);