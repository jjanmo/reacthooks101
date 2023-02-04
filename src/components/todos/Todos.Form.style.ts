import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`
// .hiddenContainer {
//   composes: container;
//   display: none;
// }

export const Form = styled.form`
  width: 80%;
  height: 30%;
  background-color: #c7ecee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const Input = styled.input`
  all: unset;
  outline: none;
  background-color: #eee;
  border-radius: 10px;
  border: 1px solid #22a6b3;
  width: 80%;
  font-size: 18px;
  padding: 5px 10px;
  margin-bottom: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  all: unset;
  background-color: white;
  cursor: pointer;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
`
export const SubmitButton = styled(Button)`
  background-color: #27ae60;
`
export const CancelButton = styled(Button)`
  background-color: #c0392b;
`
