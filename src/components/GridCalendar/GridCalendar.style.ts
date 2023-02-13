import { BLUES, BLUES_KEY, COMMON } from '@styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GridContainer = styled.div`
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(5, 130px);
  grid-template-rows: repeat(5, 130px);
  gap: 0.5rem;
`
export const Month = styled.div<{ row: number; col: number; color: string; active?: boolean }>`
  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: ${COMMON.MILKY_WAY};
  border: ${({ active }) => active && `3px solid ${COMMON.ORANGE}`};
  font-size: 3rem;
  cursor: pointer;
`
