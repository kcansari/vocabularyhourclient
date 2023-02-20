import { DoneAll, Whatshot, Widgets } from '@mui/icons-material'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FAD6A5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: 150,
  color: theme.palette.text.secondary,
}))

const elevation = 16
const TextXl = 4
const TextLg = 4
const TextMd = 4
const TextSm = 4
const TextXs = 4

const Features = () => {
  return (
    <Box sx={{ bgcolor: '#CFB997', flexGrow: 1, height: 700 }}>
      {' '}
      <>
        <Grid
          container
          direction={{
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          }}
          justifyContent='center'
          alignItems='center'
          rowSpacing={5}
          columnSpacing={{ xs: 4, sm: 4, md: 4 }}
          sx={{ height: 700 }}
        >
          <Grid
            item
            container
            justifyContent='flex-start'
            alignItems='center'
            direction='column'
            xs={TextXs}
            sm={TextSm}
            md={TextMd}
            lg={TextLg}
            xl={TextXl}
            // sx={{ bgcolor: '#D61C4E' }}
          >
            <DoneAll sx={{ fontSize: 60, color: '#A75D5D', mb: 3 }} />
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#143F6B',
              }}
            >
              Easy to use
            </Typography>
            <Typography
              variant='h6'
              gutterBottom
              sx={{
                fontStyle: 'oblique',
                color: '#6B728E',
              }}
            >
              Lorem ipsum dolor
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent='flex-start'
            alignItems='center'
            direction='column'
            xs={TextXs}
            sm={TextSm}
            md={TextMd}
            lg={TextLg}
            xl={TextXl}
            // sx={{ bgcolor: '#FEDB39' }}
          >
            <Whatshot sx={{ fontSize: 60, color: '#A75D5D', mb: 3 }} />
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#143F6B',
              }}
            >
              Sustainable
            </Typography>
            <Typography
              variant='h6'
              gutterBottom
              sx={{
                fontStyle: 'oblique',
                color: '#6B728E',
              }}
            >
              Donec nec lacus vel ligula
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent='flex-start'
            alignItems='center'
            direction='column'
            xs={TextXs}
            sm={TextSm}
            md={TextMd}
            lg={TextLg}
            xl={TextXl}
            // sx={{ bgcolor: '#FF9551', height: 200 }}
          >
            <Widgets sx={{ fontSize: 60, color: '#A75D5D', mb: 5 }} />
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#143F6B',
              }}
            >
              Flexibility
            </Typography>
            <Typography
              variant='h6'
              gutterBottom
              sx={{
                fontStyle: 'oblique',
                color: '#6B728E',
              }}
            >
              Donec mollis nulla
            </Typography>
          </Grid>
        </Grid>
      </>
    </Box>
  )
}

export default Features
