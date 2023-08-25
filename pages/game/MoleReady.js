import styles from '../../styles/MoleGame.module.css';

export default function Ready() {
  return (
    <div>
      <div className={styles.do_not_drag} style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px' }}>두더지 잡기 게임</h3>
        <div className={styles.container}>
        <div className={`${styles.do_not_drag} ${styles.gameReady}`} />
        </div>
      </div>
    </div>
  )
}
