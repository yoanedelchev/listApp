const e=document.querySelector("#add-new"),t=document.querySelector("#clear-list"),c=document.querySelector("#remove-complete"),n=document.querySelector(".nav--box"),o=document.querySelector(".add-item--field"),l=document.querySelector(".item--container");document.querySelectorAll(".item");let i=[];console.log(localStorage.getItem("list"));class s{complete=!1;constructor(e){this.name=e}}// function storeToLocalStorage() {
//   localStorage.setItem("list", JSON.stringify(shoppingList));
// }
function d(e){e?(n.classList.remove("hidden"),o.classList.add("hidden")):(n.classList.add("hidden"),o.classList.remove("hidden"))}function a(e){l.innerHTML="",0===i.length?l.insertAdjacentHTML("afterbegin",'<h1 class="empty-tag">No items yet</h1>'):e.forEach(e=>{let t=`<div class="item" data-complete="false"><h1 class='item--text'>${e.name}</h1></div>`;l.insertAdjacentHTML("beforeend",t)})}a(i),e.addEventListener("click",function(){d(!1),o.focus()}),o.addEventListener("keydown",function(e){"Enter"===e.key&&(i.push(new s(o.value,!1)),// storeToLocalStorage();
o.value="",document.querySelectorAll(".item"),a(i),d(!0))}),t.addEventListener("click",function(){a(i=[])}),// itemContainer.addEventListener("click", function (e) {
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
l.addEventListener("click",function(e){let t=e.target;t.classList.contains("item--text")&&(t=t.parentNode),i.forEach(e=>{e.name===t.textContent&&(!1===e.complete?(e.complete=!0,t.classList.add("item-complete")):(e.complete=!1,t.classList.remove("item-complete")))})}),c.addEventListener("click",function(){a(i=function(e){let t=[];return e.forEach(e=>{!1===e.complete&&t.push(e)}),t}(i))});//# sourceMappingURL=index.395ace2b.js.map

//# sourceMappingURL=index.395ace2b.js.map
