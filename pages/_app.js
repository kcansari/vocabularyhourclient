import '../styles/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { WordProvider } from '@/context/WordContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <WordProvider>
        <Component {...pageProps} />
      </WordProvider>
    </AuthProvider>
  )
}

export default MyApp
