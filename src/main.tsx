import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
//import '../src/index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
