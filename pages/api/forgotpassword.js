import { API_URL } from '@/config/index'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body
    const backendRes = await fetch(
      `${API_URL}/verify/forgotpassword/${email}`,
      {
        method: 'GET',
      }
    )
    const result = await backendRes.json()

    if (backendRes.ok) {
      res.status(200).json({ result })
    } else {
      res.status(403).json({ message: result })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
