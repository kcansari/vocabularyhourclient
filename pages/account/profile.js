import React from 'react'
import { Box } from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import AuthContext from '@/context/AuthContext.js'
import WordContext from '@/context/WordContext'
import { useContext, useEffect } from 'react'
import Verify from '@/modules/views/Verify'
import ProfileTable from '@/modules/views/ProfileTable'
import { useRouter } from 'next/router'

function Profile({ user }) {
  const router = useRouter()
  const {
    resendVerifyLink,
    backDrop,
    resendVerifyMessage,
    openSnack,
    setOpenSnack,
  } = useContext(AuthContext)

  const { status } = useContext(WordContext)

  useEffect(() => {
    router.replace(router.asPath)
  }, [status])

  const submitHandler = (e) => {
    e.preventDefault()
    resendVerifyLink(user._id)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <NavBar />
      <Box>
        {user.verified ? (
          <ProfileTable user={user} />
        ) : (
          <Verify
            resendVerifyMessage={resendVerifyMessage}
            handleClose={handleClose}
            userMail={user.email}
            submitHandler={submitHandler}
            backDrop={backDrop}
            openSnack={openSnack}
          />
        )}
      </Box>
    </Box>
  )
}

export default Profile

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/api/users/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const user = await res.json()

  return {
    props: {
      user,
      token,
    },
  }
}
