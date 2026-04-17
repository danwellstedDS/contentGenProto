var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file baseDotSkip.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var stepsToken = componentsToken.Steps;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item.", "-steps-item-skip {\n            .", "-steps-item-icon\n                > .", "-steps-icon\n                .", "-steps-icon-dot {\n                background: transparent;\n\n                &::after {\n                    background: ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, stepsToken['steps-color-disabled']);
});