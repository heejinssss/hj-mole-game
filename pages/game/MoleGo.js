import styles from '../../styles/MoleGame.module.css';

export default function Go() {
  return (
    <div>
      <div className={styles.do_not_drag} style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px' }}>30초 시작합니다</h3>
        <div className={styles.container}>
          <div className={`${styles.do_not_drag} ${styles.gameStart}`} />
        </div>
      </div>
    </div>
  )
}
