!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.body;t.addEventListener("click",(function(){a=setInterval(o,1e3),t.toggleAttribute("disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){a=clearInterval(a),t.removeAttribute("disabled"),e.toggleAttribute("disabled")}));var a=null;function o(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.c6489160.js.map
