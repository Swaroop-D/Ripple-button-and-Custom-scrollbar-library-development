function Rippllino({ animationDuration: t, rplThemeColor: e, rippllinoAnimateOn: n }) {
  console.log(t, e, n),
    document.querySelectorAll("[data-rippllino = true]").forEach((i) => {
      i.classList.add("rippllino-btn"),
        null == n && (n = "click"),
        i.addEventListener(n, (n) => {
          let i = n.clientX - n.target.offsetLeft + window.scrollX,
            l = n.clientY - n.target.offsetTop + window.scrollY,
            o = document.createElement("rippllino-bubblle");
          o.setAttribute("style", `transition: opacity 750ms ease; top: ${l}px; left: ${i}px; animation: rippllino ${t}s forwards;background:${e};`),
            n.target.appendChild(o),
            o.addEventListener("animationend", () => {
              o.style.opacity = '0',
                o.addEventListener("transitioned", () => {
                  o.remove();
                });
            });
        });
    });
}
