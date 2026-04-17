var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file error.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var CheckboxToken = componentsToken.Checkbox;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-checkbox-state-error:not(.", "-checkbox-wrapper-disabled) {\n            .", "-checkbox:not(.", "-checkbox-disabled) {\n                .", "-checkbox-inner {\n                    background-color: ", ";\n                    border-color: ", ";\n                }\n\n                &.", "-checkbox-indeterminate {\n                    .", "-checkbox-inner {\n                        background-color: ", " !important;\n                        border-color: ", " !important;\n                    }\n                }\n            }\n\n            &:hover {\n                .", "-checkbox:not(.", "-checkbox-disabled) {\n                    .", "-checkbox-inner {\n                        background-color: ", ";\n                        border-color: ", ";\n                    }\n                }\n            }\n\n            &:active {\n                .", "-checkbox:not(.", "-checkbox-disabled) {\n                    .", "-checkbox-inner {\n                        background-color: ", ";\n                        border-color: ", ";\n                    }\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-unselected'], CheckboxToken['checkbox-color-border-danger'], prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-unselected'], CheckboxToken['checkbox-color-border-danger'], prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-unselected'], CheckboxToken['checkbox-color-border-danger'], prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-unselected'], CheckboxToken['checkbox-color-border-danger']);
});