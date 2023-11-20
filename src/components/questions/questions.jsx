import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState({});

  const questionsData = [
    {
      question: 'Pergunta 1?',
      options: ['Resposta A', 'Resposta B', 'Resposta C'],
    },
    {
      question: 'Pergunta 2?',
      options: ['Resposta A', 'Resposta B', 'Resposta C'],
    },
    // Adicione mais objetos com perguntas e respostas conforme necessário
  ];

  const handleChangeQuestion = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    setSelectedOption('');
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    console.log('Pergunta:', currentQuestion, 'Resposta selecionada:', e.target.value);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#333', // Alterada para uma cor menos escura
      color: '#fff',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px'
    },
    questionSection: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    option: {
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    radioButton: {
        marginRight: '10px',
      },
    radioLabel: {
      color: '#fff',
      fontSize: '16px',
    },
  };

 
  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        {Array.from({ length: 5 }, (_, index) => (
          <Button key={index + 1} onClick={() => handleChangeQuestion(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
      <div style={styles.questionSection}>
        <h2>{questionsData[currentQuestion - 1].question}</h2>
        <Form style={styles.form}>
          {questionsData[currentQuestion - 1].options.map((option, index) => (
            <div key={index} style={styles.option}>
              <input
                type="radio"
                id={`option${index}`}
                name={`question${currentQuestion}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                style={styles.radioButton}
              />
              <label htmlFor={`option${index}`} style={styles.radioLabel}>
                {option}
              </label>
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
};

export default Questions;
