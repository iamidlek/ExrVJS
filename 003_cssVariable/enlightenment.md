# 새롭게 알게 된 내용

## html

### input & label

- 알고 있는 내용도 있지만 역시 복습과 연습은 중요

- input의 id 와 label의 for 로 묶어준다
- type 에는 range, color 도 있다
- input의 value에는 초깃값을 설정할 수 있다

- type=&quot;color&quot;의 경우 value=&quot;#fff&quot;로 축약할 수 없다

### data-*

- 필요한 정보를 담아둘 수 있어서 유용하다고 생각함
- 활용에 있어서는 약간의 아이디어가 필요한 것 같다

## css

### 변수(Variable) 사용

- css에서 변수 사용
- 새로운 속성명을 만드는 느낌이다
- scss의 $와 유사한 기능

```css
/* 변수 만들기 */
:root {
  --base: #FFF;
  --spacing: 10px;
  --blur: 0px;
}
/* 변수 사용 */
img {
  filter: blur(var(--blur));
  background: var(--base);
  padding: var(--spacing);
}
```


## javascritp

### html의 data-* 사용하기

```javascript
this.dataset.*
// dataset을 하지않은 요소의 경우 undefined

// 작업에선 undefined의 경우 공백으로 전환해 주었다
this.dataset.sizing || ''
```

### css를 조작하기

- css의 속성과 값을 지정할 수 있다

```javascript
document.documentElement.style.setProperty(`--${this.name}`, this.value

// this.name은 input 요소에서 name으로 지정한 값
// this.value는 input의 변경된 값이 들어오게 만든다
```

### addEventListener

- 저번 작업에서 'transitionend'를 처음 접했는데  
요번에는 'change'를 알게 되었다
- 'change'는 요소의 값이 변화된 것을 감지한다
