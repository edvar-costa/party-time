import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

// pages

import Home from './routes/Home.jsx'
import CreateParty from './routes/CreateParty.jsx'
import Party from './routes/party.jsx'

const router = createBrowserRouter([
{
  path:"/",
  element: <App />,
  children: [
    {
      path:"/",
      element: <Home/>
    },
    {
      path: "/party/new",
      element: <CreateParty/>
    },
    {
      path: "/party/:id",
      element: <Party/>,
    },
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
