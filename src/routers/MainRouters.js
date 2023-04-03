import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { EroroPage } from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [],
        errorElement: <EroroPage />
    },
    {
        path: "profile/:userId",
        element: <ProfilePage />
    },
    {
        path: "blog",
        element: <p>Blog</p>
    }
])

export default router