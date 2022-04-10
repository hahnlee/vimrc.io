import VimrcEditor from '@containers/VimrcEditor'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

interface Props {
  category: string
  locale: string
}

export default function Category({ category, locale }: Props) {
  return <VimrcEditor category={category} locale={locale} />
}

export function getServerSideProps({
  locale = 'en',
  query: { category },
}: GetServerSidePropsContext): GetServerSidePropsResult<Props> {
  if (typeof category !== 'string') {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category,
      locale,
    },
  }
}
