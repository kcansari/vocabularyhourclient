import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { LOCAL_URL } from '@/config/index'
import { TroubleshootOutlined } from '@mui/icons-material'

const WordContext = createContext()

export const WordProvider = ({ children }) => {
  const [backDrop, setBackDrop] = useState(false)
  const [status, setStatus] = useState(false)
  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState(null)
  const [signUpError, setSignUpError] = useState(null)
  const [resendVerifyMessage, setResendVerifyMessage] = useState(null)
  const [openSnack, setOpenSnack] = useState(false)
  const [respondForgotPassword, setRespondForgotPassword] = useState(null)
  const [openMessage, setOpenMessage] = useState(false)
  const router = useRouter()

  useEffect(() => {}, [])

  // Add a new word
  const addNewWord = async (name, meaning) => {
    setBackDrop(true)
    const res = await fetch(`${LOCAL_URL}/api/word/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        meaning,
      }),
    })

    const data = await res.json()
    setStatus(data)
    setBackDrop(false)
  }

  // Delete a word
  const deleteWord = async (word) => {
    const res = await fetch(`${LOCAL_URL}/api/word/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        word,
      }),
    })

    const data = await res.json()
    setStatus(data)
  }

  return (
    <WordContext.Provider
      value={{
        addNewWord,
        backDrop,
        setBackDrop,
        status,
        deleteWord,
      }}
    >
      {children}
    </WordContext.Provider>
  )
}

export default WordContext
