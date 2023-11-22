const e=document.querySelector("#add-new"),t=document.querySelector("#clear-list"),c=document.querySelector("#remove-complete"),n=document.querySelector(".nav--box"),o=document.querySelector(".add-item--field"),i=document.querySelector(".item--container");document.querySelectorAll(".item");class l{complete=!1;constructor(e){this.name=e}}let s=[];// console.log(localStorage.getItem("list"));
// function storeToLocalStorage() {
//   localStorage.setItem("list", JSON.stringify(shoppingList));
// }
function d(e){e?(n.classList.remove("hidden"),o.classList.add("hidden")):(n.classList.add("hidden"),o.classList.remove("hidden"))}function a(e){i.innerHTML="",0===s.length?i.insertAdjacentHTML("afterbegin",'<h1 class="empty-tag">No items yet</h1>'):e.forEach(e=>{let t=`<div class="item" data-complete="false"><div class='checkbox'></div><h1 class='item--text'>${e.name}</h1></div>`;i.insertAdjacentHTML("beforeend",t)})}a(s),e.addEventListener("click",function(){d(!1),o.focus()}),// addNewItem("coke coca cola");
o.addEventListener("keydown",function(e){"Enter"===e.key&&(// shoppingList.push(new Item(inputField.value, false));
function(e){let t=e.split(" "),c="";t.forEach(e=>{c+=e.slice(0,1).toUpperCase()+e.slice(1,e.length).toLowerCase()+" "}),s.push(new l(c))}(o.value),// storeToLocalStorage();
o.value="",document.querySelectorAll(".item"),a(s),d(!0))}),t.addEventListener("click",function(){a(s=[])}),// itemContainer.addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target.matches("div")) {
//     e.target = e.target.parentElement;
//   }
//   e.target.classList.toggle("item-complete");
//   shoppingList.forEach((el) => {
//     if (el.name === e.target.textContent) {
//       el.complete = true;
//       console.log(el);
//     }
//   });
// });
i.addEventListener("click",function(e){let t=e.target;t.classList.contains("item--text")&&(t=t.parentNode),s.forEach(e=>{e.name===t.textContent&&(!1===e.complete?(e.complete=!0,t.classList.add("item-complete"),t.children[0].classList.add("checkbox-complete")):(e.complete=!1,t.classList.remove("item-complete"),t.children[0].classList.remove("checkbox-complete")))})}),c.addEventListener("click",function(){a(s=function(e){let t=[];return e.forEach(e=>{!1===e.complete&&t.push(e)}),t}(s))});//# sourceMappingURL=index.c2da651f.js.map

//# sourceMappingURL=index.c2da651f.js.map
