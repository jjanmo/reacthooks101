import Link from 'next/link'
import styled from 'styled-components'

export default function () {
  return (
    <>
      <h1>훅스를 사용한 미니 프로젝트</h1>
      <Container>
        <Item>
          <Link href="/1">로또번호 고르기</Link>
        </Item>
        <Item>
          <Link href="/2">틱택토</Link>
        </Item>
        <Item>
          <Link href="/3">투두리스트</Link>
        </Item>
        <Item>
          <Link href="/4">지뢰 찾기</Link>
        </Item>
        <Item>
          <Link href="/5">2480</Link>
        </Item>
        <Item>
          <Link href="/6">영어퀴즈</Link>
        </Item>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 60%;
  margin: auto;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  color: white;
`
const Item = styled.div`
  width: 100%;
  height: 100%;
`
