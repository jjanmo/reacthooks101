import { useRouter } from 'next/router'
import Tictactoe from '@components/tictactoe'

export default function Projects() {
  const router = useRouter()
  const pid = Number(router.query.pid)

  return <>{pid === 1 && <Tictactoe />}</>
}
