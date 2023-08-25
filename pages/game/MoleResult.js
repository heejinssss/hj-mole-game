import styles from '../../styles/MoleGame.module.css'

export default function Result({ score }) {

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ marginBottom: '20px' }}>{score}마리 잡기 성공</h3>

      <form action="/api/new" method="POST">
        <div>
        <div style={{ display: 'block' }}>이름 <input className={styles.userInfo} name="userId" type="text" placeholder="이름 입력주세요 *^^*" /></div>
        <div style={{ display: 'block' }}>점수 <input className={styles.userInfo} name="score" type="text" value={score} readOnly /></div>
        <div style={{ display: 'block' }}>소감 <input className={styles.userInfo} name="comment" type="text" placeholder='소감 한마디' /></div>
        <button className={styles.saveBtn} type="submit">저장</button>
        </div>
      </form>

    </div>
  )
}
