import { connectDB } from '../../util/database'

export default async function handler(요청, 응답) {
  if (요청.body.userID == '') { // 입력된 값이 없으면
    return 응답.status(500).json('아나따노 나마에와') // 에러 출력
  }

  if (요청.body.comment == '') { // 입력된 값이 없으면
    return 응답.status(500).json('한마디 입력 좀요') // 에러 출력
  }

  // 값이 모두 입력되면 DB에 저장
  const db = (await connectDB).db("molegame")
  await db.collection('score').insertOne(요청.body) // 'score' collection에 document 발행

  return 응답.status(200).redirect(302, '/game/MoleRank') // '경로'로 이동
}
