import {
  ArrowBack,
  LockPerson,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
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
      borderColor: '#A75D5D',
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
  widthXs = 300

function Copyright(props) {
  return (
    <Box sx={{ mt: 6 }}>
      {' '}
      <Link
        href={'/'}
        style={{ textDecoration: 'none', color: 'inherit' }}
        {...props}
      >
        <Stack direction='row' alignItems='center' gap={1}>
          <ArrowBack sx={{ color: '#143F6B' }} />
          <Typography variant='subtitle1' color='#143F6B' align='center'>
            Vovabulary Hour
          </Typography>
        </Stack>
      </Link>
    </Box>
  )
}

function Login() {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false)

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <ThemeProvider theme={themeLight}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          // border: 1,
        }}
      >
        <CssBaseline />
        <Container>
          {/* MAIN GRID */}
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={4}
            style={{ minHeight: '100vh' }}
            sx={
              {
                // bgcolor: '#fff',
                // border: 1,
                // borderColor: 'secondary.main',
              }
            }
          >
            {/* LOGO AND TEXT MAIN GRID */}
            <Grid
              container
              item
              direction='column'
              justifyContent='space-evenly'
              alignItems='center'
              // spacing={2}
              sx={{}}
            >
              {/* LOGO */}
              <Grid item>
                {' '}
                <Avatar sx={{ width: 96, height: 96, bgcolor: '#A75D5D' }}>
                  <LockPerson sx={{ fontSize: 60, color: '#EEEEEE' }} />
                </Avatar>
              </Grid>
              {/* TEXT */}
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
                  Login
                </Typography>
              </Grid>
            </Grid>

            {/* TEXT FIELDS */}
            <Grid
              container
              item
              direction='column'
              justifyContent='center'
              alignItems='center'
              sx={{}}
            >
              {/* EMAIL */}
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
                <Container>
                  <CustomTextField
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Container>
              </Grid>
              {/* PASSWORD */}
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
                <Container>
                  <CustomTextField
                    fullWidth
                    name='password'
                    label='Password'
                    id='password'
                    autoComplete='new-password'
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    sx={{}}
                    type={passwordVisibility ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          {' '}
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge='end'
                          >
                            {passwordVisibility ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Container>
              </Grid>
            </Grid>
            {/* BUTTONS */}
            <Grid
              container
              item
              direction='column'
              justifyContent='center'
              alignItems='center'
              sx={{}}
            >
              {/* LOGIN BUTTON */}
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
                <Container>
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
                    endIcon={<LoginIcon />}
                  >
                    Login
                  </Button>
                </Container>
              </Grid>
              {/* TEXT BUTTONS */}
              <Grid
                container
                items
                justifyContent='center'
                alignItems='center'
                spacing={2}
                sx={{ mt: 1 }}
              >
                <Grid item>
                  {' '}
                  <Link href='/'>
                    <Typography variant='body2'>Forgot password?</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/'>
                    <Typography variant='body2'>
                      Don&apos;t have an account?
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Copyright />
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Login
