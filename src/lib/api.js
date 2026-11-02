const BASE = import.meta.env.VITE_API_URL || ''

export function getToken() {
  try { return localStorage.getItem('admin_token') } catch { return null }
}
export function setToken(t) {
  try { localStorage.setItem('admin_token', t) } catch {}
}
export function clearToken() {
  try { localStorage.removeItem('admin_token') } catch {}
}

function authHeaders() {
  const t = getToken()
  return t ? { Authorization: `Bearer ${t}` } : {}
}

export async function loginAdmin(password) {
  const r = await fetch(`${BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  if (!r.ok) throw new Error((await r.json()).error || 'Login failed')
  const { token } = await r.json()
  setToken(token)
  return token
}

export async function getPublishedPosts() {
  const r = await fetch(`${BASE}/api/posts`)
  if (!r.ok) throw new Error('Failed to fetch posts')
  return r.json()
}

export async function getPost(slug) {
  const r = await fetch(`${BASE}/api/posts/${slug}`)
  if (!r.ok) throw new Error('Post not found')
  return r.json()
}

export async function getAllPostsAdmin() {
  const r = await fetch(`${BASE}/api/admin/posts`, { headers: authHeaders() })
  if (r.status === 401) { clearToken(); throw new Error('Unauthorized') }
  if (!r.ok) throw new Error('Failed to fetch posts')
  return r.json()
}

export async function createPost(data) {
  const r = await fetch(`${BASE}/api/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  if (!r.ok) throw new Error((await r.json()).error || 'Failed to create post')
  return r.json()
}

export async function updatePost(id, data) {
  const r = await fetch(`${BASE}/api/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  if (!r.ok) throw new Error((await r.json()).error || 'Failed to update post')
  return r.json()
}

export async function deletePost(id) {
  const r = await fetch(`${BASE}/api/posts/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  if (!r.ok) throw new Error('Failed to delete post')
  return r.json()
}

export function slugify(title) {
  return title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function calcReadTime(content) {
  const words = content.trim().split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}
