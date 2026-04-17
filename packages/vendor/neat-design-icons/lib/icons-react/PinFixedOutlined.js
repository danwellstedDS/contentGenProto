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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
var react_1 = __importDefault(require("react"));
var PinFixedOutlined_1 = __importDefault(require("../icons-svg/lib/PinFixedOutlined"));
var components_1 = __importDefault(require("../components"));
var PinFixedOutlined = function (props, ref) { return ((0, jsx_runtime_1.jsx)(components_1.default, __assign({}, props, { isTwoTone: false, ref: ref, component: PinFixedOutlined_1.default }))); };
if (process.env.NODE_ENV !== 'production') {
    PinFixedOutlined.displayName = 'PinFixedOutlined';
}
exports.default = react_1.default.forwardRef(PinFixedOutlined);
