import connectDB from '../lib/mongodb.js'
import Post from '../models/Post.js'
import { verifyToken, getToken } from '../lib/auth.js'

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

export default async function handler(req, res) {
  cors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()

  try {
    await connectDB()
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }

  if (req.method === 'GET') {
    const posts = await Post.find({ published: true }).sort({ createdAt: -1 }).select('-content')
    return res.json(posts)
  }

  if (req.method === 'POST') {
    const token = getToken(req)
    try { verifyToken(token) } catch {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    try {
      const post = await Post.create(req.body)
      return res.status(201).json(post)
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
