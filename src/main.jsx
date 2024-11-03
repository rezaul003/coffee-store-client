import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './assets/Components/AddCoffee';
import UpdateCoffee from './assets/Components/UpdateCoffee';
import SignUp from './assets/Components/User/SignUp.jsx';
import SignIn from './assets/Components/User/SignIn.jsx';
import AuthProvider from './assets/Components/Providers/AuthProvider.jsx';
import Users from './assets/Components/User/Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "addcoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/user",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/user')
  }


]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
