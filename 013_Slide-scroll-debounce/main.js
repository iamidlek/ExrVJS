function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      // immediate는 true 가 기본으로 들어오므로 실행되지 않음
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// function debounce(func)

// Throttle => 트위터 같이 스크롤 마지막가면 추가 페이지로드 같이 특정 인터벌을 주고 실행
// 인터벌 중간에 들어온 내용은 무시된다
// var timer;
// document.querySelector('#input').addEventListener('input', function (e) {
//   if (!timer) {
//     timer = setTimeout(function() {
//       timer = null;
//       console.log('여기에 ajax 요청', e.target.value);
//     }, 200);
//   }
// });
// 디바운스 => 연이은 요청을 그룹화 하여 마지막 요청만  + 지연시간 하여 처리
// var timer;
// document.querySelector('#input').addEventListener('input', function(e) {
//   if (timer) {
//     clearTimeout(timer);// 200 까지 세는걸 0 으로 돌림
//   }
//   timer = setTimeout(function() {
//     console.log('여기에 ajax 요청', e.target.value);
//   }, 200);
// });

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {

  // 스크롤 이벤트는 너무 자주 발생되어 성능 저하를 발생시킴
  // console.log('실행됨')
  
  sliderImages.forEach(sliderImage => {
    console.log(window.innerHeight)
    // 보이는 화면의 bottom y값 + 이미지 높이의 반의 값
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2
    // 아마지의 bottom값
    const imageBottom = sliderImage.offsetTop + sliderImage.height

    const isHalfShown = slideInAt > sliderImage.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    } else {
      sliderImage.classList.remove('active')
    }
  })
}
window.addEventListener('scroll',debounce(checkSlide))
// window.addEventListener('scroll',checkSlide)


// timer = setTimeout(function() {
//   console.log('여기에 ajax 요청');
// }, 2000);
// // 반환값은 1
// console.log(timer)
