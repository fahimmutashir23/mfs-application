import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default Router;