const app = document.querySelector('#app')

const div1 = document.createElement('div')
div1.innerHTML = '1'
// 嵌套路由
// const view1 = document.createElement('div')
// view1.style.height = '50px'
// view1.style.background = 'red'
// div1.appendChild(view1)
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const routeTable = {
  '/1': div1,
  '/2': div2,
  '/3': div3,
  '/4': div4
}

function route(container){
  let number = window.localStorage.getItem('xxx')
  if(!number){
  number = '/1'
  }
  let div = routeTable[number.toString()]
  if (!div) {
    div = document.querySelector("#div404");
  }
  div.style.display = "block";

  container.innerHTML = ''
  container.appendChild(div);
}

let allA = document.querySelectorAll('a.link')
for(let a of allA){
  a.addEventListener('click', (e)=>{
    e.preventDefault()
    let href = a.getAttribute('href')
    window.history.pushState(null, `page ${href}`, href)
    window.localStorage.setItem('xxx', href)
    // 通知
    onStateChange(href)
  })
}

route(app)

function onStateChange(){
  console.log("state 变了");

  route(app)
}

