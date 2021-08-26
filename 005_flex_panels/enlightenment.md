# 새롭게 알게 된 내용

## css

### *, *:before, *:after

- * body내의 모든 태그 선택

- 추가로 가상클래스 선택자를 넣으면  
모든 태그의 붙는 가상클래스의 스타일을 정의 가능

### flex

헷갈리는 부분 다시 정리

- 교차 축 정렬
  - align-items 내부 아이템들이 한줄
  - align-content 내부 아이템들이 2줄이상
  - align-self 내부 아이템들을 개별적으로 정렬

- flex-flow
  - flex-flow: flex-direction flex-wrap
    - flex-direction: row column (-reverse)
    - flex-wrap: nowrap wrap(-reverse)

- display
  - flex => 본인은 block 내부 아이템들은 수평
  - inline-flex => 본인 inline 내부 아이템들은 수평

- order: -1 0 1 2 3 아이템의 순서 부여

- flex: flex-grow(0), flex-shrink(1), flex-basis(auto)
  - flex: 1 => 1 1 0 을 의미 basis는 생략시 0

- flex-grow
  - 0 이면 부모의 크기가 늘어나도 자신의 크기를 지킴
  - 0,1 이 있으면 100px 늘어날때 1만 100px 늘어남
  - 1,2,3 1은 1/6 2는 2/6 3은 3/6 의 영역을 차지

- flex-shrink
  - 사용빈도가 높지 않은 까다로운 계산방식을 사용
  - 요소의 너비 비율이 2:1 이고 shrink 2,1을 줄때  
  2x2 1x1 이되어 줄어드는 비율이 4/5, 1/5 가 된다

- flex-basis
  - 공간 배분 전 기본 너비를 설정
  - 0 일때
    - 아이템의 자체 너비를 기준으로 한다
  - auto 일때
    - 아이템 내부의 콘텐츠(글자)너비를 제한 부분이 계산됨
  - 특정 너비 일때
    - 특정 너비를 아이템에서 제한 부분이 계산됨

### shadow

- box-shadow: 안/밖 수평x 수직y 흐릿함 확산 색상 
  - inset 0 0 0 5px rgba(255,255,255,0.1);
- text-shadow: offset-x offset-y blur-radius color
  - 쉼표로 구분하여 여러 그림자를 줄 수 있다  
  0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);


## javascritp

### 원하는 기능 추가하기

- 기존 내용을 구현하면
  1. 클릭시 클릭한 panel 커짐 효과
  2. 같은 panel 클릭시 원위치
  3. 여러 요소 클릭시 모든 요소에 커짐 효과

- 변경한 내용
  1. 동일
  2. 동일
  3. 다른 요소 클릭시 해당 요소에만 커짐 효과


```javascript
// 여러 panel 요소를 가져옴
const panels = document.querySelectorAll('.panel');
 
function toggleOpen(e) {
  // 열려있는 panel을 다시 클릭 할 경우
  if (this.classList.length >= 4) {
    this.classList.remove('open')
    this.classList.remove('open-active')
  } else {
    // 다른 panel을 클릭하는 경우
    init()
    // add와의 차이? add는 계속 더하기만함
    // toggle은 on/off 처럼 on이면 off로 off면 on으로 바꾸어준다
    this.classList.toggle('open');
  }
}

function toggleActive(e) {
  if (this.classList.length < 3) {
    return
  } else {
    // flex라는 문자를 포함한다면
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
}
function init(){
  panels.forEach(function (panel) {
      panel.classList.remove('open')
      panel.classList.remove('open-active')
  });
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

## 느낀점

기본 코드가 있긴 했지만  
내가 구현하고 싶은 코드를 직접 추가하여  
원하는 방식대로 구현하는 방법을 찾아냄

약간의 성장은 보이는 것 같아서 만족
