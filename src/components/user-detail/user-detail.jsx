import React, { useState, useEffect } from 'react';
import atadura from '../../assets/atadura.png';
import { stylesUserDetail } from '../../css/styles';

const UserDetail = () => {
  const styles = stylesUserDetail;
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const userDetailData = {
      "user_info": {
        "name": "Rafa",
        "email": "rafa@mail.com",
        "level": 2
      },
      "achievements": [
        {
          "min_level": 0,
          "max_level": 0,
          "title": "Desbravador",
          "text": "Mergulhe no apaixonante mundo da medicina"
        },
        {
          "min_level": 1,
          "max_level": 1,
          "title": "Iniciante dos diagnosticos",
          "text": "Tu esta plantando as sementes do conhecimento medicinal, aprendendo a interpretar os sinais e sintomas para encontrar o caminho certo para os pacientes."
        },
        {
          "min_level": 2,
          "max_level": 2,
          "title": "Intermediario dos diagnosticos",
          "text": "Tu esta aprimorando suas habilidades, conectando os pontos e iniciando a ver padroes. Continue assim, cada diagnostico um degrau rumo a maestria."
        },
        {
          "min_level": 3,
          "max_level": 3,
          "title": "Mestre dos diagnosticos",
          "text": "Seu olhar clinico afiado e suas assertividade. Continue inspirando outros com seu empenho e conhecimento na busca pela saude dos pacientes."
        },
        {
          "min_level": 4,
          "max_level": 4,
          "title": "Especialista dos diagnosticos",
          "text": "Sua habilidade em diagnosticar casos complexos notavel e seu compromisso com a excelÃªncia admiravel."
        },
        {
          "min_level": 5,
          "max_level": 100,
          "title": "Indomavel dos diagnosticos",
          "text": "Sua abordagem unica, sua curiosidade insaciavel e sua capacidade de enfrentar desafios incomparavel. Continue desbravando novos horizontes na medicina!"
        }
      ]
    };
    setUserDetail(userDetailData);
  }, []);

  const handleAchievementHover = (e) => {
    e.currentTarget.querySelector('.hover-text').style.visibility = 'visible';
    e.currentTarget.querySelector('.hover-text').style.opacity = '1';
  };

  const handleAchievementLeave = (e) => {
    e.currentTarget.querySelector('.hover-text').style.visibility = 'hidden';
    e.currentTarget.querySelector('.hover-text').style.opacity = '0';
  };

  return (
    <div style={styles.userDetails}>
      {userDetail && (
        <>
          <div style={styles.userInfo}>
            <img src={atadura} alt="User Avatar" style={styles.userImage} />
            <div style={styles.level}>
              Level {userDetail.user_info.level}
              <div style={styles.levelBar}></div>
            </div>
          </div>
          <div style={styles.heroCard}>
            <h2>Descrição do Herói</h2>
            <p style={styles.heroDescription}>
              Prepare-se para uma jornada onde salvar vidas se torna uma aventura épica! No universo dos games, mergulhe fundo na medicina, onde cada diagnóstico é uma missão e cada paciente é um desafio a ser vencido. Descubra a emoção de aprender salvando vidas neste jogo eletrizante, onde o conhecimento se transforma em poder, e a medicina se torna a mais envolvente das conquistas!
            </p>
          </div>
          <h2>Conquistas</h2>
          <div style={{ ...styles.achievements, display: 'flex', flexWrap: 'wrap' }}>
            {userDetail.achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  ...styles.achievement,
                  width: 'calc(33.33% - 20px)', // Ajuste aqui para deixar 3 colunas com espaçamento de 20px
                  margin: '10px', // Espaçamento entre as conquistas
                  ...(achievement.min_level <= userDetail.user_info.level
                    ? { backgroundColor: '#c7ffd8' }
                    : { backgroundColor: '#ffc7c7' }
                  ),
                }}
                onMouseEnter={handleAchievementHover}
                onMouseLeave={handleAchievementLeave}
              >
                {achievement.title} 
                <div
                  className="hover-text"
                  style={{
                    ...styles.achievementHover,
                    ...styles.achievementHoverText,
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    visibility: 'hidden',
                    opacity: '0',
                    backgroundColor: achievement.min_level <= userDetail.user_info.level ? '#c7ffd8' : '#ffc7c7',
                    color: '#000',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    zIndex: '1',
                    textAlign: 'center',
                    width: '80%',
                  }}
                >
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetail;
