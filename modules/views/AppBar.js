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
  const [value, setValue] = React.useState()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
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

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: '#567189' }}>
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
                        <Avatar sx={{ width: 32, height: 32 }}>K</Avatar>
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

export default NavBar
