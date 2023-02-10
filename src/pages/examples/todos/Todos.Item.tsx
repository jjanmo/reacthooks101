import React, { useContext } from 'react'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './item.module.css'
import useTodosContext, { Todo } from '../../../contexts/todos'
import * as S from './Todos.Item.style'

const Item = ({ id, text, status }: Todo) => {
  const { deleteTodo, addItem } = useTodosContext()

  return (
    <S.Container>
      <div>{text}</div>
      <div>
        <button>
          <FontAwesomeIcon icon={faCheck} size="2x" />
        </button>
        <button>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
      </div>
    </S.Container>
  )
}

export default Item
