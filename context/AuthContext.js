import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { LOCAL_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [backDrop, setBackDrop] = useState(false)
  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState(null)
  const [signUpError, setSignUpError] = useState(null)
  const router = useRouter()

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
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
