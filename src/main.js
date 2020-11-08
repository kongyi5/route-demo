
function route(){
  let number = window.location.hash.substr(1);
  let app = document.querySelector("#app");

  number = number || 1; // 保底值，默认路由

  let div = document.querySelector(`#div${number}`);
  if (!div) {
    div = document.querySelector("#div404");
  }
  div.style.display = "block";

  if(app.children.length >0){
    app.children[0].style.display = "none";
    document.body.appendChild(app.children[0]);
  }
  app.appendChild(div);
}

route()

window.addEventListener("hashchange", () => {
  console.log("hash 变了");

  route()
});
