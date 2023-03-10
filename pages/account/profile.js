import React from 'react'
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'

const themeLight = createTheme({
  palette: {
    background: {
      default: '#7B8FA1',
    },
    buttonColor: {
      main: '#293462',
      contrastText: '#fff',
    },
  },
})

function profile() {
  return (
    <>
      <NavBar />
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        profile
      </ThemeProvider>
    </>
  )
}

export default profile
