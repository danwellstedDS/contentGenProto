"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file mediumSize.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

var getCheckedSvg = function getCheckedSvg(fill) {
  return "\n    <svg width=\"8\" height=\"6\" viewBox=\"0 0 8 6\" fill=\"".concat(fill, "\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M2.7097 5.90683C2.62458 5.87019 2.54485 5.81785 2.47512 5.74981L0.22671 3.5562C-0.0755707 3.26128 -0.0755697 2.78313 0.226711 2.48822C0.528992 2.19331 1.01909 2.19331 1.32137 2.48822L3.03869 4.16369L6.65073 0.24987C6.93678 -0.0600742 7.4262 -0.0850981 7.74389 0.193977C8.06157 0.473053 8.08722 0.950548 7.80118 1.26049L3.65771 5.75013C3.41242 6.01592 3.01756 6.07219 2.7097 5.90683Z\"/>\n    </svg>\n");
};
var getIndeterminateSvg = function getIndeterminateSvg(fill) {
  return "\n    <svg width=\"8\" height=\"2\" viewBox=\"0 0 8 2\" fill=\"".concat(fill, "\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect width=\"8\" height=\"2\" rx=\"1\"/>\n    </svg>\n");
};
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var CheckboxToken = componentsToken.Checkbox;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        line-height: ", ";\n        font-size: ", "px;\n\n        .", "-checkbox {\n            height: ", ";\n            line-height: ", ";\n\n            .", "-checkbox-inner {\n                width: ", "px;\n                height: ", "px;\n            }\n\n            &.", "-checkbox-checked {\n                .", "-checkbox-inner {\n                    &::after {\n                        background-image: url('data:image/svg+xml;utf8,", "');\n                        width: 8px;\n                        height: 6px;\n                        line-height: 6px;\n                    }\n                }\n\n                &.", "-checkbox-disabled {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n            }\n\n            &.", "-checkbox-indeterminate {\n                .", "-checkbox-inner {\n                    &::after {\n                        background-image: url('data:image/svg+xml;utf8,", "');\n                        width: 8px;\n                        height: 2px;\n                        line-height: 2px;\n                    }\n                }\n\n                &.", "-checkbox-disabled {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n            }\n        }\n\n        &.", "-checkbox-state-error {\n            .", "-checkbox:not(.", "-checkbox-disabled) {\n                &.", "-checkbox-checked {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n\n                &.", "-checkbox-indeterminate {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n            }\n        }\n    "])), CheckboxToken['checkbox-line-height-medium'], CheckboxToken['checkbox-font-size-medium'], prefixCls, CheckboxToken['checkbox-line-height-medium'], CheckboxToken['checkbox-line-height-medium'], prefixCls, CheckboxToken['checkbox-size-medium'], CheckboxToken['checkbox-size-medium'], prefixCls, prefixCls, encodeURIComponent(getCheckedSvg('#fff')), prefixCls, prefixCls, encodeURIComponent(getCheckedSvg(CheckboxToken['checkbox-color-icon-selected-disabled'])), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg('#fff')), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg(CheckboxToken['checkbox-color-icon-selected-disabled'])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, encodeURIComponent(getCheckedSvg(CheckboxToken['checkbox-color-icon-selected-danger'])), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg(CheckboxToken['checkbox-color-icon-selected-danger'])));
};