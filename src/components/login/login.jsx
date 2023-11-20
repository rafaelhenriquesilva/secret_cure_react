import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Lógica para enviar os dados para a API ou para autenticar o usuário
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    formContainer: {
      display: 'flex',
      width: '70%',
    },
    form: {
      width: '50%',
      marginRight: '20px',
    },
    input: {
      width: '100%',
      marginBottom: '15px',
      padding: '8px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'blue',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
    cardContainer: {
      width: '50%',
      backgroundColor: '#f2f2f2',
      padding: '20px',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
    },
  };

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
