import cookie from 'cookie'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/config/index'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
  if (req.method === 'PUT') {
    const { username, password } = req.body
    const { token } = parseCookies(req)
    // console.log(req.body)

    const backendRes = await fetch(`${API_URL}/api/users/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })

    const data = await backendRes.json()
    // console.log(data)

    if (backendRes.ok) {
      res.status(200).json({ data: data })
    } else {
      //400 Bad request
      res.status(400).json({ data: data })
    }
  } else {
    res.setHeader('Allow', ['PUT'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
