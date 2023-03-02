import { GitHub, Language, LinkedIn, LocalLibrary } from '@mui/icons-material'
import { Box, Grid, Typography, Stack, Divider, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

const FooterContainer = styled(Box)({
  backgroundColor: '#EEEEEE',
  height: 200,
})

const FooterRow = styled(Stack)({
  flexDirection: 'row',
})

const FooterColumn = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginRight: '2rem',
  backgroundColor: '#FF0303',
})

const FooterTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '1rem',
})

const Footer = () => {
  return (
    <Box
      justifyContent='center'
      alignItems='center'
      sx={{
        bgcolor: '#EEEEEE',
        width: '100%',
        height: 100,
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item>
            <Typography
              variant='body2'
              align='center'
              sx={{
                display: 'inline',
              }}
            >
              © {new Date().getFullYear()}{' '}
            </Typography>
            <Box
              sx={{
                fontWeight: 'bold',
                display: 'inline',
                typography: 'h6',
                fontSize: 18,
              }}
            >
              Vocabulary Hour
            </Box>
          </Grid>
          <Grid item>
            <Typography variant='body2' align='center'>
              Terms & Privacy
            </Typography>
          </Grid>
        </Grid>
      </>
    </Box>
  )
}

export default Footer
