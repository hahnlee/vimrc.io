import Header from '@components/Header'
import Head from 'next/head'
import { ReactNode } from 'react'
import { globalStyles } from './App.styled'

interface Props {
  children: ReactNode
}

export default function App({ children }: Props) {
  globalStyles()

  return (
    <>
      <Head>
        <title>vimrc.io</title>
      </Head>
      <Header />
      {children}
    </>
  )
}
