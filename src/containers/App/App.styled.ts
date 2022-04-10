import { globalCss, styled } from '@styles/stitches'

export const globalStyles = globalCss({
  '*': { boxSizing: 'border-box' },
  'html, body, #__next': {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#242424',
    color: '#FFF',
    fontFamily: 'sans-serif',
  },
})

export const Container = styled('div', {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr',
})

export const Main = styled('main', {
  overflow: 'auto',
})
