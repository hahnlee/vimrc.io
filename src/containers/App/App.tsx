import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Container, globalStyles, Main } from './App.styled'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <title>vimrc.io</title>
      </Head>
      <Container>
        <Header
          css={{
            gridColumn: 'span 2',
          }}
        />
        <Sidebar />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Container>
    </>
  )
}
