import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { LOCAL_URL } from '@/config/index'
import { TroubleshootOutlined } from '@mui/icons-material'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [backDrop, setBackDrop] = useState(false)
  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState(null)
  const [signUpError, setSignUpError] = useState(null)
  const [resendVerifyMessage, setResendVerifyMessage] = useState(null)
  const [openSnack, setOpenSnack] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkUserLoggedIn()
  }, [])

  // Login user
  const login = async ({ email, password }) => {
    setBackDrop(true)
    const res = await fetch(`${LOCAL_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      setBackDrop(false)

      setUser(data.username)
      setLoginError(null)

      router.push('/account/profile')
    } else {
      setBackDrop(false)
      setLoginError(data.message)
    }
  }

  // Sign up
  const signUpUser = async (user) => {
    setBackDrop(true)
    const res = await fetch(`${LOCAL_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    if (res.ok) {
      router.push('/account/profile')

      setUser(data.username)
      setSignUpError(null)
      setBackDrop(false)
    } else {
      setBackDrop(false)
      setSignUpError(data.message)
    }
  }

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${LOCAL_URL}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.username)
    } else {
      setUser(null)
    }
  }

  //logout user
  const logout = async () => {
    const res = await fetch(`${LOCAL_URL}/api/logout`, {
      method: 'POST',
    })
    if (res.ok) {
      setUser(null)
      router.push('/')
    }
  }

  // Resend verify link
  const resendVerifyLink = async (userId) => {
    setBackDrop(true)
    const res = await fetch(`${LOCAL_URL}/api/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    })

    const data = await res.json()

    if (res.ok) {
      setBackDrop(false)
      setOpenSnack(true)
      setResendVerifyMessage(null)
    } else {
      setBackDrop(false)
      setOpenSnack(true)
      setResendVerifyMessage(data)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        backDrop,
        loginError,
        signUpUser,
        signUpError,
        setSignUpError,
        setLoginError,
        user,
        logout,
        resendVerifyLink,
        resendVerifyMessage,
        openSnack,
        setOpenSnack,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
