const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.body;t.addEventListener("click",(function(){r=setInterval(d,1e3),t.toggleAttribute("disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){r=clearInterval(r),t.removeAttribute("disabled"),e.toggleAttribute("disabled")}));let r=null;function d(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.1b0a6109.js.map