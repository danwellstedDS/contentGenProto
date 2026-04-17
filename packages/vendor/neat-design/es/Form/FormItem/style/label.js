var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file label.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken,
    subComponentsToken = _ref.subComponentsToken;
  var formToken = componentsToken.Form;
  var labelToken = subComponentsToken.Label;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-form-item-label {\n            box-sizing: content-box;\n            height: ", ";\n            padding-bottom: ", "px;\n            line-height: ", ";\n            text-align: left;\n\n            > label {\n                height: auto;\n            }\n        }\n    "])), prefixCls, labelToken['label-line-height-medium'], formToken['form-item-gap'], labelToken['label-line-height-medium']);
});