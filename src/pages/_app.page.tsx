import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
// eslint-disable-next-line camelcase
import { Nunito_Sans } from 'next/font/google'

import { queryClient } from '@/lib/reactQuery'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import type { ReactElement, ReactNode } from 'react'

globalStyles()

const nunito = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div className={`${nunito.className}`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </SessionProvider>
  )
}
