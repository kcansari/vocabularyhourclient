import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
  if (req.method === 'PUT') {
    const { name, meaning, currentName } = req.body
    const { token } = parseCookies(req)

    const backendRes = await fetch(`${API_URL}/api/words`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        meaning: meaning,
        currentName: currentName,
      }),
    })

    const data = await backendRes.json()

    if (backendRes.ok) {
      res.status(200).json({ data: data.message })
    } else {
      //400 Bad request
      res.status(400).json({ data: data.message })
    }
  } else {
    res.setHeader('Allow', ['PUT'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
