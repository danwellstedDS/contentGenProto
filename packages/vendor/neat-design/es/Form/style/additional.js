var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file additional.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var formToken = componentsToken.Form;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        // Medium size styles are defined in src/Form/FormItem/style/additional.ts\n        // as the default style of the form item.\n\n        &.", "-form-small {\n            .", "-form-item {\n                .", "-form-item-additional {\n                    padding-bottom: ", "px;\n                }\n\n                .", "-form-item-explain {\n                    line-height: ", ";\n                    font-size: ", "px;\n                }\n            }\n        }\n\n        &.", "-form-large {\n            .", "-form-item {\n                .", "-form-item-additional {\n                    padding-bottom: ", "px;\n                }\n\n                .", "-form-item-explain {\n                    line-height: ", ";\n                    font-size: ", "px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, formToken['form-gap-v-small'], prefixCls, formToken['form-item-line-height-small'], formToken['form-item-font-size-small'], prefixCls, prefixCls, prefixCls, formToken['form-gap-v-large'], prefixCls, formToken['form-item-line-height-large'], formToken['form-item-font-size-large']);
});