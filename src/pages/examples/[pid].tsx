import { useRouter } from 'next/router'
import Lotto from './lotto'

import Tictactoe from '@components/tictactoe'
import TodoApp from '@pages/examples/todos'

export default function Games() {
  const router = useRouter()
  const pid = Number(router.query.pid)

  return (
    <>
      {pid === 1 && <Lotto />}
      {pid === 2 && <Tictactoe />}
      {pid === 3 && <TodoApp />}
    </>
  )
}
