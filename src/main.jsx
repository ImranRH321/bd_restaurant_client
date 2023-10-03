import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './route/Route.jsx'
import { RouterProvider } from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TreeContextProvider from './context/TreeContextProvider'

const queryClient = new QueryClient()

{/* max-w-screen-lg	max-width: 1024px; */ }
{/* max-w-screen-xl	max-width: 1280px; */ }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-lg mx-auto font-mono'>
        {/* share context */}
        <TreeContextProvider> 
          <RouterProvider router={router} />
        </TreeContextProvider>
      </div>
    </QueryClientProvider>

  </React.StrictMode>,
)
