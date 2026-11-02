import connectDB from '../lib/mongodb.js'
import Post from '../models/Post.js'
import { verifyToken, getToken } from '../lib/auth.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(200).end()

  const token = getToken(req)
  try { verifyToken(token) } catch {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    await connectDB()
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }

  if (req.method === 'GET') {
    const posts = await Post.find().sort({ createdAt: -1 }).select('-content')
    return res.json(posts)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
