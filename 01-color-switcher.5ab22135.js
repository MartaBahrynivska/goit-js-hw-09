const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;t.addEventListener("click",(function(){o=setInterval(r,1e3),t.toggleAttribute("disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){o=clearInterval(o),t.removeAttribute("disabled"),e.toggleAttribute("disabled")}));let o=null;function r(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.toggleAttribute("disabled");
//# sourceMappingURL=01-color-switcher.5ab22135.js.map