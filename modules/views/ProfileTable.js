import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material'
import { FormatListBulleted } from '@mui/icons-material'
import TableComponent from '../components/TableComponent'

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

const iconXs = 66,
  iconSm = 66,
  iconMd = 86,
  iconLg = 96,
  iconXl = 96

const fontSizeXs = 50,
  fontSizeSm = 50,
  fontSizeMd = 60,
  fontSizeLg = 70,
  fontSizeXl = 70

function ProfileTable({ user }) {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
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
            sx={{ mb: 8 }}
          >
            {/*  TITLE && SUBTITLE */}
            <Grid
              container
              item
              direction={{
                xs: 'column',
                sm: 'row',
                md: 'row',
                lg: 'row',
                xl: 'row',
              }}
              spacing={2}
              justifyContent='center'
              alignItems='center'
            >
              {/* TITLE */}
              <Grid item>
                <Typography
                  sx={{
                    typography: {
                      xs: 'h4',
                      sm: 'h4',
                      md: 'h3',
                      lg: 'h2',
                      xl: 'h1',
                    },
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: '#3c52b2',
                    // ml: 2,
                  }}
                >
                  {user.username}
                </Typography>
              </Grid>
              {/* TITLE */}
              {/* SUBTITLE */}
              <Grid item>
                <Typography
                  sx={{
                    typography: {
                      xs: 'h5',
                      sm: 'h5',
                      md: 'h3',
                      lg: 'h2',
                      xl: 'h1',
                    },

                    color: '#293462',
                  }}
                >
                  Word List
                </Typography>
              </Grid>
              {/* SUBTITLE */}
            </Grid>
            {/*  TITLE && SUBTITLE */}

            {/* TABLE */}
            <Grid item>
              <TableComponent user={user} />
            </Grid>
            {/* TABLE */}
          </Grid>
          {/* MAIN */}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default ProfileTable
