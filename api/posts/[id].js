import connectDB from '../lib/mongodb.js'
import Post from '../models/Post.js'
import { verifyToken, getToken } from '../lib/auth.js'

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS')
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

  const { id } = req.query

  if (req.method === 'GET') {
    // Try by slug first (public), then by _id (admin)
    const post = await Post.findOne({ slug: id, published: true })
      || await Post.findById(id).catch(() => null)
    if (!post) return res.status(404).json({ error: 'Post not found' })
    return res.json(post)
  }

  const token = getToken(req)
  try { verifyToken(token) } catch {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'PUT') {
    try {
      const post = await Post.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
      if (!post) return res.status(404).json({ error: 'Post not found' })
      return res.json(post)
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

  if (req.method === 'DELETE') {
    await Post.findByIdAndDelete(id)
    return res.json({ success: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
