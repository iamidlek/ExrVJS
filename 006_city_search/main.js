// json 파일 가져오기
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 도시 이름을 담아줄 배열
const cities = [];

// fetch 반환이 프로미스여서 .then 사용
fetch(endpoint)
  // JSON.parse(blob)를 생각하지만 bolb proto에 json()이 있다
  .then(blob => blob.json())
  // 배열로 되어있는 data를 spread해서 넣어준다
  .then(data => cities.push(...data));


// 파라미터로 검색한 값, 도시 목록을 받는다
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    // 찾는 단어가 고정이 아니므로 정규표현식을 선언형식으로 만든다
    const regex = new RegExp(wordToMatch, 'gi');
    // cities의 배열 요소들을 place로 하나씩 가져오는데
    // place를 찍어보면 객체안에 city 정보와 state 정보가 있다
    return place.city.match(regex) || place.state.match(regex)
    // true false가 반환되고 filter이므로 true 값들이 모여 배열로 반환된다
  });
}

// 3자리마다 콤마를 찍어주는 기능
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  // this.value는 입력창에 있는 글자를 의미
  const matchArray = findMatches(this.value, cities);
    // matchArray는 [object,] 형태로 city나 state가 일치하는 객체들이 배열로 옴
  
  const html = matchArray.map(place => {
    // 하이라이트를 표시하기위해 현재 입력된 값과 일치하는 부분을 찾고 class="hl"으로 감싼다
    const regex = new RegExp(this.value, 'gi');
    // replace에 g로 찾지 않으면 하나만 찾고 안찾음
    // 몇개가 있던 해당하면 다 바꾸고 전체 문장을 반환함
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    // place를 이하의 내용으로 html작성
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join(''); // map은 배열을 반환하기 때문에 ['a', 'b'].join('') => ab
  // 구체적으론 [<li>...</li> ,<li>...</li>]를 <li>...</li><li>...</li> 형태로  
  
  suggestions.innerHTML = html;
  // ul의 안에 넣어준다
}

// 검색바
const searchInput = document.querySelector('.search');
// 결과 나올곳 ul
const suggestions = document.querySelector('.suggestions');

// 인풋에 입력을 마쳤을 경우를 감지
// keyup 감지로 커버 가능
// searchInput.addEventListener('change', displayMatches);
// 키보드/마우스를 떼었을 경우를 감지
searchInput.addEventListener('keyup', displayMatches);
