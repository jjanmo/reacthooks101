import { memo } from 'react'
import * as S from './Lotto.style'

const bgColorMap: { [key: number]: string } = {
  0: 'yellow',
  1: 'blue',
  2: 'red',
  3: 'grey',
  4: 'green',
}

function Ball({ number }: { number: number }) {
  const bgColor = bgColorMap[Math.floor((number - 1) / 10)]

  return <S.Ball bgColor={bgColor}>{number}</S.Ball>
}

export default memo(Ball)
