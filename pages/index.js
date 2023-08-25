import { useRouter } from 'next/router';
import styles from '../styles/MoleGame.module.css'

export default function Home() {

  const router = useRouter()

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <button onClick={() => router.push('/game')}
      className={styles.goToGameBtn}
      style={{ width: '400px', height: '200px', fontSize: '30px' }}>
        두더지 잡으러 가기
      </button>
    </div>
  )
}
