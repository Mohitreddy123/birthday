import React, { useEffect, useState } from "react";
import "./App.css";
import image from './image.jpg';
import BirthdayMusic from "./brother.mp3";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const App = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const playBirthdayMusic = () => {
    const audio = new Audio(BirthdayMusic);
    audio.play();
  };
  useEffect(() => {
    const startConfetti = () => {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
    };
    startConfetti();
  }, []);

  return (
    <div className="app">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
        />
      )}
      <header className="header">
        <h1>Birthday Wishes to My Brother</h1>
      </header>
      <div className="content">
        <img src={image} alt="Brother" className="brother-image" />
        <div className="wishes">
          <h2>Dear Brother,</h2>
          <p>
            Wishing you a very happy birthday! May your day be filled with
            joy, laughter, and all the things that make you happy.
          </p>
          <p>Thank you for being an amazing brother!</p>
          <p>With lots of love,</p>
          <h4>A.M.R</h4>
        </div>
      </div>
      <footer className="footer">
        <audio src={BirthdayMusic}></audio>
        <button onClick={playBirthdayMusic} className="music-button">
          🎵 Play Birthday Music
        </button>
      </footer>
    </div>
  );
};

export default App;
