import { useState } from 'react';
import { stylesContainer } from '../../css/styles';
import LoginService from '../../services/Login.service';
import notify from '../utils/Notification';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const system_users = await LoginService.getUsers()
    console.log(system_users.data)

    let userIsExists = system_users.data.find(user => user.username == username.trim())

    if(!userIsExists) {
      notify('error', 'Usuário não existe')
      return;
    } 

    if(userIsExists.password != password.trim()){
      notify('error', 'Senha incorreta')
      return;
    }

    onLoginSuccess();
    return true;
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const styles = stylesContainer;

  return  (
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
          <h1 style={styles.appTitle}>Secret Cure: o caminho para a salvação</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;