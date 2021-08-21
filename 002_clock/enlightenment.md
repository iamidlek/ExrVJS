# 새롭게 알게 된 내용

## css

### box-shadow

> 잘 안써본 효과라 생소했다

-  수평 거리(오프셋), 수직 거리(오프셋), 흐릿함, 확산 정도, 색상
- offset-x | offset-y | blur-radius | spread-radius | color 
- inset으로 박스 안쪽에 효과를 줄 수도 있다

```css
{
  box-shadow:
  0 0 0 4px rgba(0,0,0,0.1),
  inset 0 0 0 3px #EFEFEF,
  inset 0 0 10px black,
  0 0 10px rgba(0,0,0,0.2);
}
```

### transform-origin

- transform이 일어나는 점
- 기본값은 50%로 요소의 가운데
- right 또는 100%를 주면 요소의 오른쪽이 중심이 된다

### transition-timing-function

- 변화가 일어나는 속도를 조절하는 그래프를 값으로 가진다
- [cubic-bezier](https://cubic-bezier.com/) 여기서 확인해가며 만든다


## javascritp

### setInterval

- scheduling a call(호출 스케줄링)
- setInterval로 일정 시간 간격마다 콜백 함수를 실행하는 방법을 알게 되었다
- setInterval(콜백함수, 1000)
- 밀리 세컨드의 값이 들어간다

### new Date()

- 변수에 지금의 시간 정보를 담아서 사용할 수 있다
- 변수. getSeconds(), .getMinutes(), .getHours() 등을 사용할 수 있다

### 시간과 각도

- 시간을 이용하여 각도를 구하여 시계를 구현하는 방식이었다

- Seconds, Minutes
  1. 60초와 0초는 0도여야 하기 때문에 현재 초 / 60 을 한다
  2. 위의 계산에서 `1초`는 1/60 의 값이 된다
  3. `1초`는 시계에서 6도여야 하기 때문에 1/60 * x = 6 => x = 360
  4. ((seconds / 60) * 360) 결과가 된다
  5. 기존 90도(12시를 가리키게 하기 위함)를 주고 있기 때문에 +90를 해준다

- Hours
  1. 시간은 시간이 가지는 각도 + 분에 따른 각도로 움직인다  
  (한 번에 1시에서 2시로 시침이 이동하지 않는다는 의미)
  2. 1시간당 30도를 가진다 => (시 / 12) * 360 = 30
  3. 1분당 움직여야 하는 각도는 0.5도 => (분 / 60) * 30 = 0.5
  4. ((hour / 12) * 360) + ((mins / 60) * 30) 결과가 된다
  5. 초, 분과 마찬가지로 +90를 해준다
