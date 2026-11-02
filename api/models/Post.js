import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title:     { type: String, required: true, trim: true },
  slug:      { type: String, required: true, unique: true, lowercase: true, trim: true },
  excerpt:   { type: String, required: true, trim: true },
  content:   { type: String, required: true },
  tag:       { type: String, default: 'General', trim: true },
  readTime:  { type: String, default: '5 min read' },
  published: { type: Boolean, default: false },
}, { timestamps: true })

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
