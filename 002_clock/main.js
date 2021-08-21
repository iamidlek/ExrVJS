const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand');

function setDate () {
  const now = new Date();
  
  // 현재 시간의 초
  const seconds = now.getSeconds();

  // 실제 시계에서의 각도는 어떻게 될까?
  // 기본 90도(12시로 맞춘부분이 초기화 되지 않게 + 90)
  // 30초를 기준으로 해보면 270이 나와야하고 90을 제하면 180
  // 30을 180으로하려면 6을  곱해주면 된다 360/60 
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;

  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hour = now.getHours();

  // 자연스러운 각도를 위해 분마다 이동
  // 시간 고정값 + 분에 따른 각도 추가
  // 1시 = 30도 360/12  
  // 60분 = 30도 움직임 30/60
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


// 인터벌 시간마다 setDate함수를 실행
setInterval(setDate, 1000);
