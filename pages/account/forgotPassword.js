import { ArrowBack, MailLock } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
import LoginIcon from '@mui/icons-material/Login'
import Link from 'next/link'

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

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#143F6B',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#143F6B',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#143F6B',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#143F6B',
    },
  },
  '& .MuiInputBase-input': {
    background: '#EEEEEE',
  },
})

const widthXl = 450,
  widthLg = 400,
  widthMd = 350,
  widthSm = 300,
  widthXs = 250

function Copyright(props) {
  return (
    <Box sx={{ mt: 4 }}>
      {' '}
      <Link
        href={'/'}
        style={{ textDecoration: 'none', color: 'inherit' }}
        {...props}
      >
        <Stack direction='row' alignItems='center' gap={1}>
          <ArrowBack sx={{ color: '#143F6B' }} />
          <Typography variant='subtitle1' color='#143F6B' align='center'>
            Vocabulary Hour
          </Typography>
        </Stack>
      </Link>
    </Box>
  )
}

function ForgotPassword() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
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
            {/* LOGO AND TEXT MAIN GRID */}
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
              {/* Header TEXT */}
              <Grid item>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: '#143F6B',
                    mt: 2,
                    typography: {
                      xs: 'h5',
                      sm: 'h4',
                      md: 'h4',
                      lg: 'h4',
                      xl: 'h4',
                    },
                  }}
                >
                  Reset password
                </Typography>
              </Grid>
              {/* Header TEXT */}

              {/* SUBTITLE TEXT */}
              <Grid item>
                <Typography
                  variant='subtitle2'
                  sx={{
                    color: '#143F6B',
                  }}
                >
                  Enter your email to reset your password
                </Typography>
              </Grid>
              {/* SUBTITLE TEXT */}
            </Grid>
            {/* LOGO AND TEXT MAIN GRID */}

            {/* TEXT AREA & BUTTON */}
            <Grid
              container
              item
              direction='column'
              justifyContent='space-evenly'
              alignItems='center'
            >
              {/* TEXT AREA */}
              <Grid
                item
                sx={{
                  width: {
                    xs: widthXs,
                    sm: widthSm,
                    md: widthMd,
                    lg: widthLg,
                    xl: widthXl,
                  },
                }}
              >
                <CustomTextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  helperText='Please enter your email'
                />
              </Grid>
              {/* TEXT AREA */}

              {/* BUTTON */}
              <Grid
                container
                item
                sx={{
                  width: {
                    xs: widthXs,
                    sm: widthSm,
                    md: widthMd,
                    lg: widthLg,
                    xl: widthXl,
                  },
                  mt: 2,
                }}
              >
                <Button
                  fullWidth
                  color='buttonColor'
                  size='large'
                  sx={{
                    color: '#fff',

                    '&:hover': {
                      backgroundColor: '#3c52b2',
                      color: '#fff',
                    },
                  }}
                  variant='contained'
                  // endIcon={<PermIdentity />}
                >
                  Send
                </Button>
              </Grid>
              {/* BUTTON */}
              <Copyright />
            </Grid>
            {/* TEXT AREA & BUTTON */}
          </Grid>
          {/* MAIN */}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default ForgotPassword
