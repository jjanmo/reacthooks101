import * as S from './Layout.style'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
