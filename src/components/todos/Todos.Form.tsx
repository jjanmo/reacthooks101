import useTodosContext from '@context/todos'
import React, { useCallback, useContext, useState } from 'react'
import * as S from './Todos.Form.style'

const Form = () => {
  const { addTodo, deleteTodo } = useTodosContext()
  const [text, setText] = useState('')

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }, [])
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      addTodo(text)
      setText('')
    },
    [text]
  )
  const handleClickCancel = useCallback(() => {}, [])

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Input type="text" placeholder="텍스트 입력" value={text} onChange={handleChange} />
        <S.ButtonContainer>
          <S.SubmitButton type="submit">입력</S.SubmitButton>
          <S.CancelButton type="button" onClick={handleClickCancel}>
            취소
          </S.CancelButton>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  )
}

export default Form
