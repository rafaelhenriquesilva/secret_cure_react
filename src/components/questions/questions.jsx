import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { stylesQuestion } from '../../css/styles'
import MessageUtil from '../utils/MessageUtil';
import notify from '../utils/Notification' 
import AppInfoService from '../../services/AppInfo.service';

const Questions = ({ category }) => {
  const [userLevel, setUserLevel] = useState(0);
  const [appInfo, setAppInfo] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState({});
  const [questionsData, setQuestionsData] = useState([
    {
      question: 'Pergunta 1?',
      options: ['Resposta A', 'Resposta B', 'Resposta C'],
    },
    {
      question: 'Pergunta 2?',
      options: ['Resposta A', 'Resposta B', 'Resposta C'],
    }
  ]);
  const [questionIndex, setQuestionIndex] = useState()
  const [answer, setAnswer] = useState()
  const [dynamicLength, setDynamicLength] = useState(5)

  useEffect(() => {
    const storedUserLevel = JSON.parse(localStorage.getItem('userInfo'))?.user_info?.level;
    setUserLevel(storedUserLevel || 0);
    const loadQuestions = async () => {
      let appInfo = await AppInfoService.getInfo()

      let questions = [];
      if (appInfo.data && appInfo.data.questions && appInfo.data.questions.length > 0) {
        setAppInfo(appInfo.data)
        questions = appInfo.data.questions.filter(e => e.category === category);
      }

      let questionsDataDynamic = [];

      for (let question of questions) {
        if (question.answers && question.answers.length > 0) {
          let answers = question.answers.map(e => e.text);
          
          if (answers && answers.length > 0) {
            let shuffledAnswers = shuffleList(answers)
            questionsDataDynamic.push({
              question: question.text,
              options: shuffledAnswers,
            });
          }
        }
      }

      if (questionsDataDynamic && questionsDataDynamic.length > 0) {
        setQuestionsData(questionsDataDynamic);
      }
    };

    loadQuestions();
  }, [category]);

  const handleChangeQuestion = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    setSelectedOption('');
  };

  // Função para embaralhar a lista
  const shuffleList = (list) => {
    let shuffledList = list.slice();

    // Lógica de embaralhamento
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return shuffledList;
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setQuestionIndex(currentQuestion)
    setAnswer(e.target.value)
  };

  const saveQuestion = (e) => {
    e.preventDefault()

    if(questionsData && questionsData.length == 0){
      notify('error','Acabou as questões por enquanto')

      return;
    }

    let questionAwnsered = questionsData[questionIndex - 1].question

    if (appInfo['questions'] && appInfo['questions'].length > 0) {
      let filteredQuestion = appInfo['questions'].filter(e => e.text == questionAwnsered)
      if (filteredQuestion && filteredQuestion.length > 0 && filteredQuestion[0].answers && filteredQuestion[0].answers.length > 0) {

        let filteredAnswer = filteredQuestion[0].answers.filter(e => e.text == answer)

        if (filteredAnswer && filteredAnswer.length > 0) {
          if (filteredAnswer[0].id == filteredQuestion[0].correct_answer_id) {
            // notify('success', 'Parabéns!')
            let newOrderQuestions = questionsData.filter(e => e.question != questionAwnsered)
            if(newOrderQuestions) {
              setQuestionsData(newOrderQuestions)
              setDynamicLength(newOrderQuestions.length)
              updateUserLevel()
            }
          } else {
            notify('error','Não foi dessa vez!')
          }
        }
      }
    }
  }

  const updateUserLevel = () => {
    const updatedUserLevel = userLevel + 1;
    setUserLevel(updatedUserLevel);
  
    let data = JSON.parse(localStorage.getItem('userInfo'));
    data.user_info.level = updatedUserLevel;
    localStorage.setItem('userInfo', JSON.stringify(data));
  };

  const styles = stylesQuestion


  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        {Array.from({ length: dynamicLength }, (_, index) => (
          <Button key={index + 1} onClick={() => handleChangeQuestion(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
      <div style={styles.questionSection}>
        {questionsData && questionsData.length >= currentQuestion && currentQuestion > 0 ? (
          <>
            <h6>{questionsData[currentQuestion - 1].question}</h6>
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
          </>
        ) : (
          <MessageUtil message="Este tópico não possui esta questão." />
        )}
      </div>
      <Button onClick={saveQuestion}>
        Salvar
      </Button>
    </div>
  );
};

export default Questions;
