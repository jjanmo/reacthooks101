import Link from 'next/link'
import * as S from './GNB.style'
import React from '@icons/react'
import { useEffect, useRef } from 'react'

export default function GNB() {
  const animationContainer = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const animationContainerWidth = animationContainer.current
  //   console.dir(animationContainerWidth?.offsetWidth)
  //   console.log(document.documentElement.scrollHeight)

  //   console.log(window.scrollY)
  // }, [window.scrollY])

  return (
    <S.Container>
      <S.LogoText>
        <Link href="/">reacthooks 101</Link>
      </S.LogoText>
      <S.AnimationContainer ref={animationContainer}>
        <S.LogoWrapper>
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
