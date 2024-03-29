import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
`
export const Line = styled.div`
  width: 94%;
  height: 2px;
  background-color: #82ccdd;
  margin: 5px 3%;
`
export const Button = styled.button`
  all: unset;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: white;
  background-color: #0984e3;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  position: relative;
`
export const Number = styled.span`
  position: absolute;
  top: -10px;
  right: -15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #6c5ce7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
