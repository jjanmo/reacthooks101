import Link from 'next/link'
import * as S from './GNB.style'
import React from '@icons/react'
import { useEffect, useRef, useState } from 'react'

/**
 *  TODO
 * - responsive hooks
 * - scroll hooks + optimization
 * - scroll에 반응하는 애니메이션
 */

export default function GNB() {
  const animationContainer = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (animationContainer.current) {
        const scrollY = document.documentElement.scrollTop
        const scrollHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight

        const distance = (scrollY / scrollHeight) * (animationContainer.current.offsetWidth - 60)
        setDistance(distance)
      }
    })
  }, [])

  return (
    <S.Container>
      <S.LogoText>
        <Link href="/">reacthooks 101</Link>
      </S.LogoText>
      <S.AnimationContainer ref={animationContainer}>
        <S.LogoWrapper distance={distance}>
          <React />
        </S.LogoWrapper>
      </S.AnimationContainer>
      <S.List>
        <S.NavItem>
          <Link href="/documents">documents</Link>
        </S.NavItem>
        <S.NavItem>
          <Link href="/examples">examples</Link>
        </S.NavItem>
        <S.NavItem>
          <Link href="/about">about</Link>
        </S.NavItem>
      </S.List>
    </S.Container>
  )
}
