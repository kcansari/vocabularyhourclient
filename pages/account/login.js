import {
  ArrowBack,
  LockPerson,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import {
  Alert,
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import AuthContext from '@/context/AuthContext.js'
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
import LoginIcon from '@mui/icons-material/Login'
import Link from 'next/link'
import Layout from '@/modules/components/LayotComponent'
import { useRouter } from 'next/router'

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
            Vocabulary Hour
          </Typography>
        </Stack>
      </Link>
    </Box>
  )
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const router = useRouter()

  const { login, loginError, backDrop, setSignUpError, user } =
    useContext(AuthContext)

  useEffect(() => {
    setSignUpError(null)
  }, [setSignUpError])

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ email, password })
  }

  return (
    <Layout title={'Login Page Vocabulary Hour'}>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />

        <Box
          component='form'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            // border: 1,
          }}
        >
          <Container>
            {/* MAIN GRID */}
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={4}
              style={{ minHeight: '100vh' }}
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
              {/* LOGO AND TEXT MAIN GRID */}
              {/* EMAIL & PASSWORD & ERROR */}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ mb: 2 }}
                    />
                  </Container>
                </Grid>
                {/* EMAIL */}

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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                {/* PASSWORD */}

                {/* ERROR */}
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
                    {loginError && <BasicAlerts error={loginError} />}
                  </Container>
                </Grid>
                {/* ERROR */}
              </Grid>
              {/* EMAIL & PASSWORD & ERROR */}

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
                      onClick={handleSubmit}
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
                {/* LOGIN BUTTON */}

                {/* TEXT BUTTONS */}
                <Grid
                  container
                  item
                  justifyContent='center'
                  alignItems='center'
                  spacing={2}
                  sx={{ mt: 1 }}
                >
                  <Grid item>
                    {' '}
                    <Link href='/account/forgotPassword'>
                      <Typography variant='body2'>Forgot password?</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href='/account/signup'>
                      <Typography variant='body2'>
                        Don&apos;t have an account?
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                {/* TEXT BUTTONS */}
              </Grid>
              {/* BUTTONS */}
              <Copyright />
            </Grid>
            {/* MAIN */}
          </Container>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backDrop}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
        </Box>
      </ThemeProvider>
    </Layout>
  )
}

function BasicAlerts({ error }) {
  return (
    <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
      <Alert variant='outlined' severity='error'>
        {error}
      </Alert>
    </Stack>
  )
}

export default Login
