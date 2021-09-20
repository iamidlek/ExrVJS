const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')

const walk = 100 // 100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height} = hero
  // console.log(width, height) 
  // widht 100% height 100vh 의 값이 나옴

  // 마우스의 좌표 정보
  let { offsetX: x, offsetY: y} = e
  // hero 태그에 들어가면 e x,y가 해당 태그를 기준으로 ..
  // this는 이벤트 리슨하는 대상 e.target은 트리거 대상
  // 즉 전체 에서의 거리에서 요소안의 거리 더한 값
  // console.log('1',x,y)
  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }
  // console.log('2',x,y)
  // 범위를 50 ~ -50 으로 정하는 식
  // ex 0 0 이면 -50 -50
  // ex 100 너비 100 높이의 x,y 100 100 이면 1, 1 * walk - 50 즉 50 50 
  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `
}

hero.addEventListener('mousemove', shadow)
