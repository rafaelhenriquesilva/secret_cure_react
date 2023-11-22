import { useState } from 'react';
import {stylesContainer} from '../../css/styles'
const Login = ({ onLoginSuccess  }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onLoginSuccess();
    return true;
    // Lógica para enviar os dados para a API ou para autenticar o usuário
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const styles = stylesContainer
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
          <button type="button" onClick={handleLogin} style={styles.button}>
            Entrar
          </button>
        </form>
        <div style={styles.cardContainer}>
          <img
            src="https://via.placeholder.com/400"
            alt="Imagem Bacana"
            style={styles.cardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
