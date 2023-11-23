
export const stylesQuestion = {
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
}

export const stylesUserDetail = {
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

  export const stylesContainer = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    formContainer: {
      display: 'flex',
      width: '80%',
      maxWidth: '900px', // Limitando o tamanho máximo para telas maiores
      margin: '0 auto', // Centralizando horizontalmente
    },
    form: {
      flex: '1', // Ocupando o espaço disponível
      marginRight: '20px',
    },
    input: {
      width: '100%',
      marginBottom: '15px',
      padding: '8px',
      fontSize: '16px', // Ajustando o tamanho da fonte
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'blue',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px', // Ajustando o tamanho da fonte
    },
    cardContainer: {
      flex: '1', // Ocupando o espaço disponível
      backgroundColor: '#f2f2f2',
      padding: '20px',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      display: 'block', // Garantindo que a imagem se ajuste corretamente
      margin: '0 auto', // Centralizando horizontalmente
    },
    cardContainer: {
      flex: '1',
      backgroundColor: '#f2f2f2',
      padding: '20px',
      textAlign: 'center', // Aligning the title at the center
    },
    appTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: '0',
    },
  };

  export const stylesHome = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    cardContainer: {
      width: '100%',
      maxWidth: '700px',
      backgroundColor: '#f2f2f2',
      padding: '20px',
      marginBottom: '20px',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
    p: {
      padding: '20px',
      textAlign: 'center',
      maxWidth: '700px',
    },
  };