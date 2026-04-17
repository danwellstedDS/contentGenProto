import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import { getShadowRoot } from 'rc-util/lib/Dom/shadow';
import warn from 'rc-util/lib/warning';
import { useContext, useEffect } from 'react';
import IconContext from './components/Context';
function camelCase(input) {
    return input.replace(/-(.)/g, function (match, g) { return g.toUpperCase(); });
}
export function warning(valid, message) {
    warn(valid, "[@neat-design/icons] ".concat(message));
}
export function normalizeAttrs(attrs) {
    if (attrs === void 0) { attrs = {}; }
    return Object.keys(attrs).reduce(function (acc, key) {
        var val = attrs[key];
        switch (key) {
            case 'class':
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
export function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export var svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false',
};
export var iconStyles = "\n.neaticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.neaticon > * {\n  line-height: 1;\n}\n\n.neaticon svg {\n  display: inline-block;\n}\n\n.neaticon::before {\n  display: none;\n}\n\n.neaticon .neaticon-icon {\n  display: block;\n}\n\n.neaticon[tabindex] {\n  cursor: pointer;\n}\n\n.neaticon-spin::before,\n.neaticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.neaticon-spin-anti::before,\n.neaticon-spin-anti {\n  display: inline-block;\n  -webkit-animation: loadingCircleAnti 1s infinite linear;\n  animation: loadingCircleAnti 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircleAnti {\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes loadingCircleAnti {\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n";
export var useInsertStyles = function (eleRef) {
    var _a = useContext(IconContext), csp = _a.csp, prefixCls = _a.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/neaticon/g, prefixCls);
    }
    useEffect(function () {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        updateCSS(mergedStyleStr, '@neat-design-icons', {
            prepend: true,
            csp: csp,
            attachTo: shadowRoot,
        });
    }, []);
};
