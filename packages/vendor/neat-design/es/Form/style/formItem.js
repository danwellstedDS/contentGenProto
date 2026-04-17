var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file formItem.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var formToken = componentsToken.Form;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-form-layout-horizontal {\n            .", "-form-item {\n                margin-bottom: ", "px;\n                margin-inline-end: ", "px;\n            }\n\n            &.", "-form-small {\n                .", "-form-item {\n                    margin-inline-end: ", "px;\n                }\n            }\n\n            &.", "-form-large {\n                .", "-form-item {\n                    margin-inline-end: ", "px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, formToken['form-item-gap'] + parseInt(formToken['form-item-line-height-medium']) + formToken['form-gap-v-medium'], formToken['form-gap-h-medium'], prefixCls, prefixCls, formToken['form-gap-h-small'], prefixCls, prefixCls, formToken['form-gap-h-large']);
});