import { styled } from '@styles/stitches'

export const Aside = styled('aside', {
  backgroundColor: '#3F3F3F',
  borderRight: '1px solid #505050',
  padding: '12px 24px',
})

export const List = styled('ul', {
  padding: 0,
  margin: '0',
  'li + li': {
    marginTop: '12px',
  },
})

export const ListItem = styled('li', {
  listStyle: 'none',
  fontWeight: 'bold',
  color: '#BBB',
  a: {
    color: '#BBB',
    textDecoration: 'none',
  },
  variants: {
    selected: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
})
