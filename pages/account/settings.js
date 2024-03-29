import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Switch,
  Snackbar,
  Container,
} from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'
import AuthContext from '@/context/AuthContext.js'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Close,
  ManageAccounts,
  RocketLaunch,
  SaveAsOutlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
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
  widthXs = 300

const validationSchema = yup
  .object({
    username: yup
      .string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
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

function Settings({ user }) {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [checked, setChecked] = useState(false)

  const {
    manageAccount,
    backDrop,
    editRespond,
    openSnack,
    setOpenSnack,
    profileData,
    userData,
    setEditRespond,
  } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: userData.username,
    },
  })

  const router = useRouter()

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

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const onSubmit = (data) => {
    manageAccount(data)
  }

  useEffect(() => {
    profileData()

    if (editRespond) {
      router.replace(router.asPath)
      setEditRespond(false)
    }
  }, [editRespond])

  return (
    <Layout title={'Settings Page Vocabulary Hour'}>
      <NavBar />
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
                    <ManageAccounts sx={{ fontSize: 60, color: '#EEEEEE' }} />
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
                    Manage Account
                  </Typography>
                </Grid>
                {/* TEXT */}
              </Grid>
              {/* LOGO AND TEXT */}

              {/* USERNAME & EMAIL &  PASSWORD & CONFIRM PASSWORD & BUTTON */}
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
                    InputLabelProps={{ shrink: true }}
                    disabled={!checked}
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
                    InputLabelProps={{ shrink: true }}
                    disabled
                    margin='normal'
                    required
                    fullWidth
                    value={userData.email}
                    id='email'
                    label='Email Address'
                    name='email'
                    helperText='Email cannot be changed'
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
                    InputLabelProps={{ shrink: true }}
                    disabled={!checked}
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
                {/* CONFIRM PASSWORD */}
                {checked && (
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
                      InputLabelProps={{ shrink: true }}
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
                )}
                {/* CONFIRM PASSWORD */}

                {/* SWITCH */}
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
                  }}
                >
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    color='warning'
                  />
                </Grid>
                {/* SWITCH */}

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
                  <LoadingButton
                    fullWidth
                    loading={backDrop}
                    disabled={!checked}
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
                    endIcon={<SaveAsOutlined />}
                  >
                    Save Changes
                  </LoadingButton>
                </Grid>
                {/* BUTTON */}
              </Grid>
              {/* USERNAME & PASSWORD & CONFIRM PASSWORD & BUTTON & SWITCH*/}
            </Grid>
            {/* MAIN */}
            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              open={openSnack}
              autoHideDuration={3500}
              onClose={handleClose}
              message={`Your changes have been saved`}
              action={action}
              key={'bottom' + 'right'}
            />
          </Container>
        </Box>
      </ThemeProvider>
    </Layout>
  )
}

export default Settings
