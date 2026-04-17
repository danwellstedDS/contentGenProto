"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle(size) {
  var createStyles = (0, _hooks.useCreateStyles)();

  // Use "parseFloat" to avoid size is NaN.
  var s = typeof size === 'number' ? size : parseFloat(size);
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      subComponentsToken = _ref.subComponentsToken;
    var closeButtonToken = subComponentsToken.CloseButton;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-close-btn {\n                display: inline-block;\n                width: ", "px;\n                height: ", "px;\n                padding: 0;\n                background: none;\n                border: none;\n                line-height: ", "px;\n                font-size: ", "px;\n                color: ", ";\n                cursor: pointer;\n                transition: all 0.2s ease;\n\n                &:hover {\n                    color: ", ";\n                }\n\n                &.", "-close-btn-inverse {\n                    color: ", ";\n\n                    &:hover {\n                        color: ", ";\n                    }\n                }\n            }\n        "])), prefixCls, s || closeButtonToken['close-btn-size'], s || closeButtonToken['close-btn-size'], s || closeButtonToken['close-btn-size'], s || closeButtonToken['close-btn-size'], closeButtonToken['close-btn-color'], closeButtonToken['close-btn-color-hover'], prefixCls, closeButtonToken['close-btn-color-inverse'], closeButtonToken['close-btn-color-inverse-hover']);
  });
};
var _default = exports.default = useStyle;