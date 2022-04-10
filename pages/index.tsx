import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

interface Props {
  locale: string
}

export default function Main({ locale }: Props) {
  return null
}

export function getServerSideProps({
  locale = 'en',
}: GetServerSidePropsContext): GetServerSidePropsResult<Props> {
  return {
    props: {
      locale,
    },
  }
}
