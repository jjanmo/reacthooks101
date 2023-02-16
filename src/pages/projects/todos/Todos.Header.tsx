import React, { useCallback, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCog, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import useTodosContext from '@context/todos'
import * as S from './Todos.Header.style'

const Header = () => {
  const { addTodo, todos } = useTodosContext()

  const handleClickAdd = useCallback(() => {}, [])

  return (
    <>
      <S.Container>
        <S.Button onClick={handleClickAdd}>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </S.Button>
        <S.Button>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </S.Button>
        <S.Button>
          <FontAwesomeIcon icon={faCog} size="2x" />
        </S.Button>
        <S.Button>
          <FontAwesomeIcon icon={faBell} size="2x" />
          <S.Number>{todos.length}</S.Number>
        </S.Button>
      </S.Container>
    </>
  )
}

export default Header
