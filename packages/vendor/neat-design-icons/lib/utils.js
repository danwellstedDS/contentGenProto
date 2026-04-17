"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInsertStyles = exports.iconStyles = exports.svgBaseProps = void 0;
exports.warning = warning;
exports.normalizeAttrs = normalizeAttrs;
exports.normalizeTwoToneColors = normalizeTwoToneColors;
var dynamicCSS_1 = require("rc-util/lib/Dom/dynamicCSS");
var shadow_1 = require("rc-util/lib/Dom/shadow");
var warning_1 = __importDefault(require("rc-util/lib/warning"));
var react_1 = require("react");
var Context_1 = __importDefault(require("./components/Context"));
function camelCase(input) {
    return input.replace(/-(.)/g, function (match, g) { return g.toUpperCase(); });
}
function warning(valid, message) {
    (0, warning_1.default)(valid, "[@neat-design/icons] ".concat(message));
}
function normalizeAttrs(attrs) {
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
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
exports.svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false',
};
exports.iconStyles = "\n.neaticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.neaticon > * {\n  line-height: 1;\n}\n\n.neaticon svg {\n  display: inline-block;\n}\n\n.neaticon::before {\n  display: none;\n}\n\n.neaticon .neaticon-icon {\n  display: block;\n}\n\n.neaticon[tabindex] {\n  cursor: pointer;\n}\n\n.neaticon-spin::before,\n.neaticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.neaticon-spin-anti::before,\n.neaticon-spin-anti {\n  display: inline-block;\n  -webkit-animation: loadingCircleAnti 1s infinite linear;\n  animation: loadingCircleAnti 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircleAnti {\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes loadingCircleAnti {\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n";
var useInsertStyles = function (eleRef) {
    var _a = (0, react_1.useContext)(Context_1.default), csp = _a.csp, prefixCls = _a.prefixCls;
    var mergedStyleStr = exports.iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/neaticon/g, prefixCls);
    }
    (0, react_1.useEffect)(function () {
        var ele = eleRef.current;
        var shadowRoot = (0, shadow_1.getShadowRoot)(ele);
        (0, dynamicCSS_1.updateCSS)(mergedStyleStr, '@neat-design-icons', {
            prepend: true,
            csp: csp,
            attachTo: shadowRoot,
        });
    }, []);
};
exports.useInsertStyles = useInsertStyles;
