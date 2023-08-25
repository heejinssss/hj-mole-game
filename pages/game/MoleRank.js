import { useRouter } from 'next/router';
import styles from '../../styles/MoleGame.module.css'
import { useEffect, useState } from 'react';

export default function Rank() {
  
  const [obj, setObj] = useState([])
  const router = useRouter()

  useEffect(() => {
    (async () => {
      const data = await (await fetch('/api/show')).json();
      setObj(data)
    })();
  }, []);
  
  obj.sort((a, b) => parseInt(b.score) - parseInt(a.score));

  return (
    <div className={styles.list_bg}>
      <p style={{ margin: '20px', fontFamily: 'EF_jejudoldam', fontSize: '30px' }}>순위를 확인하세요</p>
        {
          obj.map((obj, i)=>{
            return (
              <div className={styles.list_item} key={ i }>
                <div>
                  {/* <h4>❤️{i+1}등❤️</h4> */}
                  {
                    i == 0 ?
                    <div>
                      <h4>🎉🎉🎉🎉🎉🎉영광의 ❤️1등❤️🎉🎉🎉🎉🎉🎉</h4>
                      <h4>이름 : { obj.userId }</h4>
                      <h4>잡은 두더지 수 : { obj.score }마리</h4>
                      <h4>한마디 : { obj.comment }</h4>
                      <h4>🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉</h4>
                    </div>
                    : null
                  }
                  { i != 0 ?
                  <div>
                    <h4>이름 : { obj.userId }</h4>
                    <h4>잡은 두더지 수 : { obj.score }마리</h4>
                    <h4>한마디 : { obj.comment }</h4>
                  </div>
                  : null
                  }
                </div>
              </div>
            )
          })
        }
      <button onClick={() => router.push('/game')} className={styles.goToGameBtn}>게임 또 하러 가기</button>
    </div>
  )
}
