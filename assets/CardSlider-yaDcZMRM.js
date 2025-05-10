import {j as e, e as x, L as u, aa as w, ab as p, ac as h} from "./index-91HBn0HY.js";
import {L as g} from "./link-l0fRr8Nd.js";
const j = () => e.jsx("section", {
    className: "py-4",
    children: e.jsxs("div", {
        className: "container",
        children: [e.jsx("div", {
            className: " animate-pulse rounded-md mb-2 md:mb-3 bg-white/10 w-full h-8 md:h-10"
        }), e.jsx("div", {
            className: "flex gap-2 md:gap-3 flex-row overflow-hidden",
            children: [...Array(20)].map( (r, i) => e.jsx("div", {
                className: "animate-pulse rounded-md h-40 md:h-56 min-w-[7rem] max-w-[7rem] md:min-w-[10rem] md:max-w-[10rem] bg-white/10"
            }, i))
        })]
    })
})
  , b = ({title: r="", moreURL: i, data: a=[], dataKey: t="__data__key__", dataLoader: n= () => null, renderItem: d=s => s}) => {
    var l;
    const {data: s, error: m, isLoading: c} = x(t, n, {
        keepPreviousData: !1,
        revalidateOnFocus: !1
    });
    return m ? null : c ? e.jsx(j, {}) : s != null && s.length ? e.jsx("section", {
        children: e.jsxs("div", {
            className: "py-2",
            children: [(r || i) && e.jsxs("div", {
                className: "flex gap-3 items-center justify-between mb-0 container",
                children: [r && e.jsx("h4", {
                    className: "text-lg md:text-xl lg:text-2xl tracking-wider text-white capitalize",
                    children: r
                }), i && e.jsxs(u, {
                    to: i || "/",
                    className: " text-white font-medium tracking-wider underline underline-offset-2 flex gap-1 items-center justify-center",
                    children: ["More ", e.jsx(g, {
                        className: "h-4 w-4"
                    })]
                })]
            }), e.jsx(w, {
                spaceBetween: 15,
                slidesPerGroupAuto: !0,
                slidesPerView: "auto",
                freeMode: !0,
                breakpoints: {
                    0: {
                        slidesOffsetAfter: 12,
                        slidesOffsetBefore: 12
                    },
                    960: {
                        slidesOffsetAfter: 40,
                        slidesOffsetBefore: 40
                    },
                    1140: {
                        slidesOffsetAfter: 56,
                        slidesOffsetBefore: 56
                    }
                },
                navigation: !0,
                modules: [p],
                className: "overflow-visible overflow-x-clip",
                wrapperClass: "py-1 ",
                children: (l = a != null && a.length ? a : s) == null ? void 0 : l.map( (o, f) => e.jsx(h, {
                    className: "hover:scale-105 duration-150 ease-in-out origin-center max-w-[200px] md:max-w-[260px] lg:max-w-xs !w-[31%] sm:!w-1/4 md:!w-56 lg:!w-1/6 pc:!w-[calc(100%/7)]  pc-lg:!w-[calc(100%/8)]  pc-xl:!w-[calc(100%/9)]",
                    children: d(o)
                }, f))
            })]
        })
    }) : null
}
;
export {b as default};
