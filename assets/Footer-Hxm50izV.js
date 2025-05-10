import {u as r, j as e, S as t} from "./index-91HBn0HY.js";
function i() {
    const n = ["/signin", "/signup", "/play"]
      , {pathname: s} = r();
    return n.includes(s) ? null : e.jsx("footer", {
        className: "bg-white/5",
        children: e.jsx("div", {
            className: "container py-5 text-center",
            children: e.jsxs("p", {
                className: "text-base font-medium tracking-wider",
                children: ["@2024 ", e.jsx("span", {
                    className: "underline decoration-primary-400 underline-offset-2",
                    children: t.name
                }), ". All rights reserved."]
            })
        })
    })
}
export {i as default};
