import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"

import '../style.css'
import { Toaster } from '@components/ui/toaster'

export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
        <style jsx global>{`
                  :root {
                  }
              }`}</style>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
        <Toaster />
      </>
    )
  }
  