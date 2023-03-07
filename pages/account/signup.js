import React from 'react'
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
import {
  ArrowBack,
  HowToReg,
  PermIdentity,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import Link from 'next/link'
import { Stack } from '@mui/system'

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

function Signup() {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false)

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility)
  }
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
        {/* MAIN */}
        <Grid
          container
          direction='column'
          justifyContent='space-evenly'
          alignItems='center'
          spacing={4}
          sx={{ mt: 2 }}
        >
          {/* LOGO AND TEXT */}
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
                <HowToReg sx={{ fontSize: 60, color: '#EEEEEE' }} />
              </Avatar>
            </Grid>
            {/* LOGO */}

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
                Sing Up
              </Typography>
            </Grid>
            {/* TEXT */}
          </Grid>
          {/* LOGO AND TEXT */}

          {/* USERNAME & EMAIL & PASSWORD & CONFIRM PASSWORD & LINK & BUTTON */}
          <Grid
            container
            item
            direction='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            {/* USERNAME */}
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
                fullWidth
                required
                id='username'
                label='Username'
                name='username'
                // autoComplete='text'
              />
            </Grid>
            {/* USERNAME */}

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
              <CustomTextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                // autoComplete='email'
              />
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
              <CustomTextField
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                id='password'
                // autoComplete='new-password'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                sx={{}}
                type={passwordVisibility ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      {' '}
                      <IconButton onClick={handleClickShowPassword} edge='end'>
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
            </Grid>
            {/* PASSWORD */}

            {/* CONFIRM PASSWORD */}
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
                id='confirmPassword'
                label='Confirm Password'
                name='confirmPassword'
                type={passwordVisibility ? 'text' : 'password'}
                // autoComplete='confirmPassword'
              />
            </Grid>
            {/* CONFIRM PASSWORD */}

            {/* LINK */}
            <Grid
              container
              item
              justifyContent='flex-end'
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
              <Link href='/account/login'>
                <Typography variant='body2'>
                  Already have an account?
                </Typography>
              </Link>
            </Grid>
            {/* LINK */}

            {/* BUTTON */}
            <Grid
              container
              item
              justifyContent='flex-end'
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
                Sign Up
              </Button>
            </Grid>
            {/* BUTTON */}
            <Copyright />
          </Grid>
          {/* USERNAME & EMAIL & PASSWORD & CONFIRM PASSWORD & LINK & BUTTON  */}
        </Grid>
        {/* MAIN */}
      </Box>
    </ThemeProvider>
  )
}

export default Signup
