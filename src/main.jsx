import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './route/Route.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* max-w-screen-lg	max-width: 1024px; */}
    {/* max-w-screen-xl	max-width: 1280px; */}
    <div className='max-w-screen-lg mx-auto'>
     <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
