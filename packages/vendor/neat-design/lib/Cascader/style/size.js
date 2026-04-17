"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file size.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-select-single {\n            .", "-select-selector {\n                padding: 5px 11px;\n            }\n\n            .", "-select-selection-placeholder {\n                inset-inline: 11px;\n            }\n\n            &.", "-select-sm {\n                .", "-select-selector {\n                    padding: 3px 11px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
};