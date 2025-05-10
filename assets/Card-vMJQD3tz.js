import {c as v, d as y, S as g, m as x, j as s, r as h, P as j, L as N, l as w, a as b, B as _, T as k, i as I, k as T} from "./index-91HBn0HY.js";
import {a as $} from "./index-A8GsNH3c.js";
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S = v("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]])
  , z = $;
function L() {
    return null
}
const d = ({alt: e, src: o, poster: c, className: p, height: u=220, width: t=360}) => {
    const [i,l] = b.useState(o)
      , [r,f] = b.useState(!0);
    return s.jsx("img", {
        onError: () => {
            const n = _(c, k.poster.sizes.w342);
            l(m => m === n ? I.poster : n)
        }
        ,
        onLoad: () => f(!1),
        loading: "lazy",
        placeholder: "blur",
        src: i || o,
        alt: e,
        width: t,
        height: u,
        className: T("w-full h-full object-center  rounded-sm  saturate-150 bg-white/10 ", p, "object-fill", r ? "animate-pulse" : null)
    })
}
  , E = ({data: e, title: o, subtitle: c, poster_path: p, href: u}) => {
    var n, m;
    const t = y();
    let i = "/not-found"
      , l = "/not-found"
      , r = "";
    ((n = e == null ? void 0 : e.Library) == null ? void 0 : n.type) === g.contentTypes.MOVIE ? (l = `/movies/${e.id}`,
    i = `/play?type=movies&id=${e == null ? void 0 : e.id}&start=0`,
    r = x(e == null ? void 0 : e.id, e == null ? void 0 : e.poster_path, "movie", "poster", 220)) : ((m = e == null ? void 0 : e.Library) == null ? void 0 : m.type) === g.contentTypes.TV_SHOW ? (l = `/tv-shows/${e.id}`,
    i = `/tv-shows/${e.id}/1`,
    r = x(e == null ? void 0 : e.id, e == null ? void 0 : e.poster_path, "tv", "poster", 220)) : (e == null ? void 0 : e.type) === "live" && (l = `/play?type=live&id=${e == null ? void 0 : e.id}`,
    i = `/play?type=live&id=${e == null ? void 0 : e.id}`);
    function f() {
        t(u || l)
    }
    return e ? s.jsxs("figure", {
        className: "rounded-md  group scroll-view-in-fade",
        children: [s.jsxs("div", {
            className: "relative rounded-md overflow-hidden",
            children: [s.jsx(z, {
                ratio: 2 / 3,
                className: "overflow-hidden rounded-md",
                children: s.jsx(d, {
                    src: p || r,
                    poster: e == null ? void 0 : e.poster_path,
                    alt: (e == null ? void 0 : e.title) || (e == null ? void 0 : e.original_title) || o
                })
            }), s.jsx("div", {
                className: "absolute top-0 left-0 h-full w-full",
                children: s.jsx(h.Button, {
                    onClick: f,
                    variant: "text",
                    className: "h-full w-full rounded-md  focus-visible:bg-dark/60"
                })
            }), s.jsxs("div", {
                className: "hidden md:inline-flex  opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center",
                children: [s.jsx("div", {
                    className: "animate-ping absolute h-[80%] w-[80%] bg-green-50/80 rounded-full backdrop-blur-md backdrop-saturate-200"
                }), s.jsx("div", {
                    className: "animate-ping delay-75 absolute h-full  w-full bg-white/50 rounded-full backdrop-blur-md backdrop-saturate-200"
                }), s.jsx("div", {
                    className: "absolute z-10",
                    children: s.jsx(L, {})
                }), s.jsx(h.IconButton, {
                    className: "z-50 rounded-full outline-2 focus-visible:focus:ring-2  focus-visible:focus:ring-offset-2 focus-visible:focus:ring-primary-500 duration-200 shadow-lg shadow-dark bg-red-50",
                    onClick: () => t(i),
                    children: s.jsx(j, {
                        className: "drop-shadow-md text-base h-5 w-5 text-primary-600"
                    })
                })]
            }), s.jsx("div", {
                className: "absolute bottom-0 w-full left-0 p-2 hidden md:block",
                children: s.jsx("div", {
                    className: "flex gap-2 justify-end",
                    children: s.jsx(h.IconButton, {
                        variant: "text",
                        color: "white",
                        size: "sm",
                        className: "rounded-full",
                        children: s.jsx(S, {
                            className: "size-4"
                        })
                    })
                })
            })]
        }), s.jsxs("div", {
            className: "text-center font-medium mt-1",
            children: [s.jsx(N, {
                to: u || l,
                className: "block",
                children: s.jsx("p", {
                    className: "truncate text-gray-200 font-medium ",
                    children: o || (e == null ? void 0 : e.title) || (e == null ? void 0 : e.original_title)
                })
            }), (c || (e == null ? void 0 : e.year) || (e == null ? void 0 : e.release_date)) && s.jsx("p", {
                className: "text-xs text-gray-400",
                children: c || (e == null ? void 0 : e.year) || w(e == null ? void 0 : e.release_date).format("YYYY")
            })]
        })]
    }) : null
}
;
export {z as A, d as C, S as H, E as a};
