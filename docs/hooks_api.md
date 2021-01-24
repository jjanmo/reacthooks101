# Hooks API

> 리액트에서 제공하는 Hook API에 대해서 알아보자!

## useState

> useState는 리액트의 함수형 컴퍼넌트에서 `state를 관리하는 방법`에 대한 것이다. 즉 어떻게 `react state management machine`에 연결을 할 것인가에 대한 것이다.

```javascript
const [item, setItem] = useState(initialValue);
```

- 함수형 컴퍼넌트에서 state를 다루기 위해선 useState라는 함수를 사용한다. 기본적으로 useState는 `배열`을 리턴한다. 그 배열 안에는 `this.state`를 의미하는 `item`과 `this.setState`를 의미하는 `setItem`이 존재한다. 또한 useState의 인자로 넘겨주는 것은 `state의 초기값`이다. 기존에는 state를 설정할 때, 항상 객체형태로 넘겨주었지만, useState에서는 반드시 객체일 필요는 없다. 숫자 타입과 문자 타입 역시 가질 수 있다.

  > 반드시 위의 코드처럼 `item, setItem`이라고 할 필요는 없다. context에 맞는 이름을 사용하면 된다. 하지만 무슨 이름을 짓던지 항상 `state와 setState의 역할을 하는 2가지 요소`가 존재한다.

- 기존에 state를 다룰 때엔 setState를 사용하였다. setState는 기본적으로 state를 변경하고 나면 자동으로 re-rendering이 되었다. 여기서도 마찬가지이다. state를 변경하기 위해선 주어진 setter를 사용하는데, setter에 의해서 state가 변경되고 나면 re-rendering이 일어난다.

- state를 여러 개 사용하는 경우에는 여러 개의 useState를 사용하면 된다. 하지만 그 방법보다 useState 안에 객체를 생성하여 사용한다.

  ```JS
  const [inputs, setInputs] = useState({
    name : '',
    nickname : '',
  });

  //....

  onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name] : value
    });

  }
  ```

  > 여러 개의 텍스트를 입력 받는다고 가정했을 때의 예시 코드

## useEffect

> useEffect는 class 컴퍼넌트의 life cycle에서 사용되는 `몇 가지 메소드`를 합친 기능을 한다. 그것은 `componentDidMount`,`componentDidUpdate`, `componentWillUnmount`이다.

```javascript
useEffect(() => {}, [deps]);
```

## useRef

> Web API에서 `getElement~~` 혹은 `querySelector` 처럼 리액트에서 특정 엘리먼트를 선택할 수 있게 해주는 기능을 한다.

```javascript

```

## useContext

sdfsd
