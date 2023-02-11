import { COLORS, COLORS_KEY } from '@styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  width: fit-content;
  margin: 5rem 0;
  font-size: 3rem;
  text-align: center;
`
export const GridContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 200px);
  gap: 4rem;
  color: white;
`

export const InnerBox = styled.div`
  width: 12rem;
  height: 12rem;
  padding: 2rem;
  border-radius: 50%;
  color: white;

  font-size: 1.8rem;
  line-height: 3rem;
  word-break: keep-all;
  transition: all 0.5s ease-in-out;

  &:hover {
    width: 100%;
    height: 100%;
    font-size: 3rem;
    border-radius: 0;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
export const Item = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border: ${({ color }) => `2px solid ${COLORS[color as COLORS_KEY]}`};
  border-radius: 1rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;

  ${InnerBox} {
    background-color: ${({ color }) => COLORS[color as COLORS_KEY]};
  }

  &:hover {
    border-radius: 0;
  }
`
