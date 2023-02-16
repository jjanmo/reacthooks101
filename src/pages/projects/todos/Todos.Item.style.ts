import styled from 'styled-components'

export const Container = styled.li`
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 15px;
  font-size: 1.2rem;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid hsl(11, 90%, 80%);
  color: #353b48;

  &:hover {
    border-color: #d63031;
  }
`
export const Button = styled.button`
  all: unset;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
  color: white;
`
export const DoneButton = styled(Button)`
  background-color: #27ae60;
`
export const DeleteButton = styled(Button)`
  background-color: #c0392b;
`
