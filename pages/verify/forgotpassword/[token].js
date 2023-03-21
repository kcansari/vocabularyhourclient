import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'
import Alert from '@mui/material/Alert'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import LoadingButton from '@mui/lab/LoadingButton'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LockResetIcon from '@mui/icons-material/LockReset'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import * as yup from 'yup'
import { Grid } from '@mui/material'
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

const validationSchema = yup
  .object({
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

export default function ResetPasswordPage() {
  const router = useRouter()
  const { token } = router.query

  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resetPasswordError, setResetPasswordError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    const { password } = data
    const res = await fetch(`${API_URL}/api/users/reset-password/${token}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
      }),
    })
    const backendRes = await res.json()
    console.log(backendRes)
    if (res.ok) {
      setIsSubmitting(false)
      setResetPasswordError(backendRes.message)
      setTimeout(() => {
        router.push('/account/login')
      }, 1500)
    } else {
      setIsSubmitting(false)
      setResetPasswordError(backendRes.message)
    }
  }

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <Layout title={'Change Password Vocabulary Hour'}>
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
                    <LockResetIcon sx={{ fontSize: 60, color: '#EEEEEE' }} />
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
                    Change password
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
                    Write your new password
                  </Typography>
                </Grid>
                {/* SUBTITLE TEXT */}
              </Grid>
              {/* LOGO AND TEXT MAIN GRID */}

              {/* PASSWORD & CONFIRM PASSWORD & BUTTON  */}
              <Grid
                container
                item
                direction='column'
                justifyContent='space-evenly'
                alignItems='center'
              >
                {/* PASSWORD  */}
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
                </Grid>
                {/* PASSWORD */}

                {/* CONFIRM PASSWORD  */}
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
                  <LoadingButton
                    fullWidth
                    color='buttonColor'
                    loading={isSubmitting}
                    type='submit'
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
                    Confirm
                  </LoadingButton>
                </Grid>
                {/* BUTTON */}
              </Grid>
              {/* PASSWORD & CONFIRM PASSWORD & BUTTON  */}
              {/* ERROR */}
              <Grid item>
                {resetPasswordError && (
                  <BasicAlerts
                    error={resetPasswordError}
                    severity={
                      resetPasswordError ===
                      'Your password has been changed successfully'
                        ? 'success'
                        : 'error'
                    }
                  />
                )}
              </Grid>
              {/* ERROR */}
            </Grid>
            {/* MAIN */}
          </Container>
        </Box>
      </ThemeProvider>
    </Layout>
  )
}

function BasicAlerts({ error, severity }) {
  return (
    <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
      <Alert variant='outlined' severity={severity}>
        {error}
      </Alert>
    </Stack>
  )
}
