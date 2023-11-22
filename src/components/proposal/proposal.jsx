import React from 'react';

function PropostaCard() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    },
    header: {
      backgroundColor: '#2980b9',
      padding: '20px',
      color: '#fff',
    },
    body: {
      padding: '20px',
    },
    card: {
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
      width: '100%',
      maxHeight: '300px',
      margin: 'auto',
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.body}>
          <p>
            A medicina é uma área complexa e desafiadora. É preciso ter um conhecimento profundo do corpo humano, das doenças e dos tratamentos disponíveis. No entanto, nem sempre é fácil aprender tudo isso.
          </p>
          <p>
            É aí que entra o Secret Cure, um jogo que usa a gamificação para ensinar medicina de forma divertida e envolvente.
          </p>
          <p>
            No Secret Cure, o jogador assume o papel de um médico. Ele é desafiado a diagnosticar doenças e salvar vidas. Para isso, ele precisa aprender sobre os sintomas das doenças, os tratamentos disponíveis e as melhores práticas médicas.
          </p>
          <p>
            O jogo é dividido em vários níveis, cada um com um desafio diferente. À medida que o jogador avança, ele aprende mais sobre medicina e se torna um médico melhor.
          </p>
          <p>
            O Secret Cure tem o potencial de revolucionar a educação médica. Ele pode ajudar a tornar a medicina mais acessível e inclusiva, e pode ajudar a formar médicos mais preparados e qualificados.
          </p>
          <p>
            Os benefícios do Secret Cure incluem:
          </p>
          <ul>
            <li>Aprendizado divertido e envolvente</li>
            <li>Acessibilidade</li>
            <li>Inclusão</li>
            <li>Qualificação</li>
          </ul>
          <p>
            O Secret Cure ainda está em desenvolvimento, mas já tem o potencial de mudar a forma como a medicina é ensinada.
          </p>
          <p>
            Os desenvolvedores do jogo planejam expandir o conteúdo do jogo para incluir mais doenças e tratamentos. Eles também planejam criar ferramentas para ajudar os professores a usar o jogo em sala de aula.
          </p>
          <p>
            O Secret Cure é um projeto promissor que tem o potencial de fazer uma grande diferença no mundo.
          </p>
        </div>
      </div>
    </div>
  );
}

  
  export default PropostaCard;

