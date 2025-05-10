import {j as s} from "./index-91HBn0HY.js";
const e = () => s.jsxs("div", {
    className: "min-h-[100vh] container py-24",
    children: [s.jsx("div", {
        className: "mb-2",
        children: s.jsx("div", {
            className: "animate-pulse bg-white/10 rounded-md h-52 md:h-64 lg:h-80   hidden md:block"
        })
    }), s.jsx("div", {
        className: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2",
        children: [...Array(24)].map( (d, a) => s.jsx("div", {
            className: "aspect-[2/3] w-full animate-pulse rounded-md bg-white/10",
            style: {
                animationDelay: `${a * .3}s`
            }
        }, a))
    })]
});
export {e as default};
