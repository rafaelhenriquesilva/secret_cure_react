
import React from 'react';

const MessageUtil = ({ message }) => {
  const styles = {
    container: {
      backgroundColor: '#f0f0f0',
      padding: '10px',
      borderRadius: '5px',
      margin: '20px 0',
    },
  };

  return (
    <div style={styles.container}>
      <p>{message}</p>
    </div>
  );
};

export default MessageUtil;
