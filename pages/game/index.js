import { useEffect, useState, useRef } from 'react';
import MoleGame from "./MoleGame";

export default function Home() {

  /* Timer [S] */
  const [sec, setSec] = useState(0);
  const time = useRef(33);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current <= -1) {
      clearInterval(timerId.current);
    }
  })
  /* Timer [E] */
  
  return (
    <div>
      <MoleGame sec={sec} />
    </div>
  )
}
