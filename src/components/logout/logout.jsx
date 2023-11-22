import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      // Lógica de logout...
      // Exemplo: limpar tokens, dados de autenticação, etc.

      navigate('/'); // Redireciona para a página de login após o logout
    };

    handleLogout();
  }, [navigate]);

  return null; // Não é necessário retornar conteúdo, já que é apenas para efetuar o logout
};

export default Logout;
