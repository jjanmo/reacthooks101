# ReactHooks101

> Practical React Hooks : [`Learn by Building 10 Hooks`](https://nomadcoders.co/react-hooks-introduction) with _Nomad Coders_

> [React Hooks Official Document](https://ko.reactjs.org/docs/hooks-intro.html)

## Goals

- 리액트 훅을 이용하여 커스텀 훅(Custom Hook)을 만들어보기
- 만들어진 훅을 npm 저장소에 등록해보기

## Hooks Backgorund

기본적으로 리액트에서는 `변화하는 값(state)`을 다루기 위해, 혹은 `API요청`을 필요로 할 때 `class기반`으로 구현해야만 했다. 그렇기 때문에 함수형 컴퍼넌트를 사용하는데 있어서 애로사항이 존재하였다. 그런데 이것들을 함수형으로 해결하기 위해서 [recompose](https://github.com/acdlite/recompose) 라는 프로젝트가 `Andrew Clark`에 의해서 진행되었는데, 이 분이 React Team에 합류하게 되고, 이 프로젝트를 전격으로 리액트가 받아들여서 `React Hooks`가 탄생(?)하였다. `React Hooks`은 리액트를 함수형 컴퍼넌트에서도 클래스 컴퍼넌트와 동일하게 작동하게끔 구현하고자 하는 동기를 갖고 탄생하게 된 리액트의 업데이트 버전이다.

## Hooks Concept

> 리액트에 내장된 Hooks는 [총 10가지](https://ko.reactjs.org/docs/hooks-reference.html)가 존재한다.

### useState

> useState는 리액트의 함수형 컴퍼넌트에서 `state를 관리하는 방법`에 대한 것이다. 즉 어떻게 `react state management machine`에 연결을 할 것인가에 대한 것이다.

```javascript
const [item, setItem] = useState(initialValue);
```

- 함수형 컴퍼넌트에서 state를 다루기 위해선 useState라는 함수를 사용한다. 기본적으로 useState는 `배열`을 리턴한다. 그 배열 안에는 `this.state`를 의미하는 `item`과 `this.setState`를 의미하는 `setItem`이 존재한다. 또한 useState의 인자로 넘겨주는 것은 `state의 초기값`이다. 기존에는 state를 설정할 때, 항상 객체형태로 넘겨주었지만, useState에서는 반드시 객체일 필요는 없다. 숫자타입과 문자타입 역시 가질 수 있다.

  > 반드시 위의 코드처럼 `item, setItem`이라고 할 필요는 없다. context에 맞는 이름을 사용하면 된다. 하지만 무슨 이름을 짓던지 항상 `state와 setState의 역할을 하는 2가지 요소`가 존재한다.

- 기존에 state를 다룰 때엔 setState를 사용하였다. setState는 기본적으로 state를 변경하고 나면 자동으로 re-rendering이 되었다. 여기서도 마찬가지이다. state를 변경하기 위해선 주어진 setter를 사용하는데, setter에 의해서 state가 변경되고 나면 re-rendering이 일어난다.

- state를 여러 개 사용하는 경우에는 여러 개의 useState를 사용하면 된다.

### useEffect

> useEffect는 class 컴퍼넌트의 life cycle에서 사용되는 `몇 가지 메소드`를 합친 기능을 한다. 그것은 `componentDidMount`,`componentDidUpdate`, `componentWillUnmount`이다.

```javascript
```

### useRef

> Web API에서 `getElement~~` 혹은 `querySelector` 처럼 리액트에서 특정 엘리먼트를 선택할 수 있게 해주는 기능을 한다.

```javascript
```

### useContext

## Contents of Customizing Hooks & Features

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
