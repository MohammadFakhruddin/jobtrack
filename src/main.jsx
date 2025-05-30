import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer } from 'react-toastify'
import ThemeProvider from './Provider/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
      <AuthProvider>

        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </ThemeProvider>

  </StrictMode>,
)
