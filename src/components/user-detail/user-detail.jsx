import React from 'react';
import atadura from '../../assets/atadura.png'
const UserDetail = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
    },
    userDetails: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    userImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginRight: '20px',
    },
    level: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: '#e6e6e6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      position: 'relative',
    },
    levelBar: {
      position: 'absolute',
      width: '8px',
      height: '70px',
      backgroundColor: '#4caf50',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '4px',
      zIndex: '-1',
    },
    achievements: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    heroCard: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
      },
      heroDescription: {
        fontSize: '18px',
        lineHeight: '1.6',
      },
      achievement: {
        position: 'relative',
        width: '45%',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
        transition: 'transform 0.3s ease-in-out',
      },
      achievementHover: {
        position: 'absolute',
        top: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '5px',
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      },
      achievementText: {
        fontSize: '14px',
      },
      achievementHoverText: {
        fontSize: '12px',
      },
      locked: {
        opacity: '0.5',
      },
    '@media (max-width: 768px)': {
        userDetails: {
          maxWidth: '100%',
          borderRadius: 0,
        },
        userInfo: {
          flexDirection: 'column',
          alignItems: 'center',
        },
        userImage: {
          marginBottom: '15px',
          marginRight: 0,
        },
        level: {
          marginBottom: '20px',
        },
        achievements: {
          flexDirection: 'column',
        },
        achievement: {
          width: '100%',
          marginBottom: '15px',
        },
        heroCard: {
            marginBottom: '10px',
        }
      },
  };

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
      <div style={styles.userInfo}>
        <img src={atadura} alt="User Avatar" style={styles.userImage} />
        <div style={styles.level}>
          Level 5
          <div style={styles.levelBar}></div>
        </div>
      </div>
      <div style={styles.heroCard}>
        <h2>Descrição do Herói</h2>
        <p style={styles.heroDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros justo. Integer euismod euismod lacus, eget eleifend nisi dapibus a.
        </p>
      </div>
      <h2>Conquistas</h2>
      <div style={styles.achievements}>
        <div
          style={styles.achievement}
          onMouseEnter={handleAchievementHover}
          onMouseLeave={handleAchievementLeave}
        >
          Conquista 1 (Desbloqueada)
          <div className="hover-text" style={{ ...styles.achievementHover, ...styles.achievementHoverText }}>
            Descrição da Conquista 1
          </div>
        </div>
        <div
          style={{ ...styles.achievement, ...styles.locked }}
          onMouseEnter={handleAchievementHover}
          onMouseLeave={handleAchievementLeave}
        >
          Conquista 2 (Bloqueada)
          <div className="hover-text" style={{ ...styles.achievementHover, ...styles.achievementHoverText }}>
            Descrição da Conquista 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
