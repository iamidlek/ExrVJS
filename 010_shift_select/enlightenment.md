# 새롭게 알게 된 내용

## javascritp

### 변수로 컨트롤
- 선택 범위를 줄 때 어떻게 줄지 고민
  - 변수를 하나 두어 바로 전에 클릭된 요소를 잡아둠
  - 즉 이전 요소가 잡혀있고 현재 요소가 들어오면 계산됨

### addEventListener

- 콜백 함수로 불려진 함수 내에서의 this
  - this는 해당 이벤트를 감지한 요소를 의미한다

### 추가해 본 기능

- 반대로 범위로 선택 취소하는 기능

```javascript
function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  console.log(this.checked)
  // 쉬프트키를 누르면서 또한 체크가 되는 경우
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox

    // 처음부터 훑으며 처음 체크부분 확인,
    // 마지막 부분 확인 
    // 처음 전까지는 x 처음~ 마지막 까지는 체크로 변환
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      // 반대로도 가능하게 된다
      if (checkbox === this || checkbox === lastChecked) {
        // 처음 체크박스 or 마지막 체크박스 일때 반전이 되도록
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
// 추가코드
  if (e.shiftKey && !this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = false;
      }
    });
  }
  // 쉬프트 안눌르고 클릭하면 바로실행
  lastChecked = this;
}
```

## 느낀점

기능을 구현함에 있어서  
생각의 흐름대로만 구현하는 것이 아니라

컴퓨터의 Boolean 같은 부분을 생각하면서 코드를 만들어야겠다
