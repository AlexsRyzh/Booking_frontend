import { RouterProvider } from "react-router";
import router from './routers/AppRouter'
import './styles/reset.scss'

function App() {
  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App;
