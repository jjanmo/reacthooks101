# Hooks API

> 리액트에서 제공하는 [Hook API](https://ko.reactjs.org/docs/hooks-reference.html)에 대해서 알아보자!

## useState

useState는 리액트의 함수형 컴퍼넌트 내부에서 `state를 유지/관리` 하는 훅이다.

### 동작방식

```jsx
const [state, setState] = useState(initialState);
```

- useState는 상태값과 상태를 업데이트 하는 함수를 `튜플` 형태로 리턴한다. 그리고 useState의 인자로서는 초기값을 넣어준다. 반드시 위의 코드처럼 `state`, `setState`이라고 할 필요는 없다. context에 맞는 이름을 사용하면 된다. 하지만 무슨 이름을 짓던지 항상 `상태값`과 `상태값을 업데이트 하는 함수`가 존재한다.

- `setState`는 새로운 상태값을 받아서 해당 컴퍼넌트와 하위 자식 컴퍼넌트를 리랜더링 해준다. 그래서 항상 상태값이 최신의 상태로 유지될 수 있다.

  > useCallback, useEffect의 deps에 setState를 넣어주지 않아도 된다. 왜냐하면 리액트에서 해당 함수의 동일성을 보장하기 때문이다. 즉 리랜더링시에도 해당 함수는 변경되지 않는다.

- 상태를 변경시키고자 할 때, setState의 인자로서 값뿐만 아니라 업데이트 함수를 넣어줄 수 있다. `setState((prevState) => prevState + 1)` 이처럼 인자로 이전 상태값을 받고 새로운 상태값을 리턴하면 된다.

  - 그렇다면 언제 이러한 업데이트 함수를 사용해야할까?

    ```jsx
    const [state, setState] = useState({
      value: 0,
    });

    setState({ value: state.prevState + 1 });
    setState({ value: state.prevState + 1 });
    setState({ value: state.prevState + 1 });

    console.log(state); // ?
    ```

    위 예시를 보면 state 안에 value가 몇일지 예상해볼 수 있다. 일반적으로 3이라고 생각할 수 있다. 하지만 결과값은 1이다. 우리가 여기서 궁금해야 할 부분은 2가지이다. **1️⃣ 첫번째는 왜 이런 현상이 나타나는가?**, **2️⃣ 두번째는 어떻게 하면 우리가 원하는대로 수정할 수 있을까** 이다.

  - 위 코드를 수정하는 방법 <2️⃣>

    위와 같은 연속적인 업데이트를 하고자 할 때, setState의 인자로 업데이트 함수를 넣어주면 우리가 원하는대로 작동하는 로직을 만들 수 있다.

  - 왜 그런거야?? <1️⃣>

    setState는 기본적으로 `비동기적`으로 작동한다. 이를 확인하기 위해서 아래와 같은 코드를 작성해보면 알 수 있다.

    ```jsx
    // 현재 count의 값 : 1, 클릭을 통해서 해당 값을 올리는 카운터 구현했다고 가정
    const onClick = () => {
      setState(count + 1); // 2로 업데이트
      console.log(count); // 2를 예상할 수 있다. 하지만 결과는 1이다.
    };
    // → onClick 이벤트가 끊난 후에 state는 업데이트 된다.
    ```

    setState가 비동기적으로 작동하는 이유는 리액트의 `batch processing(일괄 배칭)` 때문이다. 리액트는 setState를 만나면, 이를 바로 업데이트하지 않고 <u>어떤 기준</u>에 의해서 객체합성(Object Composition)을 통해 상태를 합치기 시작한다. 이렇게 최종적으로 만들어진 상태를 **한 번만 랜더링**한다. 그렇기 때문에 위 코드에서 우리가 원하는 결과가 나오지 않은 이유는 setState가 3번 실행되었지만, `{ value: state.prevState + 1 }` 이 객체가 객체합성을 통해서 계속 오버라이팅이 되었기 때문이다. 그럼 왜 업데이트함수는 제대로 작동할까? 업데이트 함수는 그 전의 상태을 인자로 넣어주기 때문에 setState를 실행하는 시점의 상태값을 갖을 수 있다. 그래서 우리가 원하는 결과값을 갖게 되는 것이다.

  - 왜 리액트는 이러한 일괄 배칭을 하는 것인가?
    예를 들어서 setState가 100번 호출되는 경우, 이것을 100번 랜더링한다고 생각해보자. 얼마나 비효율적인가? 실제 앱에서도 이처럼 수많은 setState가 실행이 되는데 이 때마다 랜더링이 된다면 그 비효율은 누가 감당하게 될까? 그래서 리액트에서는 리액트의 더 나은 성능 향상 위해서 여러 개의 상태변경이 진행된다면 이를 하나로 묶어서 변경시킨 후 리랜더링하는 프로세스를 만든 것이다.
    그런데 위에서 <u>어떤 기준</u>에 의해서 하나로 합친다고 말을 했다. 현재까지는 그 기준이 명확하지 않았다. 리액트에서 말하길, 이벤트에서의 업데이트만을 지원한다고 했다. 그러나 조만간 있을 React 18버전에서는 업데이트가 어디서 진행되는지에 관계없이 자동으로 배칭이 이루지게 업데이트가 일어난다고 한다. 아주 좋은 소식!! 🎉

      <details>
      <summary >참고자료 </summary>

    - [setState 를 함수형으로 사용하기](https://dodokim.medium.com/setstate-%EB%A5%BC-%ED%95%A8%EC%88%98%ED%98%95%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-763402cbc3e5)

    - [React State Batch Update](https://medium.com/swlh/react-state-batch-update-b1b61bd28cd2)

    - [React 18: 렌더링 최적화를 위한 자동 배칭](https://immigration9.github.io/react/2021/06/12/automatic-batching-react.html)

    - [Why does Async Await work with React setState](https://stackoverflow.com/questions/47019199/why-does-async-await-work-with-react-setstate)

      </details>

## useEffect

useEffect는 side-effect(부수효과)를 컨트롤 하는 기능을 합쳐 놓은 훅이다. 클래스 컴퍼넌트에서의 라이프 사이클에서 사용되는 `몇 가지 메소드`를 합친 기능을 한다. 그것은 `componentDidMount`,`componentDidUpdate`, `componentWillUnmount`이다.

```jsx
useEffect(() => {}, [deps]);
```

## useRef

2가지 기능을 할 수 있다.

- 엘리먼트에 접근해서 해당 요소를 담을 수 있다. 즉 엘리먼트를 담아서 이를 이용할 수 있다.
- 변수로서 활용 가능

```jsx

```

## useContext

## useReducer

## useCallback

## useMemo

## useRef

## useImperativeHandle

## useLayoutEffect

## useDebugValue
