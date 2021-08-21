// NodeList를 배열로 바꾸어도 된다
// const keys = Array.from(document.querySelectorAll('.key'));
const keys = document.querySelectorAll('.key')
// 각각의 버튼의 transition이 끝나면 removeTransition을 실행
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// 키가 눌리면 playSound 실행
window.addEventListener('keydown', playSound);


function removeTransition(e) {
  // transition이벤트가 종료되면 propertyName: "" 가 반환된다
  // "" 에는 border, transform 등등 다량의 정보가 반환된다
  // 그중 transform 이 끝나는 내용만 잡아준다(어떤 것이던 상관은 없다) 
  if (e.propertyName !== 'transform') return;
  // this는 이 함수를 콜하는 함수를 가르킨다(key.addEventListener)
  this.classList.remove('playing');
  // 이하의 방법도 가능하다
  // e.target.classList.remove('playing');
}

// 키보드 눌림 이벤트를 받는다
function playSound(e) {
  // keyCode 눌린 키보드의 아스키값
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // 연결된 오디오가 없으면 종료
  if (!audio) return;

  // 클래스를 부여하여 스타일 변화 주기
  key.classList.add('playing');
  
  // Audio 객체의 음악의 재생 지점
  // 0 값인 경우에 처음부터 음악을 재생(단위 : 초)
  // 연속 적으로 눌러야 할 때 유용
  audio.currentTime = 0;
  
  // 음악 파일 재생
  audio.play();
}
