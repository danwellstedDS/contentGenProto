"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file smallSize.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

var getCheckedSvg = function getCheckedSvg(fill) {
  return "\n    <svg width=\"8\" height=\"6\" viewBox=\"0 0 8 6\" fill=\"".concat(fill, "\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M2.7094 5.9067C2.62441 5.87006 2.54479 5.81777 2.47514 5.74982L0.226713 3.5562C-0.0755707 3.26129 -0.0755712 2.78314 0.226713 2.48822C0.528996 2.19331 1.0191 2.19331 1.32138 2.48822L3.03867 4.16365L6.65072 0.249871C6.93677 -0.060074 7.4262 -0.0850983 7.74389 0.193977C8.06158 0.473053 8.08723 0.950548 7.80118 1.26049L3.65767 5.75013C3.41231 6.01599 3.0173 6.07222 2.7094 5.9067Z\"/>\n    </svg>\n");
};
var getIndeterminateSvg = function getIndeterminateSvg(fill) {
  return "\n    <svg width=\"8\" height=\"2\" viewBox=\"0 0 8 2\" fill=\"".concat(fill, "\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect width=\"8\" height=\"2\" rx=\"1\"/>\n    </svg>\n");
};
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var CheckboxToken = componentsToken.Checkbox;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        line-height: ", ";\n        font-size: ", "px;\n\n        .", "-checkbox {\n            height: ", ";\n            line-height: ", ";\n\n            .", "-checkbox-inner {\n                width: ", "px;\n                height: ", "px;\n            }\n\n            &.", "-checkbox-checked {\n                .", "-checkbox-inner {\n                    &::after {\n                        background-image: url('data:image/svg+xml;utf8,", "');\n                        width: 8px;\n                        height: 6px;\n                        line-height: 6px;\n                    }\n                }\n\n                &.", "-checkbox-disabled {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n            }\n\n            &.", "-checkbox-indeterminate {\n                .", "-checkbox-inner {\n                    &::after {\n                        background-image: url('data:image/svg+xml;utf8,", "');\n                        width: 8px;\n                        height: 2px;\n                        line-height: 2px;\n                    }\n                }\n\n                &.", "-checkbox-disabled {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n            }\n        }\n\n        &.", "-checkbox-state-error {\n            .", "-checkbox:not(.", "-checkbox-disabled) {\n                &.", "-checkbox-checked {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n\n                &.", "-checkbox-indeterminate {\n                    .", "-checkbox-inner {\n                        &::after {\n                            background-image: url('data:image/svg+xml;utf8,", "');\n                        }\n                    }\n                }\n            }\n        }\n    "])), CheckboxToken['checkbox-line-height-small'], CheckboxToken['checkbox-font-size-small'], prefixCls, CheckboxToken['checkbox-line-height-small'], CheckboxToken['checkbox-line-height-small'], prefixCls, CheckboxToken['checkbox-size-small'], CheckboxToken['checkbox-size-small'], prefixCls, prefixCls, encodeURIComponent(getCheckedSvg('#fff')), prefixCls, prefixCls, encodeURIComponent(getCheckedSvg(CheckboxToken['checkbox-color-icon-selected-disabled'])), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg('#fff')), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg(CheckboxToken['checkbox-color-icon-selected-disabled'])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, encodeURIComponent(getCheckedSvg(CheckboxToken['checkbox-color-icon-selected-danger'])), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg(CheckboxToken['checkbox-color-icon-selected-danger'])));
};