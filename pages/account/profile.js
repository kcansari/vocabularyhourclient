import { Box, CssBaseline } from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import AuthContext from '@/context/AuthContext.js'
import WordContext from '@/context/WordContext'
import { useContext, useEffect, useState } from 'react'
import Verify from '@/modules/views/Verify'
import ProfileTable from '@/modules/views/ProfileTable'
import { useRouter } from 'next/router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Layout from '@/modules/components/LayotComponent'
import cookie from 'cookie'

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

function Profile() {
  const router = useRouter()

  const {
    resendVerifyLink,
    backDrop,
    resendVerifyMessage,
    openSnack,
    setOpenSnack,
    profileData,
    userData,
  } = useContext(AuthContext)

  const { setrefreshControl, refreshControl } = useContext(WordContext)

  useEffect(() => {
    profileData()

    if (refreshControl) {
      router.replace(router.asPath)
      setrefreshControl(false)
    }
  }, [refreshControl])

  const submitHandler = (e) => {
    e.preventDefault()
    resendVerifyLink(userData._id)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  return (
    <Layout title={'Profile Page Vocabulary Hour'}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NavBar />
        <ThemeProvider theme={themeLight}>
          <CssBaseline />
          {userData.verified === true && <ProfileTable user={userData} />}
          {userData.verified === false && (
            <Verify
              resendVerifyMessage={resendVerifyMessage}
              handleClose={handleClose}
              userMail={userData.email}
              submitHandler={submitHandler}
              backDrop={backDrop}
              openSnack={openSnack}
            />
          )}
        </ThemeProvider>
      </Box>
    </Layout>
  )
}

export default Profile
