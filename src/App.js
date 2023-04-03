import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers/MainRouters'

export const App = () => {
    return (
        <RouterProvider
            router={router}
        />
    )
}
