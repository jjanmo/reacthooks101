import Link from 'next/link'
import * as S from './GNB.style'

export default function GNB() {
  return (
    <S.Container>
      <div>로고</div>
      <S.List>
        <li>
          <Link href="/documents">Documents</Link>
        </li>
        <li>
          <Link href="/examples">Examples</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </S.List>
    </S.Container>
  )
}
