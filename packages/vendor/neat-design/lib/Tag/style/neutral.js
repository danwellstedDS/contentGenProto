"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file neutral.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken,
    subComponentsToken = _ref.subComponentsToken;
  var tagToken = componentsToken.Tag;
  var closeButtonToken = subComponentsToken.CloseButton;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-tag-color-neutral {\n            background: ", ";\n            color: ", ";\n\n            &:hover {\n                background: ", ";\n            }\n\n            &:active {\n                background: ", ";\n                color: ", ";\n\n                .", "-tag-close-icon .", "-close-btn {\n                    color: ", ";\n\n                    &:hover {\n                        color: ", ";\n                    }\n                }\n            }\n\n            &.disabled {\n                background: ", ";\n                color: ", ";\n            }\n        }\n    "])), prefixCls, tagToken['tag-color-bg-light-neutral'], tagToken['tag-color-text-light-neutral'], tagToken['tag-color-bg-light-neutral-hover'], tagToken['tag-color-bg-light-neutral-active'], tagToken['tag-color-text-light-neutral-active'], prefixCls, prefixCls, closeButtonToken['close-btn-color-inverse'], closeButtonToken['close-btn-color-inverse-hover'], tagToken['tag-color-bg-light-disabled'], tagToken['tag-color-text-light-disabled']);
};