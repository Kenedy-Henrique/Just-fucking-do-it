!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=function(e,t){e[t]={},localStorage.setItem("tabsObj",JSON.stringify(e))};var l=function(e,t,n,a){let l={};return l.title=e,l.description=t,l.dueDate=n,l.priority=a,l};var d=function(e,t,n,a){e[t][n]=a,localStorage.setItem("tabsObj",JSON.stringify(e))};var i=function(e,t){e?t.animate([{right:"0px"},{right:"-270px"}],{duration:800,fill:"forwards"}):t.animate([{right:"-270px"},{right:"0px"}],{duration:800,fill:"forwards"})};var r=function(e,t){e?t.animate([{right:"310px"},{right:"3%"}],{duration:800,fill:"forwards"}):t.animate([{right:"3%"},{right:"310px"}],{duration:800,fill:"forwards"})};var o=function(){let e=document.createElement("form");e.classList.add("taskForm");let t=document.createElement("input");t.classList.add("title"),t.type="text",t.name="title",t.placeholder="Title",e.appendChild(t);let n=document.createElement("textarea");n.classList.add("description"),n.name="description",n.placeholder="Description",e.appendChild(n);let a=document.createElement("input");a.classList.add("dueDate"),a.type="date",a.name="dueDate",e.appendChild(a);let l=document.createElement("select");l.classList.add("priority"),l.name="priority";let d=document.createElement("option");d.innerHTML="Choose a priority level",l.appendChild(d);let i=document.createElement("option");i.value="rgb(255, 37, 92)",i.innerHTML="High",l.appendChild(i);let r=document.createElement("option");r.value="rgb(255, 210, 0)",r.innerHTML="Medium",l.appendChild(r);let o=document.createElement("option");o.value="rgb(0, 175, 65)",o.innerHTML="Low",l.appendChild(o),e.appendChild(l);let s=document.createElement("div");s.classList.add("btnsOptions");let c=document.createElement("input");c.type="reset",c.classList.add("resetBtn"),s.appendChild(c);let u=document.createElement("input");return u.type="submit",u.classList.add("addTaskBtn"),s.appendChild(u),e.appendChild(s),document.body.appendChild(e),e};var s=function(e){let t=document.createElement("div");t.style.width="40%",t.style.height="50%",t.style.backgroundColor="rgb(211, 211, 211)",t.style.position="absolute",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.top="50px",t.style.boxShadow="12px 12px 2px 1px rgba(45, 46, 46, .2)",t.style.border="1px solid rgb(37, 39, 46)",t.style.borderRadius="10px";let n=document.createElement("p");n.style.color="rgb(45, 46, 56)",n.style.textAlign="center",n.innerHTML=e,n.style.fontFamily="Playfair Display",n.style.fontSize="20px",n.style.width="100%",n.style.height="80%",n.style.overflowY="scroll",t.appendChild(n);let a=document.createElement("button");a.style.border="none",a.innerHTML="Close",a.style.height="auto",a.style.width="auto",a.style.backgroundColor="rgb(37, 39, 46)",a.style.color="rgb(211, 211, 211)",a.style.borderRadius="20px",a.style.position="absolute",a.style.left="50%",a.style.transform="translateX(-50%)",a.style.bottom="20px",a.style.fontFamily="Playfair Display",a.style.fontSize="25px",a.addEventListener("click",()=>{document.body.removeChild(t)}),t.appendChild(a),document.body.appendChild(t)};var c=function(e,t,n){for(let a in e[t]){let l=document.createElement("div");l.classList.add("taskDiv");let d=document.createElement("p");d.classList.add("taskDivTitle"),d.innerText=e[t][a].title,l.appendChild(d);let i=document.createElement("p");i.classList.add("taskDivDueDate"),i.innerHTML=e[t][a].dueDate,l.appendChild(i);let r=document.createElement("button");r.classList.add("descriptionButton"),r.innerHTML="Show details",r.addEventListener("click",()=>{s(e[t][a].description)}),l.appendChild(r);let o=document.createElement("div");o.classList.add("divPriority"),o.style.backgroundColor=e[t][a].priority,l.appendChild(o);let c=document.createElement("button");c.classList.add("deleteBtn"),l.appendChild(c),c.addEventListener("click",()=>{n.removeChild(l),delete e[t][a],localStorage.setItem("tabsObj",JSON.stringify(e))}),n.appendChild(l)}};var u=function(){let e=document.createElement("form");e.classList.add("tabForm");let t=document.createElement("input");t.classList.add("tabName"),t.name="tabName",t.type="text",t.placeholder="Insert tab name",e.appendChild(t);let n=document.createElement("input");return n.type="submit",n.classList.add("addFormBtn"),e.appendChild(n),document.body.appendChild(e),e};var p=function(e,t,n,a,l,d){let i=document.createElement("div");i.classList.add("tabDiv");let r=document.createElement("p");r.innerHTML=t,r.classList.add("tabTitle"),i.appendChild(r);let o=document.createElement("div");o.classList.add("tabDivBtnOptions");let s=document.createElement("button");s.classList.add("changeTabBtn"),s.addEventListener("click",()=>{a.tabName=t,d.innerHTML=t,l.innerHTML="",c(e,a.tabName,l)}),o.appendChild(s);let u=document.createElement("button");u.classList.add("deleteTabBtn"),u.addEventListener("click",()=>{delete e[t],n.removeChild(i),localStorage.setItem("tabsObj",JSON.stringify(e)),d.innerHTML="Choose a tab",a.tabName=""}),o.appendChild(u),i.appendChild(o),n.appendChild(i)};var m=function(e,t,n,a,l){for(let d in e){let i=document.createElement("div");i.classList.add("tabDiv");let r=document.createElement("p");r.innerHTML=d,r.classList.add("tabTitle"),i.appendChild(r);let o=document.createElement("div");o.classList.add("tabDivBtnOptions");let s=document.createElement("button");s.classList.add("changeTabBtn"),s.addEventListener("click",()=>{n.tabName=d,l.innerHTML=d,a.innerHTML="",c(e,d,a)}),o.appendChild(s);let u=document.createElement("button");u.classList.add("deleteTabBtn"),u.addEventListener("click",()=>{delete e[d],t.removeChild(i),localStorage.setItem("tabsObj",JSON.stringify(e)),l.innerHTML="Choose a tab",n.tabName=""}),o.appendChild(u),i.appendChild(o),t.appendChild(i)}};let b,y,v,h,f,L={},C={tabName:""},g=document.querySelector(".tasksContainer"),E=document.querySelector(".showTaskFormBtn"),T=document.querySelector(".showTabsBtn"),S=document.querySelector(".tabsContainer"),x=document.querySelector(".makeTabBtn"),k=!1,O=!1,M=!1,D=document.querySelector(".currentTabPElement");localStorage.getItem("tabsObj")&&(L=JSON.parse(localStorage.getItem("tabsObj")),m(L,S,C,g,D)),T.addEventListener("click",()=>{i(k,S),r(k,T),k=!k}),E.addEventListener("click",()=>{O?document.body.removeChild(b):(b=o(),y=document.querySelector(".addTaskBtn"),y.addEventListener("click",e=>{e.preventDefault(),""===b.title.value||""===b.description.value||""===b.dueDate.value||""===b.priority.value?alert("Put all the informations!"):""===C.tabName||void 0===C.tabName?alert("Create and go to a tab!"):(v=l(b.title.value,b.description.value,b.dueDate.value,b.priority.value),d(L,C.tabName,b.title.value,v),g.innerHTML="",c(L,C.tabName,g))})),O=!O}),x.addEventListener("click",()=>{M?document.body.removeChild(h):(h=u(),f=document.querySelector(".addFormBtn"),f.addEventListener("click",e=>{L[h.tabName.value]?(e.preventDefault(),alert("Tab alredy exists!")):(e.preventDefault(),a(L,h.tabName.value),p(L,h.tabName.value,S,C,g,D))})),M=!M})}]);