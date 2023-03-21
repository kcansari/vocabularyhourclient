import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import NavBar from '@/modules/views/AppBar.js'
import {
  Avatar,
  Button,
  ButtonGroup,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material'
import { MarkEmailRead } from '@mui/icons-material'
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

export default function VerifiedPage({ data }) {
  const router = useRouter()
  const { id } = router.query

  const buttons = [
    <Button
      key='one'
      size='large'
      onClick={() => router.push(`/`)}
      sx={{
        color: '#fff',

        '&:hover': {
          backgroundColor: '#3c52b2',
          color: '#fff',
        },
      }}
    >
      Home page
    </Button>,
    <Button
      key='two'
      size='large'
      onClick={() => router.push(`/account/profile`)}
      sx={{
        color: '#fff',

        '&:hover': {
          backgroundColor: '#3c52b2',
          color: '#fff',
        },
      }}
    >
      Profile
    </Button>,
  ]

  return (
    <Layout title={'Verify Account Vocabulary Hour'}>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flext-start',
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
              sx={{ mt: 5 }}
            >
              {/* LOGO AND TITLE */}
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
                    <MarkEmailRead sx={{ fontSize: 60, color: '#EEEEEE' }} />
                  </Avatar>
                </Grid>
                {/* LOGO */}
                {/* TITLE */}
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
                    Vocabulary Hour
                  </Typography>
                </Grid>
                {/* TITLE */}
              </Grid>
              {/* LOGO AND TITLE */}

              {/* MESSAGE */}
              <Grid item>
                {data.message === 'Email verified successfully' ? (
                  <Alert variant='filled' severity='success'>
                    {data.message}, please sign in your account
                  </Alert>
                ) : (
                  <Alert variant='filled' severity='error'>
                    {data.message}, please check your verify link
                  </Alert>
                )}
              </Grid>
              {/* MESSAGE */}

              {/* BUTTONS */}
              <Grid item>
                <ButtonGroup size='large' aria-label='large button group'>
                  {buttons}
                </ButtonGroup>
              </Grid>
              {/* BUTTONS */}
            </Grid>
            {/* MAIN */}
          </Container>
        </Box>
      </ThemeProvider>
    </Layout>
  )
}

export async function getServerSideProps({ query: { id, token } }) {
  const res = await fetch(`${API_URL}/verify/${id}/${token}`)

  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
