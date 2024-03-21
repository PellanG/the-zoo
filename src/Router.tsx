import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
{
 path:"/",
 element:<Layout></Layout>,
 children:[
   
{
    path:"/",
    element:<Home></Home>,
    index:true,
},
{
    path:"/animals",
    element:<Animals></Animals>
},
{
    path:"/animal/:id",
    element:<Animal></Animal>
}]
}
]);