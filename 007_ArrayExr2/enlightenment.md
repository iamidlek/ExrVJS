# 새롭게 알게 된 내용

## javascritp

### some & every

- some()
  - boolean 값을 반환
  - 조건에 부합하는게 1개 이상이면 true

- every()
  - boolean 값을 반환
  - 전부 부합하여야 true
  - 조건에 부합하지 않는 경우가 1이상이면 false

### find & findIndex

- find()
  - 조건에 부합하는 요소 중 처음 찾은 요소를 반환
  - [{}, {}] 배열 안에 요소로 객체가 있으면 객체를 반환

- findIndex()
  - 조건에 부합하는 요소 중 처음 찾은 요소의 인데스를 반환
  - splice(index, 1) 구한 index로 해당 요소 제거 가능
  - 새로운 배열로 만들기  
  [...원본배열.slice(0, index), ...원본배열.slice(index + 1)]

## 느낀점

예제를 통하여 어떤 값이 반환되는지 다시 상기할 수 있어서 좋았다
