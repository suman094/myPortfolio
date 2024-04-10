import { useState } from 'react'
import Home from './Pages/Home'
import './App.css' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';
import Navbar from './components/Navbar';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound/>
    },
    {
      path: "/project",
      element: <Project />,
    },
  ]);
  

  return (
    <>
    <div className='page'>

      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
