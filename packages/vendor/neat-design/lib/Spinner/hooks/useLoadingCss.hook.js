"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
/**
 * @file useLoadingStyles.hook.ts
 * @author pipi(pter.rao@derbysoft.net)
 */

var useLoadingCss = function useLoadingCss(params) {
  var _useComponetsToken = (0, _hooks.useComponetsToken)(),
    spinnerToken = _useComponetsToken.Spinner;
  var _ref = params || {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? spinnerToken["spinner-color-icon"] : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? spinnerToken["spinner-size-medium"] : _ref$size,
    _ref$circleThickness = _ref.circleThickness,
    circleThickness = _ref$circleThickness === void 0 ? 3 : _ref$circleThickness,
    _ref$spinning = _ref.spinning,
    spinning = _ref$spinning === void 0 ? true : _ref$spinning,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? {} : _ref$animation;
  var _animation$time = animation.time,
    time = _animation$time === void 0 ? 1 : _animation$time,
    _animation$bezier = animation.bezier,
    bezier = _animation$bezier === void 0 ? 'linear' : _animation$bezier;
  var width = typeof size === 'number' ? "".concat(size, "px") : size;
  return "\n    @keyframes anti {\n      100% {\n        transform: rotate(-1turn);\n      }\n    }\n    display: inline-block;\n    width: ".concat(width, ";\n    aspect-ratio: 1;\n    border-radius: 50%;\n\n    background: radial-gradient(\n          farthest-side,\n          ").concat(color, " 90%,\n          transparent\n        )\n        top/").concat(circleThickness, "px ").concat(circleThickness, "px no-repeat,\n      conic-gradient(").concat(color, " 0deg, transparent 324deg);\n    mask: radial-gradient(\n      farthest-side,\n      transparent calc(100% - ").concat(circleThickness, "px),\n      #000 0\n    );\n    ").concat(spinning ? "animation: anti ".concat(time, "s infinite ").concat(bezier, ";") : '', "\n  ");
};
var _default = exports.default = useLoadingCss;