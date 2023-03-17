import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
  if (req.method === 'DELETE') {
    const { word } = req.body
    const { token } = parseCookies(req)

    const backendRes = await fetch(`${API_URL}/api/words`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        word: word,
      }),
    })

    await backendRes.json()

    if (backendRes.ok) {
      res.status(200).json({ data: 'The word has been deleted' })
    } else {
      //400 Bad request
      res.status(400).json({ data: 'Something went wrong, please try again' })
    }
  } else {
    res.setHeader('Allow', ['DELETE'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
