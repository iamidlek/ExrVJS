# 새롭게 알게 된 내용

## html

- from
  - from 안에 ul등 input 태그 이외에도 묶어주고 싶은 것을 넣을 수 있다

- input
  - focus/blur 상태에 따른 placeholder 상태변화
  - 설정을 안할경우 입력이 시작되어야 placeholder가 사라진다

  ```html
  <input type="text" placeholder="보여질 내용"
  onfocus="this.placeholder = ''"
  onblur="this.placeholder = '보여질 내용'">
  ```

## css

### perspective

> rotateX와 같은 3D 효과를 줄 때
> 원근법의 거리가 되는 부분을 설정

- 부모 요소에 줄 때
  - perspective: px;
  - 원근감(도형이 실제로 입체적으로 눕는 느낌)

- 자식 요소에 줄 때
  - transform: perspective(px)
  - 본인에게서의 원근감(도형자체가 평면에서 모양이 변하는 느낌)

### :nth-chilid 홀짝

- 홀짝으로 효과를 주고 싶을 때
  - li:nth-child(even) 짝
  - li:nth-child(odd) 홀

### 그라데이션

```css
{
background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
background: radial-gradient(circle, white, blue, red);
}
```
- 선형 그라데이션 linear-gradient
  - to top ↑ 
  - to bottom　↓
  - to left ←
  - to right → 
  - n deg 각도 지정

- 원형 그라데이션 radial-gradient
  - 기본 center
  - top~right 설정 및 백분율 설정가능
  - closest-side 등 다양한 설정가능

## javascritp

### fetch & JSON

- fetch()
  - default로 GET방식
  - 취득할 리소스를 반드시 인수로 지정
  - Promise객체를 반환


```javascript
// fetch 반환이 프로미스여서 .then 사용
fetch(endpoint)// 주소.json 
  // JSON.parse(blob)? => bolb proto에 json()이 있다 해석해주기
  .then(blob => blob.json())// 여러 배열이 나옴
  
  // 배열로 되어있는 data를 spread해서 넣어준다
  .then(data => cities.push(...data));;
```

### js → html

1. json으로 가저온 정보를 배열로 만듬
2. 배열 정보에서 정규표현식으로 필터
3. 필요한 정보를 html 형식에 보간(``)으로 작성
4. 고차 함수를 사용해서 배열이 retrun 됨
5. .join('')으로 일반 html 문법처럼 만듬


## 느낀점

많이 사용되는 방식일 것 같다
pormise에 대해 공부해 보아야 할 것 같다
다른 내용으로도 구현해봐야겠다
