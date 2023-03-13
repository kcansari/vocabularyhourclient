import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  LinearProgress,
  Snackbar,
  Typography,
} from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import {
  Close,
  MailLock,
  MarkEmailRead,
  RocketLaunch,
} from '@mui/icons-material'
import AuthContext from '@/context/AuthContext.js'
import { useState, useEffect, useContext } from 'react'

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

  const action = (
    <>
      <RocketLaunch sx={{ mr: 2, color: '#e32636' }} />
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <Close fontSize='small' />
      </IconButton>
    </>
  )

  return (
    <>
      <NavBar />
      <ThemeProvider theme={themeLight}>
        <CssBaseline />

        {user.verified ? (
          'profile'
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              minHeight: '100vh',
            }}
          >
            <Container>
              {/* MAIN */}
              <Grid
                container
                direction='column'
                justifyContent='space-evenly'
                alignItems='center'
                spacing={4}
                sx={{ mt: 2 }}
              >
                {/* LOGO AND TITLE */}
                <Grid
                  container
                  item
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                >
                  {/* LOGO */}
                  <Grid item>
                    <Avatar sx={{ width: 96, height: 96, bgcolor: '#A75D5D' }}>
                      <MailLock sx={{ fontSize: 60, color: '#EEEEEE' }} />
                    </Avatar>
                  </Grid>
                  {/* LOGO */}
                  {/* TITLE */}
                  <Grid item>
                    <Typography
                      variant='h5'
                      sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        color: '#143F6B',
                        mt: 2,
                      }}
                    >
                      Verify your account
                    </Typography>
                  </Grid>
                  {/* TITLE */}
                </Grid>
                {/* LOGO AND TITLE */}

                {/* CONTENT*/}
                <Grid
                  container
                  item
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                >
                  <Grid item>
                    <Typography>
                      {' '}
                      We &apos;ve sent a email to <strong>
                        {user.email}
                      </strong>{' '}
                      to verify your email address and activate your account.
                      The link in the email will expire an hour.
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Button
                      variant='text'
                      color='buttonColor'
                      onClick={submitHandler}
                    >
                      <strong>Click here</strong>
                    </Button>{' '}
                    if you did not receive an email.
                  </Grid>
                </Grid>
              </Grid>
              {/* MAIN */}
              {backDrop && <LinearProgress color='buttonColor' />}
              <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={openSnack}
                autoHideDuration={6000}
                onClose={handleClose}
                message={
                  resendVerifyMessage === null
                    ? 'An email sent to your account please verify.'
                    : `Your message has been sent to space`
                }
                action={action}
                key={'bottom' + 'right'}
              />
            </Container>
          </Box>
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
