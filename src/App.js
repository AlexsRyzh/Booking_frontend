<<<<<<< HEAD
import { RouterProvider } from "react-router";
import router from './routers/AppRouter'
import './styles/reset.scss'

function App() {
  return (
    <RouterProvider
      router={router}
    />
  );
=======
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers/MainRouters'

export const App = () => {
    return (
        <RouterProvider
            router={router}
        />
    )
>>>>>>> 03ef4fb8c59c822f8a61cd0b6cbc5dfae1b7a9c4
}
