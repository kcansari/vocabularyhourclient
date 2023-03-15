import { Close, MailLock, RocketLaunch } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Snackbar,
  Typography,
} from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

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

function Verify({
  resendVerifyMessage,
  handleClose,
  userMail,
  submitHandler,
  backDrop,
  openSnack,
}) {
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
    <ThemeProvider theme={themeLight}>
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

            {/* CONTENT TEXT & CONTENT BUTTON*/}
            <Grid
              container
              item
              direction='column'
              justifyContent='space-evenly'
              alignItems='center'
            >
              {/* CONTENT TEXT */}
              <Grid item>
                <Typography>
                  {' '}
                  We &apos;ve sent a email to <strong>{userMail}</strong> to
                  verify your email address and activate your account. The link
                  in the email will expire an hour.
                </Typography>
              </Grid>
              {/* CONTENT TEXT */}

              {/* CONTENT BUTTON */}
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
              {/* CONTENT BUTTON */}
            </Grid>
            {/* CONTENT TEXT & CONTENT BUTTON*/}
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
    </ThemeProvider>
  )
}

export default Verify
