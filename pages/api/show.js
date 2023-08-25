import { connectDB } from '../../util/database'

export default async function handler(요청, 응답) {  
  const db = (await connectDB).db('molegame')
  const result = await db.collection('score').find().toArray()
  return 응답.status(200).json(result)
}
