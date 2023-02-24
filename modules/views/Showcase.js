import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'

import { PlayArrow } from '@mui/icons-material'

const Showcase = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      buttonColor: {
        main: '#293462',
        contrastText: '#fff',
      },
    },
  })

  theme.typography.h2 = {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '2.2rem',
    },
  }

  theme.typography.subtitle1 = {
    fontSize: '1rem',

    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.8rem',
    },
  }

  const TextXl = 6
  const TextLg = 6
  const TextMd = 6
  const TextSm = 12
  const TextXs = 12
  const imgXl = 4
  const imgLg = 4
  const imgMd = 4
  const imgSm = 4
  const imgXs = 4
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{ flexGrow: 1 }}>
          {' '}
          <Grid
            container
            direction='row'
            justifyContent='space-evenly'
            alignItems='center'
            sx={{
              bgcolor: '#7B8FA1',
              height: 700,
            }}
          >
            <Grid
              container
              item
              xs={TextXs}
              sm={TextSm}
              md={TextMd}
              lg={TextLg}
              xl={TextXl}
              justifyContent='center'
              alignItems='center'
              wrap='nowrap'
              sx={{ mt: 5, mb: 5 }}
            >
              <Container>
                <Stack
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  spacing={{ xs: 6, sm: 4, md: 4 }}
                >
                  <Typography
                    variant='h2'
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      color: '#143F6B',
                    }}
                  >
                    Create word collection
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{ fontStyle: 'oblique', color: '#E5E0FF' }}
                  >
                    Practise makes progress and do not forget that{' '}
                    <Box
                      sx={{
                        fontStyle: 'oblique',
                        color: '#E5E0FF',
                        fontWeight: 'bold',
                        display: 'inline',
                        typography: 'subtitle1',
                      }}
                    >
                      the Rome wasn’t built in a day
                    </Box>
                  </Typography>
                  <Button
                    color='buttonColor'
                    size='large'
                    sx={{
                      color: '#fff',
                      px: 6,
                      '&:hover': {
                        backgroundColor: '#3c52b2',
                        color: '#fff',
                      },
                    }}
                    variant='contained'
                    endIcon={<PlayArrow />}
                  >
                    Start
                  </Button>
                </Stack>
              </Container>
            </Grid>
            <Grid
              container
              item
              xs={imgXs}
              sm={imgSm}
              md={imgMd}
              lg={imgLg}
              xl={imgXl}
              justifyContent='center'
              alignItems='center'
              wrap='nowrap'
              sx={{ mb: 5 }}
            >
              {/* <Typography>{`xl=${imgXl} lg=${imgLg} md=${imgMd} sm=${imgSm} xs=${imgXs}`}</Typography> */}
              <Box
                component='img'
                src='../../images/vcb.png'
                alt='showcase'
                sx={{
                  maxWidth: {
                    xs: '12rem',
                    sm: '12rem',
                    md: '12rem',
                    lg: '14rem',
                    xl: '15rem',
                  },
                  height: 'auto',
                  color: '#FFF',
                  mb: 6,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default Showcase
