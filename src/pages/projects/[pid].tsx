import { useRouter } from 'next/router'
import Lotto from '@pages/projects/lotto'
import TodoApp from '@pages/projects/todos'
import Tictactoe from '@components/tictactoe'

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
