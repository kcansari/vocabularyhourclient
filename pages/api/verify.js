import cookie from 'cookie'
import { API_URL } from '@/config/index'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
  if (req.method === 'POST') {
    // console.log(req.body)
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not Authorized' })
      return
    }
    const { token } = cookie.parse(req.headers.cookie)
    const backendRes = await fetch(`${API_URL}/verify/resend/${req.body}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await backendRes.json()

    // console.log(data)

    if (backendRes.ok) {
      res.status(200).json({ data: data })
    } else {
      res.status(403).json({ message: data })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
