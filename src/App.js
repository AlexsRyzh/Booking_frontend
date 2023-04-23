import { RouterProvider } from "react-router";
import router from './routers/AppRouter'
import './styles/reset.scss'

const App = () => {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
