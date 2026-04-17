"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file label.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    subComponentsToken = _ref.subComponentsToken;
  var labelToken = subComponentsToken.Label;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-form-layout-vertical\n            .", "-form-item.", "-form-item-empty-label\n            .", "-form-item-label {\n            display: none;\n        }\n\n        &.", "-form-layout-horizontal.", "-form-no-item-label\n            .", "-form-item-label {\n            display: none;\n        }\n\n        // Medium size styles are defined in src/Form/FormItem/style/label.ts\n        // as the default style of the form item.\n\n        &.", "-form-small {\n            .", "-form-item .", "-form-item-label {\n                height: ", ";\n                line-height: ", ";\n\n                > label {\n                    height: auto;\n                }\n            }\n        }\n\n        &.", "-form-large {\n            .", "-form-item .", "-form-item-label {\n                height: ", ";\n                line-height: ", ";\n\n                > label {\n                    height: auto;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, labelToken['label-line-height-small'], labelToken['label-line-height-small'], prefixCls, prefixCls, prefixCls, labelToken['label-line-height-large'], labelToken['label-line-height-large']);
};