import { Box, CssBaseline } from '@mui/material'
import NavBar from '@/modules/views/AppBar.js'
import Showcase from '@/modules/views/Showcase.js'
import Features from '@/modules/views/Features.js'
import Testimonials from '@/modules/views/Testimonials.js'
import Contact from '@/modules/views/Contact.js'
import Footer from '@/modules/views/Footer.js'
import AuthContext from '@/context/AuthContext.js'
import { useEffect, useContext } from 'react'
import Layout from '@/modules/components/LayotComponent'

export default function Home() {
  const { setLoginError, setSignUpError, setOpenMessage } =
    useContext(AuthContext)

  useEffect(() => {
    setLoginError(null)
    setSignUpError(null)
    setOpenMessage(false)
  }, [setLoginError, setSignUpError, setOpenMessage])

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <CssBaseline />
        <NavBar />
        <Showcase />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </Box>
    </Layout>
  )
}
