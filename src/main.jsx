import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Error from './components/Error.jsx';
import UserDetail from './components/user-detail/user-detail.jsx';
import Questions from './components/questions/questions.jsx';
import Login from './components/login/login.jsx';
import Logout from './components/logout/logout.jsx';

const MainApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Atualiza o estado para falso (não autenticado)
    navigate('/'); // Redireciona para a página de login após o logout
  };

  return isLoggedIn ? (
    <App handleLogout={handleLogout} />
  ) : (
    <Login onLoginSuccess={handleLoginSuccess} />
  );
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
      { path: '/user', element: <UserDetail /> }
    ],
  },
  { path: '/logout', element: <Logout /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
