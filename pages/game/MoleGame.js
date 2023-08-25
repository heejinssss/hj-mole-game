import { useState, useEffect } from 'react';
import Ready from './MoleReady';
import Go from './MoleGo';
import Result from './MoleResult'
import styles from '../../styles/MoleGame.module.css';

const getRandomGridPosition = () => ({
  row: Math.floor(Math.random() * 3), // 0, 1, 2
  col: Math.floor(Math.random() * 3), // 0, 1, 2
});

export default function Main({ sec }) {

  return (
    <div>
      <MoleGame sec={sec} />
    </div>
  )
}

/* Main Game [S] */
function MoleGame({ sec }) {

  const [score, setScore] = useState(0);
  const [molePositions, setMolePositions] = useState([]);
  const [showHitMole, setShowHitMole] = useState(false);
  const [hitMolePosition, setHitMolePosition] = useState({ row: 0, col: 0 });
  const [ready, setReady] = useState('ready')

  const handleMoleClick = (index) => {
    if (molePositions[index]) {
      setScore((prevScore) => prevScore + 1);
      setShowHitMole(true);
      setHitMolePosition(molePositions[index]);
      const newMolePositions = [...molePositions];
      newMolePositions[index] = null;
      setMolePositions(newMolePositions);
      setTimeout(() => {
        setShowHitMole(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const generateMole = () => {
      const freshMolePositions = Array(3).fill(null).map(() => getRandomGridPosition());
      setMolePositions(freshMolePositions);
    };

    const moleTimer = setInterval(generateMole, 1000); // mole up and down speed
    return () => clearInterval(moleTimer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setReady('go')
    }, 2000)

    setTimeout(() => {
      setReady('game')
    }, 4000)
  }, [])

  return (
    <div style={{
      textAlign: 'center',
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -20%)'
    }}>
      <div className={`${styles.do_not_drag} ${styles.logo}`} ></div>

      {ready === 'ready' && (
        <Ready />
      )}

      {ready === 'go' && (
        <Go />
      )}

      {/* Ranking */}
      {ready === 'game' && sec > 0 && (
        <div className={styles.do_not_drag} style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px' }}>{score}마리를 잡았어요! {sec}초 남았습니다!</h3>
          <div className={styles.container}>
            {molePositions.map((molePosition, index) => (
              molePosition && (
                <div className={`${styles.do_not_drag} ${styles.moleUp}`}
                  key={index}
                  onClick={() => handleMoleClick(index)}
                  style={{
                    position: 'absolute',
                    top: `${molePosition.row * 33.33}%`,
                    left: `${molePosition.col * 33.33}%`,
                    cursor: 'pointer',
                  }}
                />
              )
            ))}
            {showHitMole && (
              <div className={`${styles.do_not_drag} ${styles.moleHit}`}
                style={{
                  position: 'absolute',
                  top: `${hitMolePosition.row * 33.33}%`,
                  left: `${hitMolePosition.col * 33.33}%`,
                }}
              />
            )}
          </div>
        </div>
      )}

      {ready === 'game' && sec <= 0 && (
        <Result score={score} />
      )}

    </div>
  )
}
/* Main Game [E] */
