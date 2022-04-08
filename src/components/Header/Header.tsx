import Image from 'next/image'
import { Container } from './Header.styled'

export default function Header() {
  return (
    <Container>
      <Image src="/images/logo.png" alt="logo" width={136} height={32} />
    </Container>
  )
}
