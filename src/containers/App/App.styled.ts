import { globalCss } from '@styles/stitches'

export const globalStyles = globalCss({
  '*': { boxSizing: 'border-box' },
  'html, body': {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#242424',
  },
})
