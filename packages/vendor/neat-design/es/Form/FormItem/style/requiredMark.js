var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file requiredMark.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-form-item-label > label {\n            &.", "-form-item-required::before,\n                .", "-form-item-tooltip,\n                .", "-form-item-optional {\n                display: none;\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls);
});