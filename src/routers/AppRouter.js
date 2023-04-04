import { createBrowserRouter } from "react-router-dom";
import { HOME_ROUTER } from "../core/utils/consts";
import { HomePage } from "../pages/HomePage/HomePage";


const router = createBrowserRouter([
    {
        path: HOME_ROUTER,
        element: <HomePage />
    }
])

export default router