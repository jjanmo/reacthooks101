# ReactHooks101

> 리액트 훅스에 대해서 알아보자.

<details>
<summary>Log 📖 </summary>
- 21.12 Restart and Reset all

- 22.01.03 Finish MiniProject03

- 23.02.01 리액트훅스101 페이지화!

- [Archive]()

</details>

## Intro

예전에 리액트에서는 `상태 변화`을 관리하기 위해, 혹은 `API요청`을 필요로 할 때, **리액트의 라이프 라이클 메소드를 이용하는 상황**에서는 항상 `class기반`으로 구현해야만 했다. 그렇기 때문에 함수형 컴퍼넌트는 단순히 props를 건네주는 역할을 통해서 단순 presenter의 역할의 컴퍼넌트로서 사용되었다.

이러한 함수형 컴퍼넌트가 갖는 문제점을 해결하기 위해서, 함수형을 좀 더 발전시키기 위해서 [recompose](https://github.com/acdlite/recompose) 라는 프로젝트가 `Andrew Clark`에 의해서 진행되었다. 이 프로젝트가 좋은 반응을 얻으면선 점차적으로 함수형 리액트에 대한 요구가 많아졌고, 실제로 페이스북 내부적으로 함수형 리액트(훅스)를 개발 중에 있었다고 한다. 결과적으로 Andrew는 React Team에 합류하게 되고, 이 프로젝트를 전격적으로 리액트가 받아들여서 `React Hooks`가 탄생(?)하였다. `React Hooks`은 리액트를 함수형 컴퍼넌트에서도 클래스 컴퍼넌트와 동일하게 작동하게끔 구현하고자 하는 동기를 갖고 탄생하게 된 리액트의 업데이트 버전이라고 할 수 있다.

## What is Hooks

훅스는 색다른 개념이 아니다. 기존의 함수형 컴퍼넌트에 약간의 기능(?)이 추가된 개념이다. 즉 자바스크립트 함수와 개념적으로 같다. 여기서 알아두어야 할 훅스의 2가지 규칙이 있다.

- 항상 최상위(at the Top Level)에서만 Hook을 호출해야 한다. 반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하게 되면 에러가 발생한다.

- 오직 React 함수 내에서 Hook을 호출해야 한다. 일반적인 자바스크립트 함수 내에서는 호출하면 안된다. 단, 커스텀 훅스 안에서는 다른 훅스를 호출할 수 있다.

## 그렇다면 왜 훅스는 이러한 규칙을 지켜야만 할까?

> 훅스가 내부적으로 어떻게 작동할까?

https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/

https://jeonghwan-kim.github.io/dev/2022/04/11/use-state.html

https://www.the-guild.dev/blog/react-hooks-system

https://ko.reactjs.org/docs/hooks-intro.html

## Hooks API

> 리액트에 제공하는 Hooks API는 [총 10가지](https://ko.reactjs.org/docs/hooks-reference.html)가 존재한다. 각각의 API가 어떻게 동작하고 어떻게 사용해야하는지 알아보자.

<details>
<summary>📌 Hook List </summary>

- [useState ](./docs/hooks_api.md#usestate)

- [useEffect ](./docs/hooks_api.md#useeffect)

- [useContext ](./docs/hooks_api.md/#usecontext)

- useReducer

- useCallback

- useMemo

- [useRef](./docs/hooks_api.md#useref)

- useImperativeHandle

- useLayoutEffect

- useDebugValue

</details>

## Hooks MiniProject

1. Lotto Game ✅

   > `lotto-game` directory

2. TicTacToe

   > `tictactoe` directory

   > useReducer와 Context API를 활용해보자.

3. Context Dashboard ✅

   > `dashboard` directory

   > Context API 활용하는 간단한 ToDo-Dashboard

4. Mine Sweeper

   > Hooks의 종합 선물세트!

## [Custom Hooks](./docs/custom_hooks.md)

> [유용한 커스텀 훅을 모아놓은 콜렉션 저장소 👍](https://github.com/streamich/react-use)

커스텀(사용자 정의)훅스는 기본적으로 제공되는 Hooks API를 사용하여 새로운 함수를 재정의한 훅스를 말한다. 커스텀 훅스의 네이밍은 항상 `use`로 시작해야한다. 여기서는 몇 가지 커스텀 훅스를 만들어 볼 것이다.

### Why & When to make custom hooks

- 여러 개의 컴퍼넌트에서 상태 관련 로직이 중복될 때, 커스텀 훅을 만들어서 재사용할 수 있다.(reusable)

- 여러 개의 로직을 분리하고 싶을 때, 커스텀 훅을 만들수 있다.(encapsulated)

- 커스텀 훅을 만듦으로서 테스트하기 용이해진다.(testable)

- 일반적으로 커스텀 훅은 특정 값을 반환한다. (이 부분은 무조건은 아니며, 컴퍼넌트 혹은 마크업도 반환가능하다.)

## Ref

- Practical React Hooks : [`Learn by Building 10 Hooks`](https://nomadcoders.co/react-hooks-introduction) with _Nomad Coders_

- [React Hooks Official Document](https://ko.reactjs.org/docs/hooks-intro.html)

---

개편

- hooks를 이용한 프로젝트 : nextjs에서 사용

  1.  Lotto Game
  2.  TicTacToe
  3.  TodoApp
  4.  Mine Sweeper

  [참고] https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn

  5.  2048 : https://play2048.co/ (실전-리액트-프로그래밍 : part1)

  ***

- 새로운 hooks에 대한 이해
  https://ko.reactjs.org/docs/hooks-reference.html
  https://betterprogramming.pub/5-new-hooks-in-react-18-300aa713cefe

- custom hooks : https://www.freecodecamp.org/news/react-hooks-every-project-should-use/

- https://github.com/mantinedev/mantine : 이 프로젝트를 분석하면서 직접 구현해보기!

docs
https://ko.reactjs.org/docs/hooks-intro.html

- intro 개요
- hooks의 등장 > 어떤 문제를 풀기 위해 나타난 슈퍼맨인지

  https://blog.logrocket.com/understanding-common-frustrations-react-hooks/

- hooks mechanism > 왜 우리는 훅스 규칙을 지켜야하는가?

  https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/
  https://hridoybanik.medium.com/mechanism-of-react-hooks-e59e8f3c65d
  https://indepth.dev/posts/1220/under-the-hood-of-react-hooks > + react fiber

hooks의 예시

- 실제 어떻게 사용했는지...
- jqeury 컴퍼넌트 사용
