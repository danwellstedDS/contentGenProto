'use client';
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
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Context_1 = __importDefault(require("./Context"));
var IconBase_1 = __importDefault(require("./IconBase"));
var defaultTwoToneColors = {
    primary: "#06789D",
    secondary: "#58A5BD",
    tertiary: "#B2D5E1",
}, defaultDisabledTwoToneColors = {
    primary: "#ABB8C2",
    secondary: "#CED5DB",
    tertiary: "#DADFE3",
}, defaultInverseTwoToneColors = {
    primary: "#FFFFFF",
    secondary: "#FFFFFF99",
    tertiary: "#B2D5E1",
};
var Icon = react_1.default.forwardRef(function (props, ref) {
    var _a;
    var 
    // affect outter <i>...</i>
    className = props.className, 
    // affect inner <svg>...</svg>
    Component = props.component, spin = props.spin, rotate = props.rotate, _b = props.anti, anti = _b === void 0 ? false : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.inverse, inverse = _d === void 0 ? false : _d, _e = props.isTwoTone, isTwoTone = _e === void 0 ? false : _e, tabIndex = props.tabIndex, onClick = props.onClick, restProps = __rest(props, ["className", "component", "spin", "rotate", "anti", "disabled", "inverse", "isTwoTone", "tabIndex", "onClick"]);
    var _f = react_1.default.useContext(Context_1.default), _g = _f.prefixCls, prefixCls = _g === void 0 ? 'neaticon' : _g, rootClassName = _f.rootClassName, _h = _f.twoToneColors, twoToneColors = _h === void 0 ? defaultTwoToneColors : _h, _j = _f.disabledTwoToneColors, disabledTwoToneColors = _j === void 0 ? defaultDisabledTwoToneColors : _j, _k = _f.inverseTwoToneColors, inverseTwoToneColors = _k === void 0 ? defaultInverseTwoToneColors : _k;
    var componentName = (Component || {}).displayName;
    if (!Component)
        return null;
    var classString = (0, classnames_1.default)(rootClassName, prefixCls, (_a = {},
        _a["".concat(prefixCls, "-").concat(componentName)] = !!componentName,
        _a["".concat(prefixCls, "-spin")] = !!spin,
        _a["".concat(prefixCls, "-spin-anti")] = !!spin && !!anti,
        _a), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    var svgStyle = rotate
        ? {
            msTransform: "rotate(".concat(rotate, "deg)"),
            transform: "rotate(".concat(rotate, "deg)"),
        }
        : undefined, computedTwoToneColors = disabled ?
        disabledTwoToneColors
        : inverse ?
            inverseTwoToneColors
            : twoToneColors, twoToneProps = isTwoTone ? {
        twoToneColors: computedTwoToneColors
    } : {};
    return ((0, jsx_runtime_1.jsx)("span", __assign({ role: "img", "aria-label": componentName }, restProps, { ref: ref, tabIndex: iconTabIndex, onClick: onClick, className: classString, children: (0, jsx_runtime_1.jsx)(IconBase_1.default, __assign({ icon: Component }, twoToneProps, { style: svgStyle })) })));
});
Icon.displayName = 'NeatIcon';
exports.default = Icon;
