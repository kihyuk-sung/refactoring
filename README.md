# refactoring

리팩토링 2판


# 실행...?

`yarn set version berry`
`yarn install`
`yarn test`

# chapter 1

- 함수 추출하기
- 리팩터링은 프로그램 수정을 작은 단계로 나눠 진행한다. 그래서 중간에 실수하더라도 버그를 쉽게 찾을 수 있다.
- 임시 변수를 질의 함수로 바꾸기
  - 임시 변수는 자신이 속한 루틴에서만 의미가 있어서 루틴이 길고 복잡해지기 쉽다. 그래서 제거하는 것이 좋다.
- 변수 인라인하기
- 함수 선언 바꾸기
- 반복문 쪼개기
- 문장 슬라이드하기
- 리팩터링으로 인한 성능 문제는 `특별한 경우가 아니라면 일단 무시한다`. O(n)이 바뀔 정도는 아닐 것이기 때문이다.
- 조건부 로직을 다형성으로 바꾸기
