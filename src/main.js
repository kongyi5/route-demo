const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const routeTable = {
  '1': div1,
  '2': div2,
  '3': div3,
  '4': div4
}

function route(){
  let number = window.location.hash.substr(1);
  let app = document.querySelector("#app");

  number = number || 1; // 保底值，默认路由

  let div = routeTable[number.toString()]
  if (!div) {
    div = document.querySelector("#div404");
  }
  div.style.display = "block";

  app.innerHTML = ''
  app.appendChild(div);
}

route()

window.addEventListener("hashchange", () => {
  console.log("hash 变了");

  route()
});
