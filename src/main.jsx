import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Error from './components/Error.jsx';
import Products from './routes/Products.jsx';
import UserDetail from './components/user-detail/user-detail.jsx';
import Questions from './components/questions/questions.jsx';
import Login from './components/login/login.jsx';

const MainApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Certifique-se de importar corretamente

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  return isLoggedIn ? <App /> : <Login onLoginSuccess={handleLoginSuccess} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/saude_mental', element: <Questions category="saude_mental" /> },
      { path: '/user', element: <UserDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
