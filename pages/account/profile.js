import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import AuthContext from '@/context/AuthContext.js'
import WordContext from '@/context/WordContext'
import { useContext, useEffect } from 'react'
import Verify from '@/modules/views/Verify'
import ProfileTable from '@/modules/views/ProfileTable'
import { useRouter } from 'next/router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Layout from '@/modules/components/LayotComponent'

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
  const router = useRouter()
  const {
    resendVerifyLink,
    backDrop,
    resendVerifyMessage,
    openSnack,
    setOpenSnack,
  } = useContext(AuthContext)

  const { setrefreshControl, refreshControl } = useContext(WordContext)

  useEffect(() => {
    if (refreshControl) {
      router.replace(router.asPath)
      setrefreshControl(false)
      console.log('useEffect')
    }
  }, [refreshControl])

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
          {user.verified === true && <ProfileTable user={user} />}
          {user.verified === false && (
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
      </Box>
    </Layout>
  )
}

export default Profile

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  console.time('res')
  const res = await fetch(`${API_URL}/api/users/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const user = await res.json()
  console.timeEnd('res')
  return {
    props: {
      user,
    },
  }
}
