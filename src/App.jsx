import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: "Landing",
    },
    {
      path: "logIn",
      element: "Login",
    },
    {
      path: "signup",
      element: "SignUp",
    },
    {
      path: "dashboard",
      element: "Dashboard",
    },
    {
      path: "preview",
      element: "Preview",
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
