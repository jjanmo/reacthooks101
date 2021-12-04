# Custom Hooks

- useInput

- useTabs

  > 웹사이트의 메뉴 혹은 어떤 것이라도 tab을 사용하기 쉽게 만들어주는 것

- useTitle

  > 문서의 title을 업데이트 한다. 보통 `react helmet`을 사용하여 title을 변경하지만 이것을 hook로 구현해본다.

- useClick

  > 특정 엘리먼트를 클릭하는 것을 알려준다.

- useHover

  > 같은 개념으로 `useHover`를 만들어 보자 : 특정 엘리먼트에 hover하는 것을 알려준다.

- useConfirm

  > 유저가 특정 동작을 하기 전에 그 동작에 대해서 알려주는 기능을 한다. 예를 들어서 클릭을 할 때, '진짜 클릭할거니?' 라는 확인을 받는 것이라고 할 수 있다. 일반적으로 브라우저에서 많이 볼 수 있는 `confirm()`과 비슷한 기능이라고 생각하면 될 것 같다.

  > **[참고]** 이 부분은 Hooks에 관한 것이라기보다 `함수형 프로그래밍`에 더 관련이 깊은 구현이라고 한다.(_nico said_). 리액트 훅은 리액트로 함수형 프로그래밍이 가능하도록 만들어준 것이기 때문에 좀 더 의미가 있다고 생각한다.

- usePreventLeave

  > 유저가 무엇인가 변경사항을 저장하지않고 페이지를 벗어나려고 할 때, 이를 감지하여 확인하도록 메세지를 보내는 기능을 말한다.

  > **[참고]** 이 부분 역시 Hooks를 사용하지 않는다.

- useBeforeLeave

  > 페이지를 벗어날 때 특정 함수가 실행되도록 만드는 기능을 말한다. 예를들어 페이지를 벗어날 때, 벗어나지 말라고 상품을 할인해준다거나 하는 팝업을 띄우게 할 수도 있다.

- useFadeIn

  > 특정 엘리먼트가 서서히 나타나도록 하는 기능을 구현한다.

- useNetwork

  > 네트워크가 온라인인지 오프라인인지 감지하여 알려주는 기능을 말한다.

- useScroll

  > 스크롤을 감지하여 추가 기능을 부여할 수 있다.

- useFullscreen

  > 전체화면 기능을 구현한다.

- useNotification

  > 유저가 notification API를 사용할 때 알림을 보내주는 것

- useAxios

  > HTTP request client axios를 위한 wrapper의 역할

- useInfiniteScroll

  > 무한 스크롤
