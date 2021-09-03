
const player = document.querySelector('.player');

const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
function updateButton() {
  // 여기서 this는 해당 이벤트를 받는 요소 즉 video이다
  const icon = this.paused ? '►' : '❚ ❚'
  // 토글 버튼 바꿔주기
  toggle.textContent = icon;
}

function skip() {
  // this.dataset 해당 요소의 dataset 정보
  // this.dataset.skip data-skip의 정보
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // this.value는 input의 range의 value이 반환
  // this.name은 해당 요소의 name값
  video[this.name] = this.value;
  // video의 volume, playbackRate요소에 값을 저장해준다
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
  // 전체 바에서 e.오프셋의 위치를 비율로
  // 만약 10% 면 전체 영상 시간을 곱해 해당 시간을 구한다
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip));

// 특정 값으로 딱 변했을때(보통 마우스무브 후 마우스 업 할때)
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
// 범위 내에서 조절할 때
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
