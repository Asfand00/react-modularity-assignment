import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>This Is The Header</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'lightblue',
    padding: '1rem',
  },
  title: {
    fontSize: '2rem',
    color: 'white',
  },
};

export default Header;
