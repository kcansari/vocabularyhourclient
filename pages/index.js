import { Box, CssBaseline } from '@mui/material'
import NavBar from '../modules/views/AppBar.js'
import Showcase from '../modules/views/Showcase.js'
import Features from '../modules/views/Features.js'
import Testimonials from '../modules/views/Testimonials.js'
import Pricing from '../modules/views/Pricing.js'
import Footer from '../modules/views/Footer.js'

export default function Home() {
  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Showcase />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </Box>
  )
}
