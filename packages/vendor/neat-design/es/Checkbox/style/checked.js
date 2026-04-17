var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file checked.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var CheckboxToken = componentsToken.Checkbox;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-checkbox.", "-checkbox-checked {\n            .", "-checkbox-inner {\n                background-color: ", ";\n                border-color: ", ";\n            }\n        }\n\n        &:hover {\n            .", "-checkbox.", "-checkbox-checked {\n                .", "-checkbox-inner {\n                    background-color: ", ";\n                    border-color: ", ";\n                }\n            }\n        }\n\n        &:active {\n            .", "-checkbox.", "-checkbox-checked {\n                .", "-checkbox-inner {\n                    background-color: ", ";\n                    border-color: ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected'], CheckboxToken['checkbox-color-bg-selected'], prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected-hover'], CheckboxToken['checkbox-color-bg-selected-hover'], prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected-press'], CheckboxToken['checkbox-color-bg-selected-press']);
});