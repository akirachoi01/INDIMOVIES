import {j as e, a as c, _ as l, e as h, n as f, H as _, S as o, $ as g, A as x, f as u} from "./index-91HBn0HY.js";
const j = c.lazy( () => l( () => import("./CardTwo-_QjdPH5n.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])))
  , y = c.lazy( () => l( () => import("./Loading-0ZtB66Rd.js"), __vite__mapDeps([6, 1, 2])))
  , E = c.lazy( () => l( () => import("./CardSlider-yaDcZMRM.js"), __vite__mapDeps([7, 1, 2, 8])));
async function w(a) {
    try {
        const {data: t} = await x.get(a, {
            params: {
                fields: "id,name,type"
            }
        });
        return t == null ? void 0 : t.data
    } catch (t) {
        throw console.log(t),
        t.code === "ERR_NETWORK" ? new Error("🛜 Check Your Internet connection.").message : u(t)
    }
}
function v() {
    const {data: a, error: t, isLoading: i} = h("/library", w, {
        revalidateOnFocus: !1
    });
    return console.log({
        libraries: a,
        error: t,
        isLoading: i
    }),
    i ? e.jsx(y, {}) : t ? e.jsx(f.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "container min-h-screen flex justify-center items-center py-20 text-gray-300",
        children: e.jsx("figure", {
            className: "w-full md:w-80 bg-white/10 px-3 py-4 rounded-md pt-10",
            children: e.jsxs("div", {
                className: "flex flex-col justify-center items-center gap-3 text-center",
                children: [e.jsx("img", {
                    src: "/images/error.png",
                    className: "w-1/2 animate-bounce"
                }), e.jsxs("h4", {
                    className: "text-amber-500 animate-pulse",
                    children: ["Unexpected Error !", " "]
                }), e.jsx("p", {
                    children: JSON.stringify(t, null, 4)
                })]
            })
        })
    }) : e.jsxs("main", {
        className: "pt-0",
        children: [e.jsx(_, {
            children: e.jsxs("title", {
                children: [" Home | ", o.name]
            })
        }), g.createElement(o.banners.find(r => r.active).component || ""), Array.isArray(a) && a.length ? a == null ? void 0 : a.map( (r, m) => {
            let d = (r == null ? void 0 : r.type) === o.contentTypes.MOVIE ? "/movies" : (r == null ? void 0 : r.type) === o.contentTypes.TV_SHOW ? "/tv-shows" : null
              , p = `${r == null ? void 0 : r.name}`;
            return e.jsx(E, {
                title: p,
                moreURL: `${d}?category=${r.id}`,
                dataKey: p,
                dataLoader: async function() {
                    var n;
                    try {
                        const {data: s} = await x.get(`${d}`, {
                            params: {
                                library: r == null ? void 0 : r.id,
                                fields: "id,title,original_title,year,poster_path,release_date,rating,online_rating",
                                sort: "createdAt",
                                sort_order: "DESC"
                            }
                        });
                        return ((n = s == null ? void 0 : s.data) == null ? void 0 : n.length) < 10 ? null : s == null ? void 0 : s.data
                    } catch (s) {
                        throw u(s)
                    }
                },
                renderItem: n => e.jsx(j, {
                    data: n
                })
            }, m)
        }
        ) : e.jsx("div", {
            className: "flex justify-center items-center py-16",
            children: e.jsxs("div", {
                children: [e.jsx("img", {
                    src: "/images/empty-folder-icon.webp",
                    className: "max-w-96 w-full"
                }), e.jsx("p", {
                    className: "text-gray-400 text-center",
                    children: "No Content has been uploaded yet!"
                })]
            })
        })]
    })
}
function I() {
    return e.jsx(c.Suspense, {
        fallback: e.jsx(y, {}),
        children: e.jsx(v, {})
    })
}
export {I as default};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/CardTwo-_QjdPH5n.js", "assets/index-91HBn0HY.js", "assets/index-J54k-wHG.css", "assets/Card-vMJQD3tz.js", "assets/index-A8GsNH3c.js", "assets/index-c6YUY5go.js", "assets/Loading-0ZtB66Rd.js", "assets/CardSlider-yaDcZMRM.js", "assets/link-l0fRr8Nd.js"]
    }
    return indexes.map( (i) => __vite__mapDeps.viteFileDeps[i])
}
