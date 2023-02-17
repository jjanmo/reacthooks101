import { COMMON } from '@styles/colors'
import styled, { keyframes } from 'styled-components'

const gridRotating = keyframes`
   0% {
    transform: rotateX(0) rotate(0);
  }
  100% {
    transform: rotateX(50deg) rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  perspective: 1000px;
`
export const GridContainer = styled.div`
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(5, 140px);
  grid-template-rows: repeat(5, 140px);
  gap: 1rem;

  transform: rotateX(0) rotate(0);
  transform-style: preserve-3d;
  animation: ${gridRotating} 1.5s 0.5s ease-in-out forwards;
`
export const Month = styled.div<{ row: number; col: number; color: string; active?: boolean }>`
  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: ${COMMON.MILKY_WAY};
  border-radius: ${({ active }) => (active ? '50%' : '1rem')};
  font-size: 3rem;

  transition: 0.3s;
  cursor: pointer;

  transform-style: preserve-3d;
`
