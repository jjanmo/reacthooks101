import { onLarge } from '@styles/mediaQueries'
import styled from 'styled-components'

export const Container = styled.main`
  max-width: 40rem;
  height: calc(100vh - 10rem);
  margin: auto;

  ${onLarge} {
    max-width: 90rem;
  }
`
