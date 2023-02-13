import { MONTHS } from '@constants/calendar'
import useFbStorage from '@hooks/useFbStorage'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import * as S from './GridCalendar.style'

export default function GridCalendar() {
  const { getImage } = useFbStorage()
  const [imageUrl, setImageUrl] = useState<string>('')
  const [activeMonth, setActiveMonth] = useState<number>(1)

  // useEffect(() => {
  //   getImage('images/months/apr.png').then((url) => setImageUrl(url))
  // }, [imageUrl])

  const handleClickMonth = useCallback(
    (month: number) => () => {
      setActiveMonth(month)
    },
    []
  )

  return (
    <S.Container>
      <S.GridContainer>
        {MONTHS.map(({ number, name, row, col, color }) => (
          <S.Month
            key={number}
            active={activeMonth === number}
            col={col}
            row={row}
            color={color}
            onClick={handleClickMonth(number)}
          >
            {number}월
          </S.Month>
        ))}
      </S.GridContainer>
    </S.Container>
  )
}
