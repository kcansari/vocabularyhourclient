import { useState } from 'react'
import {
  Box,
  Grid,
  TextField,
  Typography,
  Container,
  Snackbar,
  IconButton,
  Button,
} from '@mui/material'
import { Send, Close, RocketLaunch } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)

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

  const handleSubmit = (event) => {
    event.preventDefault()

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setName('')
      setEmail('')
      setMessage('')
      setOpenSnack(true)
      // console.log(
      //   `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nLoading: ${loading} `
      // )
    }, 2200)
  }

  return (
    <Box
      sx={{
        bgcolor: '#EEE9DA',
        display: 'flex',
        flexWrap: 'wrap',
        height: '700px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid
            container
            item
            xs={12}
            justifyContent='center'
            alignItems='center'
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                color: '#143F6B',
                typography: {
                  xs: 'h3',
                  sm: 'h2',
                  md: 'h2',
                  lg: 'h2',
                  xl: 'h2',
                },
              }}
            >
              Get Contact
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Message'
              multiline
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              variant='outlined'
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent='center'
            alignItems='center'
          >
            <LoadingButton
              size='large'
              sx={{
                color: '#fff',
                px: 6,
                bgcolor: '#293462',
                '&:hover': {
                  backgroundColor: '#3c52b2',
                  color: '#fff',
                },
              }}
              variant='contained'
              endIcon={<Send />}
              onClick={handleSubmit}
              loading={loading}
              loadingPosition='end'
            >
              Send
            </LoadingButton>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleClose}
          message={`Your message has been sent to space`}
          action={action}
          key={'bottom' + 'right'}
        />
      </Container>
    </Box>
  )
}

export default Contact
