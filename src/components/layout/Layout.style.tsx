import { onLarge } from '@styles/mediaQueries'
import styled from 'styled-components'

export const Container = styled.main`
  max-width: 40rem;
  margin: auto;

  ${onLarge} {
    max-width: 90rem;
  }
`
