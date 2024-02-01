import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([{
    path:"/",
    element:<Home></Home>
},
{
    path:"/animals",
    element:<Animals></Animals>
},
{
    path:"/animal/id",
    element:<Animal></Animal>
}
]);