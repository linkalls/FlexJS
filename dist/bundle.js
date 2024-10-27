(()=>{var o=document.querySelectorAll("[data-confirm]");o.forEach(e=>{let r=e.getAttribute("data-confirm"),t=e.dataset.trigger||"click",n=a=>{window.confirm(r)||a.preventDefault()};t==="hover"?e.addEventListener("mouseover",n):e.addEventListener(t,n)});})();
//# sourceMappingURL=bundle.js.map
