import { API_URL } from '@/config/index'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
  if (req.method === 'POST') {
    const { id, token } = req.body
    console.log(id, token)
    const backendRes = await fetch(`${API_URL}/verify/${id}/${token}`, {
      method: 'GET',
    })

    const data = await backendRes.json()

    if (backendRes.ok) {
      res.status(200).json(data)
    } else {
      res.status(403).json(data)
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
