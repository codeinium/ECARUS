import {FC} from 'react'
import {RouterProvider} from "./router-provider/Provider";
import "../shared/styles/global.scss";

export const App: FC = () => {
  return (
    <div className="app">
      <RouterProvider />
    </div>
  )
}

export default App
