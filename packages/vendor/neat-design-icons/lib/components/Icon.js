"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// Seems this is used for iconFont
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var ref_1 = require("rc-util/lib/ref");
var Context_1 = __importDefault(require("./Context"));
var utils_1 = require("../utils");
var Icon = react_1.default.forwardRef(function (props, ref) {
    var _a;
    var 
    // affect outter <i>...</i>
    className = props.className, 
    // affect inner <svg>...</svg>
    Component = props.component, viewBox = props.viewBox, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, 
    // children
    children = props.children, restProps = __rest(props, ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"]);
    var iconRef = react_1.default.useRef();
    var mergedRef = (0, ref_1.useComposeRef)(iconRef, ref);
    (0, utils_1.warning)(Boolean(Component || children), 'Should have `component` prop or `children`.');
    (0, utils_1.useInsertStyles)(iconRef);
    var _b = react_1.default.useContext(Context_1.default), _c = _b.prefixCls, prefixCls = _c === void 0 ? 'neaticon' : _c, rootClassName = _b.rootClassName;
    var classString = (0, classnames_1.default)(rootClassName, prefixCls, className);
    var svgClassString = (0, classnames_1.default)((_a = {},
        _a["".concat(prefixCls, "-spin")] = !!spin,
        _a));
    var svgStyle = rotate
        ? {
            msTransform: "rotate(".concat(rotate, "deg)"),
            transform: "rotate(".concat(rotate, "deg)"),
        }
        : undefined;
    var innerSvgProps = __assign(__assign({}, utils_1.svgBaseProps), { className: svgClassString, style: svgStyle, viewBox: viewBox });
    if (!viewBox) {
        delete innerSvgProps.viewBox;
    }
    // component > children
    var renderInnerNode = function () {
        if (Component) {
            return (0, jsx_runtime_1.jsx)(Component, __assign({}, innerSvgProps, { children: children }));
        }
        if (children) {
            (0, utils_1.warning)(Boolean(viewBox) ||
                (react_1.default.Children.count(children) === 1 &&
                    react_1.default.isValidElement(children) &&
                    react_1.default.Children.only(children).type === 'use'), 'Make sure that you provide correct `viewBox`' +
                ' prop (default `0 0 1024 1024`) to the icon.');
            return ((0, jsx_runtime_1.jsx)("svg", __assign({}, innerSvgProps, { viewBox: viewBox, children: children })));
        }
        return null;
    };
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    return ((0, jsx_runtime_1.jsx)("span", __assign({ role: "img" }, restProps, { ref: mergedRef, tabIndex: iconTabIndex, onClick: onClick, className: classString, children: renderInnerNode() })));
});
Icon.displayName = 'Icon';
exports.default = Icon;
