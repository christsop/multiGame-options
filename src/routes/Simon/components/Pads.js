import React from 'react';
import styles from './PlayingView.scss';

export let Pads = ({ offlinePad, onlinePad, gameState }) => {
  if (gameState === 'started') {
    return (
      <div className='circle'>
        <p className={styles.firstpad}  onClick={() => (offlinePad('first'))} id='first' ></p>
        <p className={styles.secondpad} onClick={() => (offlinePad('second'))} id='second'></p>
        <p className={styles.thirdpad} onClick={() => (offlinePad('third'))} id='third'></p>
        <p className={styles.fourthpad} onClick={() => (offlinePad('fourth'))} id='fourth'></p>
      </div>
    );
  } else {
    return (
      <div className='circle'>
        <p className={styles.firstpad} onClick={() => (onlinePad('first'))} id='first' ></p>
        <p className={styles.secondpad} onClick={() => (onlinePad('second'))} id='second'></p>
        <p className={styles.thirdpad} onClick={() => (onlinePad('third'))} id='third'></p>
        <p className={styles.fourthpad} onClick={() => (onlinePad('fourth'))} id='fourth'></p>
      </div>
    );
  }
};
