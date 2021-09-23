// Not a ton of code, but hard to
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    // fixed로 뜨면 요소 크기가 없어지므로 그 길이만큼 추가
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);
