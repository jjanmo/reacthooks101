# ReactHooks101

> Practical React Hooks : [`Learn by Building 10 Hooks`](https://nomadcoders.co/react-hooks-introduction) with _Nomad Coders_

> [React Hooks Official Document](https://ko.reactjs.org/docs/hooks-intro.html)

## Goals

- 리액트 훅스의 개념을 정리해보자 🐶

- 리액트 훅스를 통한 `ToDoApp` 을 만들어보자 🐱

  > Hooks TodoApp Demo

- 커스텀 훅(Custom Hook)을 만들어보기 🐰

## Hooks Backgorund

기본적으로 리액트에서는 `변화하는 값(state)`을 다루기 위해, 혹은 `API요청`을 필요로 할 때, [ **리액트의 라이프 라이클 메소드를 이용하는 상황** ] `class기반`으로 구현해야만 했다. 그렇기 때문에 함수형 컴퍼넌트를 사용하는데 있어서 애로사항이 존재하였다. 그런데 이것들을 함수형으로 해결하기 위해서 [recompose](https://github.com/acdlite/recompose) 라는 프로젝트가 `Andrew Clark`에 의해서 진행되었는데, 이 분이 React Team에 합류하게 되고, 이 프로젝트를 전격으로 리액트가 받아들여서 `React Hooks`가 탄생(?)하였다. `React Hooks`은 리액트를 함수형 컴퍼넌트에서도 클래스 컴퍼넌트와 동일하게 작동하게끔 구현하고자 하는 동기를 갖고 탄생하게 된 리액트의 업데이트 버전이다.

</br>

## Hooks Concept

> 리액트에 제공하는 Hooks API는 [총 10가지](https://ko.reactjs.org/docs/hooks-reference.html)가 존재한다. 모든 것을 정확히 알아야할지는 모르겠지만, 한 번쯤 알아보는 것 자체로서 도움이 될 것라 생각하여 <u>10가지의 훅스의 개념</u>에 대해서 정리해본다.

### Contents

> ⭐️이 들어있는 것은 내가 자주 사용하는 리액트 훅스이다. <i>초보자</i> 인 내가 자주 사용한다면, 기본적으로 알아야하지 않을까 해서 표시해본다.

- [useState ⭐️](./docs/hooks_api.md#usestate)

- [useEffect ⭐️](./docs/hooks_api.md#useeffect)

- [useContext ⭐️](./docs/hooks_api.md/#usecontext)

- useReducer

- useCallback ⭐️

- useMemo ⭐️

- [useRef ⭐️](./docs/hooks_api.md#useref)

- useImperativeHandle

- useLayoutEffect

- useDebugValue

</br>

## Hooks TodoApp

> [What I Learned this TodoApp](./docs/hooks_todoapp)

</br>

## Custom Hooks

> 커스텀 훅을 만들 때, 네이밍을 `use ~`라고 사용하는 이유?

- [ ] useInput

  > input을 업데이트하며, input value에 대한 validation을 사용할 수 있다.

- [ ] useTabs
  > 웹사이트의 메뉴 혹은 어떤 것이라도 tab을 사용하기 쉽게 만들어주는 것
- [ ] useTitle

  > 문서의 title을 업데이트 한다. 보통 `react helmet`을 사용하여 title을 변경하지만 이것을 hook로 구현해본다.

- [ ] useClick

  > 특정 엘리먼트를 클릭하는 것을 알려준다.

  > 같은 개념으로 `useHover`를 만들어 보자 : 특정 엘리먼트에 hover하는 것을 알려준다.

- [ ] useConfirm

  > 유저가 특정 동작을 하기 전에 그 동작에 대해서 알려주는 기능을 한다. 예를 들어서 클릭을 할 때, '진짜 클릭할거니?' 라는 확인을 받는 것이라고 할 수 있다. 일반적으로 브라우저에서 많이 볼 수 있는 `confirm()`과 비슷한 기능이라고 생각하면 될 것 같다.

  > **[참고]** 이 부분은 Hooks에 관한 것이라기보다 `함수형 프로그래밍`에 더 관련이 깊은 구현이라고 한다.(_nico said_). 리액트 훅은 리액트로 함수형 프로그래밍이 가능하도록 만들어준 것이기 때문에 좀 더 의미가 있다고 생각한다.

- [ ] usePreventLeave

  > 유저가 무엇인가 변경사항을 저장하지않고 페이지를 벗어나려고 할 때, 이를 감지하여 확인하도록 메세지를 보내는 기능을 말한다.

  > **[참고]** 이 부분 역시 Hooks를 사용하지 않는다.

- [ ] useBeforeLeave

  > 페이지를 벗어날 때 특정 함수가 실행되도록 만드는 기능을 말한다. 예를들어 페이지를 벗어날 때, 벗어나지 말라고 상품을 할인해준다거나 하는 팝업을 띄우게 할 수도 있다.

- [ ] useFadeIn

  > 특정 엘리먼트가 서서히 나타나도록 하는 기능을 구현한다.

- [ ] useNetwork

  > 네트워크가 온라인인지 오프라인인지 감지하여 알려주는 기능을 말한다.

- [ ] useScroll

  > 스크롤을 감지하여 추가 기능을 부여할 수 있다.

- [ ] useFullscreen

  > 전체화면 기능을 구현한다.

- [ ] useNotification

  > 유저가 notification API를 사용할 때 알림을 보내주는 것

- [ ] useAxios

  > HTTP request client axios를 위한 wrapper의 역할

- [ ] useInfiniteScroll
  > 무한 스크롤
