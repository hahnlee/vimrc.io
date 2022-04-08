import { CSS } from '@stitches/react'
import Image from 'next/image'
import { Container } from './Header.styled'

interface Props {
  css?: CSS
}

export default function Header({ css }: Props) {
  return (
    <Container css={css}>
      <Image src="/images/logo.png" alt="logo" width={136} height={32} />
    </Container>
  )
}
