import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Error from './components/Error.jsx';
import Products from './routes/Products.jsx';
import UserDetail from './components/user-detail/user-detail.jsx';
import Questions from './components/questions/questions.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    children: [
      {path: '/', element: <Home/>},
      { path: '/home', element: <Home /> },
      { path: '/medicamentos', element: <Questions /> },
      { path: '/curativos', element:  <Questions />},
      { path: '/suplementos', element: <Questions />},
      { path: '/carrinho', element: <UserDetail/> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
