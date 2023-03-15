import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, IconButton } from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import { Close, MailLock, RocketLaunch } from '@mui/icons-material'
import AuthContext from '@/context/AuthContext.js'
import { useState, useEffect, useContext } from 'react'
import Verify from '@/modules/views/Verify'
import ProfileTable from '@/modules/views/ProfileTable'

const themeLight = createTheme({
  palette: {
    background: {
      default: '#CFB997',
    },
    buttonColor: {
      main: '#293462',
      contrastText: '#fff',
    },
  },
})

function Profile({ user }) {
  const {
    resendVerifyLink,
    backDrop,
    resendVerifyMessage,
    openSnack,
    setOpenSnack,
  } = useContext(AuthContext)

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
    <>
      <NavBar />
      <ThemeProvider theme={themeLight}>
        <CssBaseline />

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
      </ThemeProvider>
    </>
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
