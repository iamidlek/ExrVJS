// querySelectorAll은 유사배열 Nodelist를 반환한다
  // 배열 내장 함수를 사용하기 위해 배열로 변환 [...timeNodes]도 가능
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

  const seconds = timeNodes
    .map(node => node.dataset.time)
    // time요소 배열을 하나씩
    .map(timeCode => {
      // splist으로 배열이됨 .map으로 parseFloat 해줌(문자열이 아니라 숫자로)
      const [mins, secs] = timeCode.split(':').map(parseFloat); 
      // function (str) {return parseFloat(str)} 하는 것과 동일
      // 분을 초로 맞추어 주기
      return (mins * 60) + secs;
    })// 각 영상길이를 초로 바꾼 배열을 reduce로 하나로 더함 
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    // 시간 구하기 floor 소숫점 버리기
    const hours = Math.floor(secondsLeft / 3600);
    // 나머지 초들
    secondsLeft = secondsLeft % 3600;

    // 똑같이 분 구하기
    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft);
