import React from 'react';
import atadura from '../../assets/atadura.png'
import { stylesUserDetail } from '../../css/styles'
const UserDetail = () => {
  const styles = stylesUserDetail

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
