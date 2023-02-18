import * as React from 'react'
import {
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
  Grid,
  Container,
  Stack,
  CssBaseline,
  Box,
  IconButton,
  FormGroup,
  FormControlLabel,
  Switch,
  MenuItem,
  Tooltip,
  Avatar,
  ListItemIcon,
  Divider,
  Menu,
} from '@mui/material'
import { LocalLibrary, Logout, Settings } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DrawerComponent from '../components/DrawerComponent'

// DOWN 288PX responsiveness set

function NavBar() {
  const [value, setValue] = React.useState()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#fff',
        contrastText: '#fff',
      },
      navy: {
        main: '#13005A',
        contrastText: '#fff',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 840,
        md: 950,
        lg: 1200,
        xl: 1536,
      },
    },
  })
  // console.log(theme)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label='login switch'
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position='static' sx={{ bgcolor: '#567189' }}>
        <CssBaseline />
        <Toolbar disableGutters>
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            {/* BRAND & ICON SECTION */}
            <UltraResponsiveGrid />

            {/* TAB SECTION */}

            <Grid
              item
              sm={6}
              md={5}
              lg={6}
              xl={6}
              sx={{
                // bgcolor: '#FFee',
                display: {
                  xs: 'none',
                  sm: 'inline',
                  md: 'inline',
                  lg: 'inline',
                  xl: 'inline',
                },
              }}
            >
              <Tabs
                indicatorColor='text'
                textColor='inherit'
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label='Features' order={1} />
                <Tab label='References' order={2} />
                <Tab label='Price' order={3} />
                <Tab label='Contact' order={4} />
              </Tabs>
            </Grid>

            {/* BUTTON SECTION */}

            <Grid
              item
              sm={2}
              md={3}
              lg={2}
              xl={2}
              sx={{
                // bgcolor: '#AAAA',
                display: {
                  xs: 'none',
                  sm: 'inline',
                  md: 'inline',
                  lg: 'inline',
                  xl: 'inline',
                },
              }}
            >
              {auth ? (
                <Stack
                  direction='row'
                  spacing={{ xs: 0.5, sm: 1, md: 1 }}
                  alignItems='center'
                  justifyContent='flex-end'
                  sx={{ mr: 4 }}
                >
                  <Tooltip
                    title={
                      <Typography variant='caption'>
                        Account settings
                      </Typography>
                    }
                  >
                    <IconButton
                      onClick={handleClick}
                      size='small'
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id='account-menu'
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize='small' />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize='small' />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </Stack>
              ) : (
                <Stack
                  direction='row'
                  spacing={{ xs: 0.5, sm: 1, md: 1 }}
                  alignItems='center'
                  justifyContent='flex-end'
                  sx={{ mr: 4 }}
                >
                  <MyResponsiveButtons />
                </Stack>
              )}
            </Grid>

            {/* Burger MENU ICON */}
            <Grid
              item
              sm={2}
              sx={{
                // bgcolor: '#AAAA',
                display: {
                  xs: 'inline',
                  sm: 'none',
                },
              }}
            >
              <DrawerComponent auth={auth} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

// BREAK POINT AREA

function UltraResponsiveGrid() {
  const matches = useMediaQuery('(min-width:290px)')

  return (
    <>
      {matches ? (
        <Grid
          item
          xs={10}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          // sx={{ bgcolor: '#C55' }}
        >
          <Container maxWidth='false'>
            <Stack direction='row' spacing={2} alignItems='center'>
              <LocalLibrary />
              <Typography variant='h5'>Vocabulary Hour</Typography>
            </Stack>
          </Container>
        </Grid>
      ) : (
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          // sx={{ bgcolor: '#C55' }}
        >
          <Container maxWidth='false'>
            <Stack direction='row' spacing={2} alignItems='center'>
              <LocalLibrary />
              <Typography variant='h5' sx={{ display: 'none' }}>
                Vocabulary Hour
              </Typography>
            </Stack>
          </Container>
        </Grid>
      )}
    </>
  )
}

function MyResponsiveButtons() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <Button
        color='neutral'
        variant='outlined'
        size={matches ? 'medium' : 'small'}
        sx={{
          // letterSpacing: '0.01px',
          fontWeight: 'bold',
        }}
      >
        Login
      </Button>

      <Button
        color='navy'
        variant='contained'
        size={matches ? 'medium' : 'small'}
        sx={{
          letterSpacing: '0.01px',
          fontWeight: 'bold',
        }}
      >
        Sign Up
      </Button>
    </>
  )
}

export default NavBar
