# 새롭게 알게 된 내용

## html

### video태그 

- 자동 재생이나 여러가지 설정을 태그 내에서 정하는 방식을 배움
- 요번 예제에서는 나머지 버튼 등을 별도로 js로 연결해서 사용

## javascritp

### vide요소 정보

- video.paused
  - 동영상이 멈춤 상태이면 true

- video.currentTime
  - 동영상의 현재 재생위치(시간)

- video.duration
  - 동영상의 길이

- video[this.name] = this.value;
  - video의 volume, playbackRate에 값을 저장해준다

### addEventListener

- play
  - 요소가 재생되는 것을 감지
- pause
  - 요소가 멈추는 것을 감지

- timeupdate
  - 재생 위치(시간)가 변경됨을 감지

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

비디오를 playbackRate로 쉽게 배속 설정할 수 있다는 걸 알았다  
다른 인코딩 방식이 있는 줄 알았는데 신기했다

this.dataset.정의한이름 = 값이 나옴을 복습할 수 있어서 좋았다
