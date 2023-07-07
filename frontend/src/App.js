import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Routes/Login'
import Register from './Routes/Register'
import Home from './Pages/Home'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Pages/Cart'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div> <Login/> </div>
  },

  {
    path:'/register',
    element: <div> <Register /> </div>
  },

  {
    path:'/home',
    element: <div> <Home/> </div>
  },
  {
    path:'/products/:id',
    element: <div> <SingleProduct/> </div>
  },
  {
    path: '/cart',
    element: <div> <Cart/> </div>
  }
  

])

const App = () => {
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App
