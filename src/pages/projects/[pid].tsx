import { useRouter } from 'next/router'
import Tictactoe from '@components/tictactoe'
import Lotto from '@components/lotto'

export default function Projects() {
  const router = useRouter()
  const pid = Number(router.query.pid)

  return (
    <>
      {pid === 1 && <Tictactoe />}
      {pid === 2 && <Lotto />}
    </>
  )
}
