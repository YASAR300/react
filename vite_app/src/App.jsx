import React from 'react';
import './style.css';
import Header from './Header';
import Container from './Container';
import ThreeSections from './ad';
import MainBox from './vid';
import Main from './m';

// import video from './img/2.mp4';
const App = () => {
  return (
    <div>
      <Header />
      <Container />
      <ThreeSections />
      <MainBox />
      <Main />
    </div>
  );
};

export default App;
