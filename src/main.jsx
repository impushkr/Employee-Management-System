import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import AddEmployee from './components/AddEmployee.jsx'
import Employees from './components/Employees.jsx'
import Dashboard from './components/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Dashboard/>
      },
      {
        path:'/add-employee',
        element:<AddEmployee/>
      },
      {
        path:'/employees',
        element:<Employees/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
