import mongoose from 'mongoose'

let conn = null
let promise = null

export default async function connectDB() {
  if (conn) return conn
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI environment variable is not set')
  if (!promise) {
    promise = mongoose.connect(uri, { bufferCommands: false })
  }
  conn = await promise
  return conn
}
