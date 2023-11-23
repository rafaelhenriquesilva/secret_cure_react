import React, { useState, useEffect } from 'react';
import atadura from '../../assets/atadura.png';
import { stylesUserDetail } from '../../css/styles';
import UserDetailService from '../../services/UserDetail.service';

const UserDetail = () => {
  const styles = stylesUserDetail;
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await UserDetailService.getInfo();
  
        let combinedUserData = { ...response.data };
  
        if (localStorage.getItem('userInfo')) {
          const localStorageData = JSON.parse(localStorage.getItem('userInfo'));
  
          combinedUserData.user_info = localStorageData['user_info']
          console.log(`localStorageData => ${JSON.stringify(localStorageData)}`)
        }
  
        setUserDetail(combinedUserData);
      } catch (error) {
        // Lida com erros na requisição
        console.error('Erro ao carregar detalhes do usuário:', error);
      }
    };
  
    loadData();
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
                  width: 'calc(33.33% - 20px)', 
                  margin: '10px', 
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
