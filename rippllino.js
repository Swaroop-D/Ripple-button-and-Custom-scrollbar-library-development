function Rippllino({ animationDuration: t, rplThemeColor: e, rippllinoAnimateOn: n }) {
    window.addEventListener("load", () => {
        const t = document.createElement("style");
        (t.type = "text/css"),
            (t.innerHTML =
                ".rippllino-btn{overflow:hidden}.rippllino-btn rippllino-bubblle{transition:opacity 750ms ease;background:#ffffff75;position:absolute;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:-1;}.rippllino-btn rippllino-bubblle.rippllino-dark{background:#00000050;}@keyframes rippllino{0%{height:10px;width:10px;opacity:0}10%{opacity:.55}100%{height:125px;width:125px;opacity:0;}}"),
            document.head.appendChild(t);
    }),
        console.log(t, e, n),
        document.querySelectorAll("[data-rippllino = true]").forEach((i) => {
            i.classList.add("rippllino-btn"),
                null == n && (n = "click"),
                i.addEventListener(n, (n) => {
                    let i = n.clientX - n.target.offsetLeft + window.scrollX,
                        l = n.clientY - n.target.offsetTop + window.scrollY,
                        o = document.createElement("rippllino-bubblle");
                    o.setAttribute("style", `top: ${l}px; left: ${i}px; animation: rippllino ${t}s forwards;background:${e};`),
                        n.target.appendChild(o),
                        o.addEventListener("animationend", () => {
                            o.setAttribute("style", "opacity: 0;"),
                                o.addEventListener("transitioned", () => {
                                    o.remove();
                                });
                        });
                });
        });
}
