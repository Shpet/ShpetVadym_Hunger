if(!("scrollBehavior"in document.documentElement.style)){let e=document.querySelectorAll('a[href^="#"]');e.forEach((e,t,l)=>{let o=e.getAttribute("href");"#"!==o&&e.addEventListener("click",e=>{e.preventDefault(),document.getElementById(o.slice(1)).scrollIntoView({behavior:"smooth"})})})}