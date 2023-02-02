import { useEffect, useRef, useState } from 'react'
import Ball from './Lotto.Ball'
import * as S from './Lotto.style'

export default function Lotto() {
  const clearedIds = useRef<ReturnType<typeof setTimeout>[]>([])
  const [lotto, setLotto] = useState<number[]>([])
  const [bonus, setBonus] = useState<number[]>([])
  const [isShowing, setIsShowing] = useState<boolean>(false)
  const [startedToggle, setStartedToggle] = useState<boolean>(true)

  const getLottoNumbers = () => {
    let selected: number[] = []

    while (selected.length < 7) {
      const number = Math.floor(Math.random() * 45 + 1)
      if (!selected.includes(number)) {
        selected = [...selected, number]
      }
    }

    return selected
  }

  const renderLottoNumbers = (numbers: number[]) => {
    const clearedIds = []
    setIsShowing(false)
    if (numbers.length === 7) {
      for (let i = 0; i < numbers.length; i++) {
        const tmp = numbers.slice(0, i + 1)
        clearedIds[i] = setTimeout(() => {
          if (i < 6) setLotto(tmp)
          else {
            setBonus(numbers.slice(6))
            setIsShowing(true)
          }
        }, 700 * i)
      }
    }
    return clearedIds
  }

  useEffect(() => {
    const lottoNumbers = getLottoNumbers()
    clearedIds.current = renderLottoNumbers(lottoNumbers)

    return () => {
      clearedIds.current.forEach((id) => clearTimeout(id))
    }
  }, [startedToggle])

  const handleClickRestart = () => {
    setStartedToggle(!startedToggle)
    setLotto([])
    setBonus([])
    clearedIds.current = []
  }

  return (
    <div>
      <h1>당첨 숫자</h1>
      <S.BallContainer>
        {lotto.map((number, index) => (
          <Ball key={index} number={number} />
        ))}
      </S.BallContainer>
      <h1>보너스 숫자</h1>
      {bonus.map((number, index) => (
        <Ball key={index} number={number} />
      ))}
      {isShowing && <button onClick={handleClickRestart}>다시 하기</button>}
    </div>
  )
}
