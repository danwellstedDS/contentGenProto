var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file table-avatar-group.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-table-tbody {\n            .", "-table-cell {\n                .", "-table-avatar-group {\n                    vertical-align: middle;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls);
});