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
  IconButton,
  MenuItem,
  Tooltip,
  Avatar,
  ListItemIcon,
  Divider,
  Menu,
  Slide,
} from '@mui/material'
import { LocalLibrary, Logout, Settings } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import DrawerComponent from '../components/DrawerComponent'
import AuthContext from '@/context/AuthContext.js'
import { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

function NavBar(props) {
  const [value, setValue] = useState()
  const [anchorEl, setAnchorEl] = useState(null)

  const { user, logout } = useContext(AuthContext)
  const router = useRouter()

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

  const tabsHandler = (event, value) => {
    setValue(value)
  }

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position='sticky' sx={{ bgcolor: '#567189' }}>
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
              {router.pathname === '/' && (
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
                    onChange={tabsHandler}
                    centered
                  >
                    <a
                      href='#features'
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Tab label='Features' />
                    </a>
                    <a
                      href='#references'
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Tab label='References' />
                    </a>
                    <a
                      href='#contact'
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Tab label='Contact' />
                    </a>
                  </Tabs>
                </Grid>
              )}
              {/* TAB SECTION */}

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
                {user !== null ? (
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
                        <Avatar {...stringAvatar(`${user}`)} />
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
                      <MenuItem onClick={() => router.push(`/account/profile`)}>
                        <Avatar /> Profile
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={() => router.push(`/account/settings`)}
                      >
                        <ListItemIcon>
                          <Settings fontSize='small' />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
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
                <DrawerComponent auth={user} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </ThemeProvider>
  )
}

// BREAK POINT AREA

function UltraResponsiveGrid() {
  const matches = useMediaQuery('(min-width:290px)')

  return (
    <>
      {matches ? (
        <Grid item xs={10} sm={4} md={4} lg={4} xl={4}>
          <Container maxWidth='false'>
            <Stack direction='row' spacing={2} alignItems='center'>
              <Link
                href='/'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <LocalLibrary />
              </Link>
              <Link
                href='/'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography variant='h5'>Vocabulary Hour</Typography>
              </Link>
            </Stack>
          </Container>
        </Grid>
      ) : (
        <Grid item xs={8} sm={4} md={4} lg={4} xl={4}>
          <Container maxWidth='false'>
            <Stack direction='row' spacing={2} alignItems='center'>
              <Link
                href='/'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <LocalLibrary />
              </Link>
              <Link
                href='/'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  variant={{
                    xs: 'h6',
                    sm: 'h5',
                    md: 'h5',
                    lg: 'h5',
                    xl: 'h5',
                  }}
                >
                  Vocabulary Hour
                </Typography>
              </Link>
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
  const router = useRouter()

  return (
    <>
      <Button
        color='neutral'
        variant='outlined'
        size={matches ? 'medium' : 'small'}
        onClick={() => router.push(`/account/login`)}
        sx={{
          fontWeight: 'bold',
        }}
      >
        Login
      </Button>

      <Button
        color='navy'
        variant='contained'
        size={matches ? 'medium' : 'small'}
        onClick={() => router.push(`/account/signup`)}
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

function stringToColor(string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar(name) {
  const words = name.split(' ')

  if (words[0][0] !== undefined && words?.[1]?.[0] !== undefined) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${words[0][0]}${words[1][0]}`,
    }
  } else if (words[0][0] !== undefined && words?.[1]?.[0] === undefined) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${words[0][0]}`,
    }
  }
}

export default NavBar
