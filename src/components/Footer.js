import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>This Is The Footer</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'lightblue',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  text: {
    color: 'white',
  },
};

export default Footer;
