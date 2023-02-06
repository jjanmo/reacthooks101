import styled, { keyframes } from 'styled-components'

const rotating = keyframes`
  0%{
    transform : rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 10rem;
  padding: 0 5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`
export const List = styled.ul`
  display: flex;
  justify-self: flex-end;
`
export const NavItem = styled.li`
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;

  & + & {
    margin-left: 2.6rem;
  }
`
export const LogoText = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const AnimationContainer = styled.div`
  position: relative;
  height: 100%;
  margin: 0 1rem;
  /* background-color: red; */
  flex: 1;
  display: flex;
  align-items: center;
`
export const LogoWrapper = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;

  & svg {
    animation: ${rotating} 2s linear infinite;
    transform-origin: center center;
  }
`
