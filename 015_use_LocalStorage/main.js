const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
  e.preventDefault(); // 제출 하는 것을 막음
  // form 태그를 의미 this
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false
  }
  items.push(item)
  populateList(items,itemsList)

  // key value로 셋  개발도구 application local storage 문자열로만 저장
  localStorage.setItem('items', JSON.stringify(items))
  // form 요소는 reset 사용 가능 리셋 버트과 동일한 효과
  this.reset()
}

//디 디폴트를 설정해 주면 인수가 안와도 오류 안남
function populateList(plates = [], platesList) { // 사실 checked의 내용은 설정 안해도 css로 가능
  platesList.innerHTML = plates.map((plate, i) => { //checked 의 값으로 'ㅌ' 와같이 무언가오면 true
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
      <label for="item${i}">${plate.text}</label>
    </li>
    `
  }).join('')
}

// done을 true로 해서 스로레지된 값에 checked 여부를 저장
function toggleDone(e) {
  // 여러 요소들이 불려올때 input만 선택해서 가져오는 방법
  if (!e.target.matches('input')) return
  const el = e.target
  const index = el.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}
// 엔터나 클릭 에도 반응
addItems.addEventListener('submit',addItem)
itemsList.addEventListener('click',toggleDone)


populateList(items, itemsList)
