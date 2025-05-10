import {c as j, d as b, S as h, m as v, j as s, r as o, P as w, v as N, k, l as c, L as _} from "./index-91HBn0HY.js";
import {A as Y, C as I, H as P} from "./Card-vMJQD3tz.js";
import "./index-A8GsNH3c.js";
import "./index-c6YUY5go.js";
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = j("Eye", [["path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    key: "rwhkz3"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
function L() {
    return s.jsxs("svg", {
        viewBox: "0 0 100 100",
        className: "w-16 h-16 group-hover:animate-spin rounded-full pointer-events-none",
        style: {
            animationDuration: "5s",
            filter: "drop-shadow(2px 4px 6px black)"
        },
        fill: "white",
        xmlns: "http://www.w3.org/2000/svg",
        children: [s.jsx("path", {
            id: "circlePath",
            fill: "none",
            strokeWidth: "0",
            stroke: "none",
            d: `\r
        M 15, 50\r
        a 35,35 0 1,1 70,0\r
        35,35 0 1,1 -70,0\r
      `,
            style: {
                "--show": 1
            }
        }), s.jsx("text", {
            id: "text",
            fontFamily: "monospace",
            fontSize: "16",
            fontWeight: "bold",
            fill: "var(--text-1)",
            children: s.jsx("textPath", {
                id: "textPath",
                href: "#circlePath",
                textLength: "210",
                children: "PLAY NOW - PLAY NOW -"
            })
        })]
    })
}
const E = ({data: e, title: t, subtitle: r, poster_path: g, href: m}) => {
    var x, u;
    const p = b();
    let l = "/not-found"
      , i = "/not-found"
      , n = "";
    ((x = e == null ? void 0 : e.Library) == null ? void 0 : x.type) === h.contentTypes.MOVIE ? (i = `/movies/${e.id}`,
    l = `/play?type=movies&id=${e == null ? void 0 : e.id}&start=0`,
    n = v(e.id, e == null ? void 0 : e.poster_path, "movie", "poster", 220)) : ((u = e == null ? void 0 : e.Library) == null ? void 0 : u.type) === h.contentTypes.TV_SHOW ? (i = `/tv-shows/${e.id}`,
    l = `/tv-shows/${e.id}/1`,
    n = v(e == null ? void 0 : e.id, e == null ? void 0 : e.poster_path, "tv", "poster", 220)) : (e == null ? void 0 : e.type) === "live" && (i = `/play?type=live&id=${e == null ? void 0 : e.id}`,
    l = `/play?type=live&id=${e == null ? void 0 : e.id}`);
    function y() {
        p(m || i)
    }
    return e ? s.jsxs("figure", {
        className: "rounded-md  group scroll-view-in-fade",
        children: [s.jsxs("div", {
            className: "relative rounded-md overflow-hidden",
            children: [s.jsx(Y, {
                ratio: 2 / 3,
                className: "overflow-hidden rounded-md",
                children: s.jsx(I, {
                    src: g || n,
                    poster: e == null ? void 0 : e.poster_path,
                    alt: (e == null ? void 0 : e.title) || (e == null ? void 0 : e.original_title) || t
                })
            }), s.jsx("div", {
                className: "absolute top-0 left-0 h-full w-full",
                children: s.jsx(o.Button, {
                    onClick: y,
                    variant: "text",
                    className: "h-full w-full rounded-md  focus-visible:bg-dark/60"
                })
            }), s.jsxs("div", {
                className: "hidden md:inline-flex  opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center",
                children: [s.jsx("div", {
                    className: "animate-ping absolute h-[110%] w-[110%] bg-green-50/80 rounded-full backdrop-blur-md backdrop-saturate-200"
                }), s.jsx("div", {
                    className: "animate-ping delay-75 absolute h-full  w-full bg-green-50 rounded-full backdrop-blur-md backdrop-saturate-200"
                }), s.jsx("div", {
                    className: "absolute z-10",
                    children: s.jsx(L, {})
                }), s.jsx(o.IconButton, {
                    className: "z-50 rounded-full outline-2 bg-primary-100 focus-visible:focus:ring-2  focus-visible:focus:ring-offset-2 focus-visible:focus:ring-primary-500 duration-200 shadow-lg shadow-dark",
                    onClick: () => p(l),
                    children: s.jsx(w, {
                        className: "drop-shadow-md text-base h-5 w-5 text-primary-600"
                    })
                })]
            }), s.jsx("div", {
                className: "absolute bottom-0 w-full left-0 p-2 hidden md:block",
                children: s.jsx("div", {
                    className: "flex gap-2 justify-end",
                    children: s.jsx(o.IconButton, {
                        variant: "text",
                        color: "white",
                        size: "sm",
                        className: "rounded-full",
                        children: s.jsx(P, {
                            className: "size-4"
                        })
                    })
                })
            })]
        }), s.jsxs("div", {
            className: "text-center font-medium mt-1",
            children: [s.jsxs("div", {
                className: "flex gap-2 justify-between items-center",
                children: [s.jsx("span", {
                    className: "inline-flex text-xs font-medium text-gray-200",
                    children: [...Array(3)].map( (S, f) => s.jsx(N, {
                        className: k("h-3 w-3", f + 1 <= Number(((e == null ? void 0 : e.online_rating) || 0) / 10 * 3 || 0) ? "text-amber-500" : "text-white/50")
                    }, f))
                }), (r || (e == null ? void 0 : e.year) || c(e == null ? void 0 : e.release_date).format("YYYY")) && s.jsx("span", {
                    className: "inline-flex text-xs font-medium text-gray-200",
                    children: r || (e == null ? void 0 : e.year) || c(e == null ? void 0 : e.release_date).format("YYYY")
                }), (r || (e == null ? void 0 : e.year) || c(e == null ? void 0 : e.release_date).format("YYYY")) && s.jsxs("span", {
                    className: "inline-flex items-center gap-1 text-xs text-teal-300 font-semibold",
                    children: [s.jsx(z, {
                        size: 14
                    }), " ", String((e == null ? void 0 : e.views) || 0).padStart(2, 0)]
                })]
            }), s.jsx(_, {
                to: m || i,
                className: "block",
                children: s.jsx("p", {
                    className: "truncate text-gray-200 font-medium ",
                    children: t || (e == null ? void 0 : e.title) || (e == null ? void 0 : e.original_title)
                })
            })]
        })]
    }) : null
}
;
export {E as default};
