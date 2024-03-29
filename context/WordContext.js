import { createContext, useState, useEffect } from 'react'
import { LOCAL_URL } from '@/config/index'

const WordContext = createContext()

export const WordProvider = ({ children }) => {
  const [backDrop, setBackDrop] = useState(false)
  const [status, setStatus] = useState(false)
  const [refreshControl, setrefreshControl] = useState(false)

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
    setrefreshControl(true)
  }
  // Add a new word
  const editWord = async (name, meaning, currentName) => {
    setBackDrop(true)
    const res = await fetch(`${LOCAL_URL}/api/word/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        meaning,
        currentName,
      }),
    })

    const data = await res.json()
    setStatus(data)
    setBackDrop(false)
    setrefreshControl(true)
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
    setrefreshControl(true)
  }

  return (
    <WordContext.Provider
      value={{
        addNewWord,
        backDrop,
        setBackDrop,
        status,
        deleteWord,
        editWord,
        refreshControl,
        setrefreshControl,
      }}
    >
      {children}
    </WordContext.Provider>
  )
}

export default WordContext
