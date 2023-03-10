import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { IconButton, ListSubheader } from '@mui/material'
import { ArrowBack, Login, Menu } from '@mui/icons-material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext.js'
import { useState, useContext } from 'react'

export default function TemporaryDrawer(props) {
  const [state, setState] = useState({
    right: false,
  })

  const { logout } = useContext(AuthContext)
  const router = useRouter()

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        bgcolor: '#567189',
        height: '100%',
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* HEADER OF DRAWER */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowBack sx={{ color: '#FFFF' }} />
            </ListItemIcon>
            <Link
              href={'/'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemText
                sx={{ color: '#FFFF' }}
                primary={'Vocabulary Hour'}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <Divider />

        {router.pathname === '/' &&
          ['Features', 'References', 'Contact'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton href={`#${text.toLowerCase()}`}>
                <ListItemText sx={{ color: '#FFFF' }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />
      {props.auth === null ? (
        <List>
          {' '}
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                color='neutral'
                variant='outlined'
                onClick={() => router.push(`/account/login`)}
                sx={{
                  // letterSpacing: '0.01px',
                  fontWeight: 'bold',
                }}
              >
                Login
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                color='navy'
                variant='contained'
                onClick={() => router.push(`/account/signup`)}
                sx={{
                  letterSpacing: '0.01px',
                  fontWeight: 'bold',
                }}
              >
                Sign Up
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List
          aria-labelledby='nested-list-subheader'
          component='nav'
          sx={{ width: '100%', maxWidth: 360, bgcolor: '#567189' }}
          subheader={
            <ListSubheader
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: '#7B8FA1',
                color: '#FFFF',
              }}
              component='div'
              id='nested-list-subheader'
            >
              Account
              <Divider />
            </ListSubheader>
          }
        >
          {['Profile', 'Settings', 'Logout'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  ;`${text}` !== 'Logout'
                    ? router.push(`/account/${text.toLowerCase()}`)
                    : logout()
                }}
              >
                <ListItemText sx={{ color: '#FFFF' }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )

  return (
    <Box>
      <IconButton
        size='large'
        aria-label='elevation menu'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={toggleDrawer('right', true)}
        color='inherit'
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </Box>
  )
}
