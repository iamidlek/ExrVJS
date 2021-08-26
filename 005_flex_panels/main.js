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
