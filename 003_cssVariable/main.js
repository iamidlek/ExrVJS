// 컨트롤 div의 모든 input을 선택
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // html의 data- 를 dataset 으로 가져오고 sizing에 지정한 값을 불러온다
  // input type color 의 경우 dataset이 없으므로 undefined가 반환됨
  const suffix = this.dataset.sizing || '';
  // this.name input 요소의 name 이 반환된다
  // this.value 변화된 value 값이 반환 + suffix(접미사)로 단위가 붙음
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // document.documentElement.style로 css 스타일 데코레이션
  // setProperty로 미리 선언한 변수에 값을 주기 (변수의 값 변경)
}

// input의 값을 변경한 후에 적용 (color와 같이 다른 창에서 정하는 경우 change 감지)
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// input의 값을 변경중에 적용 (range와 같이 마우스를 움직여 지속적으로 변화시키는 경우)
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
