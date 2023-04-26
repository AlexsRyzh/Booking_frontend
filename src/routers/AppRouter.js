import { createBrowserRouter, redirect } from "react-router-dom";
import { HOME_ROUTER, LOGIN_ROUTER, REGISTER_ROUTER } from "../constants/consts";
import { HomePage } from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";


const router = createBrowserRouter([
    {
        path: HOME_ROUTER,
        element: <HomePage />
    },
    {
        element: <AuthPage />,
        children: [
            {
                path: LOGIN_ROUTER,
                element: <LoginPage />
            },
            {
                path: REGISTER_ROUTER,
                element: <RegistrationPage />
            }
        ]
    }
])

export default router