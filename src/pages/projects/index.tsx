import Link from 'next/link'
import * as S from './styles'

export default function () {
  const projects = ['로또번호 고르기', '틱택토', '투두리스트', '지뢰 찾기', '2480', 'ComingSoon']

  return (
    <S.Container>
      <S.Title>ReactHooks Projects</S.Title>

      <S.GridContainer>
        {projects.map((project, index) => (
          <S.Item key={project} color={`${Math.floor(Math.random() * (9 - 1) + 1) * 100}`}>
            <S.InnerBox>
              <Link href={`/projects/${index + 1}`}>{project}</Link>
            </S.InnerBox>
          </S.Item>
        ))}
      </S.GridContainer>
    </S.Container>
  )
}
