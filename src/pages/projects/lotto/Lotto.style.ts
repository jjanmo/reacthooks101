import styled from 'styled-components'

export const BallContainer = styled.div`
  display: flex;
`

export const Ball = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 10px;
`
