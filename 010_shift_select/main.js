const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

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

  if (e.shiftKey && !this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }
      if (inBetween) {
        checkbox.checked = false;
      }
    });
  }
  // 쉬프트 안눌르고 클릭하면 바로실행
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
