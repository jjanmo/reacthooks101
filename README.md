# ReactHooks101

> Practical React Hooks : [`Learn by Building 10 Hooks`](https://nomadcoders.co/react-hooks-introduction) with _Nomad Coders_

> [React Hooks Official Document](https://ko.reactjs.org/docs/hooks-intro.html)

## Goals

- 리액트 훅을 이용하여 커스텀 훅(Custom Hook)을 만들어보기
- 만들어진 훅을 npm 저장소에 등록해보기

## Hooks Backgorund

기본적으로 리액트는 state를 다루기 위해선 `class기반`으로 구현해야만 했다. 그렇기 때문에 함수형 컴퍼넌트를 사용하는데 있어서 애로사항이 존재하였다. 그런데 이것들을 함수형으로 해결하기 위해서 [recompose](https://github.com/acdlite/recompose) 라는 프로젝트가 `Andrew Clark`에 의해서 진행되었는데, 이 분이 React Team에 합류하게 되고, 이 프로젝트를 전격으로 리액트가 받아들여서 `React Hooks`가 탄생(?)하였다. `React Hooks`은 리액트를 함수형 컴퍼넌트에서도 클래스 컴퍼넌트와 동일하게 작동하게끔 구현하고자 하는 동기를 갖고 탄생하게 된 리액트의 업데이트 버전이다.

## Hooks Concept

> Hooks는 기본적으로 리액트의 함수형 컴퍼넌트에서 `state를 관리하는 방법`에 대한 것이다. 즉 어떻게 `react state management machine`에 연결을 할 것인가에 대한 이야기

### useState

```javascript
const [item, setItem] = useState(initialValue);
```

- 함수형 컴퍼넌트에서 state를 다루기 위해선 useState라는 함수를 사용한다. 기본적으로 useState는 `배열`을 리턴한다. 그 배열 안에는 `this.state`를 의미하는 `item`과 `this.setState`를 의미하는 `setItem`이 존재한다. 또한 useState의 인자로 넘겨주는 것은 `state의 초기값`이다. 기존에는 state를 설정할 때, 항상 객체형태로 넘겨주었지만, useState에서는 반드시 객체일 필요는 없다. 숫자타입과 문자타입 역시 가질 수 있다.

  > 반드시 위의 코드처럼 `item, setItem`이라고 할 필요는 없다. context에 맞는 이름을 사용하면 된다. 하지만 무슨 이름을 짓던지 항상 `state와 setState의 역할을 하는 2가지 요소`가 존재한다.

- 기존에 state를 다룰 때엔 setState를 사용하였다. setState는 기본적으로 state를 변경하고 나면 자동으로 re-rendering이 되었다. 여기서도 마찬가지이다. state를 변경하기 위해선 주어진 setter를 사용하는데, setter에 의해서 state가 변경되고 나면 re-rendering이 일어난다.

- state를 여러 개 사용하는 경우에는 여러 개의 useState를 사용하면 된다.

### useEffect

## Contents of Customizing Hooks & Features

- [ ] useInput

  > input을 업데이트하며, input value에 대한 validation을 사용할 수 있다.

- [ ] useTabs
- [ ] useTitle
- [ ] useClick
- [ ] useConfirm
- [ ] usePreventLeave
- [ ] useBeforeLeave
- [ ] useFadeIn
- [ ] useNetwork
- [ ] useScroll
- [ ] useFullscreen
- [ ] useNotification
- [ ] useAxios
