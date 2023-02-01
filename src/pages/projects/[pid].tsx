import { useRouter } from 'next/router'
import Tictactoe from '@components/tictactoe'

export default function Projects() {
  const router = useRouter()
  const pid = router.query.pid

  return <>{pid === 'tictactoe' && <Tictactoe />}</>
}
