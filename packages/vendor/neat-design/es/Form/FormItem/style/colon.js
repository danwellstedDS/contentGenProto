var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file colon.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-form-item-label > label::after {\n            display: none;\n        }\n    "])), prefixCls);
});