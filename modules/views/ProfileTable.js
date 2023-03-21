import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TableComponent from '../components/TableComponent'

function ProfileTable({ user }) {
  return (
    <Box
      sx={{
        display: 'flex',
        // flexWrap: 'wrap',
        overflow: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 10,
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
          <Grid item xs={12}>
            <TableComponent user={user} />
          </Grid>
          {/* TABLE */}
        </Grid>
        {/* MAIN */}
      </Container>
    </Box>
  )
}

export default ProfileTable
