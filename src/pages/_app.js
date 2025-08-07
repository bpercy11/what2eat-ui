// pages/_app.js
import {HeroUIProvider} from '@heroui/react'

function MyApp({ Component, pageProps }) {
  return (
    <HeroUIProvider>
      <Component {...pageProps} />
    </HeroUIProvider>
  )
}

export default MyApp;