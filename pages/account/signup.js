import React from 'react'
import {
  Alert,
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
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
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import Link from 'next/link'
import { Stack } from '@mui/system'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthContext from '@/context/AuthContext.js'
import { useState, useEffect, useContext } from 'react'
import * as yup from 'yup'

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

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const validationSchema = yup
  .object({
    username: yup
      .string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: yup
      .string()
      .required('Email is required')
      .matches(emailRegExp, 'Email is invalid.'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required()

function Signup() {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const { signUpUser, signUpError, backDrop, setLoginError } =
    useContext(AuthContext)
  setLoginError(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const onSubmit = (data) => {
    signUpUser(data)
  }

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
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
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                {...register('username')}
                error={errors.username ? true : false}
                helperText={errors.username?.message}
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
                autoComplete='email'
                {...register('email')}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
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
                required
                fullWidth
                id='password'
                label='Password'
                name='password'
                type={passwordVisibility ? 'text' : 'password'}
                autoComplete='password'
                {...register('password')}
                error={errors.password ? true : false}
                helperText={errors.password?.message}
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
                autoComplete='confirmPassword'
                {...register('confirmPassword')}
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword?.message}
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
              {signUpError && <BasicAlerts error={signUpError} />}
            </Grid>
            {/* ERROR */}

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
                type='submit'
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
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backDrop}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      </Box>
    </ThemeProvider>
  )
}

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

function BasicAlerts({ error }) {
  return (
    <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
      <Alert variant='outlined' severity='error'>
        {error}
      </Alert>
    </Stack>
  )
}

export default Signup
