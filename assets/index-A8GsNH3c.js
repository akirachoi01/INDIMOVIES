
import {b as c, _ as i} from "./index-c6YUY5go.js";
import {a as t} from "./index-91HBn0HY.js";
const f = t.forwardRef( (e, a) => {
    const {ratio: o=1, style: r, ...s} = e;
    return t.createElement("div", {
        style: {
            position: "relative",
            width: "100%",
            paddingBottom: `${100 / o}%`
        },
        "data-radix-aspect-ratio-wrapper": ""
    }, t.createElement(c.div, i({}, s, {
        ref: a,
        style: {
            ...r,
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    })))
}
)
  , $ = f;
export {f as $, $ as a};
