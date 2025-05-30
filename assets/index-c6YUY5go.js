import {a as r, w as $} from "./index-91HBn0HY.js";
function s() {
    return s = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c])
        }
        return e
    }
    ,
    s.apply(this, arguments)
}
function m(e, n) {
    typeof e == "function" ? e(n) : e != null && (e.current = n)
}
function u(...e) {
    return n => e.forEach(t => m(t, n))
}
function C(...e) {
    return r.useCallback(u(...e), e)
}
const p = r.forwardRef( (e, n) => {
    const {children: t, ...c} = e
      , l = r.Children.toArray(t)
      , o = l.find(b);
    if (o) {
        const i = o.props.children
          , a = l.map(d => d === o ? r.Children.count(i) > 1 ? r.Children.only(null) : r.isValidElement(i) ? i.props.children : null : d);
        return r.createElement(f, s({}, c, {
            ref: n
        }), r.isValidElement(i) ? r.cloneElement(i, void 0, a) : null)
    }
    return r.createElement(f, s({}, c, {
        ref: n
    }), t)
}
);
p.displayName = "Slot";
const f = r.forwardRef( (e, n) => {
    const {children: t, ...c} = e;
    return r.isValidElement(t) ? r.cloneElement(t, {
        ...E(c, t.props),
        ref: n ? u(n, t.ref) : t.ref
    }) : r.Children.count(t) > 1 ? r.Children.only(null) : null
}
);
f.displayName = "SlotClone";
const h = ({children: e}) => r.createElement(r.Fragment, null, e);
function b(e) {
    return r.isValidElement(e) && e.type === h
}
function E(e, n) {
    const t = {
        ...n
    };
    for (const c in n) {
        const l = e[c]
          , o = n[c];
        /^on[A-Z]/.test(c) ? l && o ? t[c] = (...a) => {
            o(...a),
            l(...a)
        }
        : l && (t[c] = l) : c === "style" ? t[c] = {
            ...l,
            ...o
        } : c === "className" && (t[c] = [l, o].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...t
    }
}
const v = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , x = v.reduce( (e, n) => {
    const t = r.forwardRef( (c, l) => {
        const {asChild: o, ...i} = c
          , a = o ? p : n;
        return r.useEffect( () => {
            window[Symbol.for("radix-ui")] = !0
        }
        , []),
        r.createElement(a, s({}, i, {
            ref: l
        }))
    }
    );
    return t.displayName = `Primitive.${n}`,
    {
        ...e,
        [n]: t
    }
}
, {});
function g(e, n) {
    e && $.flushSync( () => e.dispatchEvent(n))
}
export {C as $, s as _, p as a, x as b, g as c};
