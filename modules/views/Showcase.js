// import Typography from '@mui/material/Typography'
// import { Box, Container, Grid, Paper, Button } from '@mui/material'
// import {
//   createTheme,
//   responsiveFontSizes,
//   ThemeProvider,
//   styled,
// } from '@mui/material/styles'

// let theme = createTheme()
// theme = responsiveFontSizes(theme)

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }))

// const Showcase = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container sx={{ mt: 12 }}>
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid
//             container
//             direction='column'
//             justifyContent='center'
//             alignItems='center'
//             spacing={{ xs: 2, md: 3 }}
//             columns={{ xs: 4, sm: 8, md: 12 }}
//             // sx={{ bgcolor: 'error.main' }}
//           >
//             <Grid item xs={2} sm={4} md={4}>
//               <Item>
//                 {' '}
//                 <Typography variant='h1'>Vocabulary Hour</Typography>{' '}
//               </Item>
//             </Grid>
//             <Grid item xs={2} sm={4} md={4}>
//               <Item>
//                 <Typography variant='h4'>Create Word Collection</Typography>
//               </Item>
//             </Grid>
//             <Grid item xs={2} sm={4} md={4}>
//               <Button variant='contained' size='large'>
//                 Start
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   )
// }

// export default Showcase

import { Box } from '@mui/material'

const Showcase = () => {
  return <Box sx={{ bgcolor: '#7B8FA1' }}>Showcase</Box>
}

export default Showcase
