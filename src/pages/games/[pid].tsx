import { useRouter } from 'next/router'
import Tictactoe from '@components/tictactoe'
import Lotto from '@components/lotto'
import TodoApp from '@components/todos'

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
