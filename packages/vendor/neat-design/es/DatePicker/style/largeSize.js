var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file largeSize.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-suffix {\n            font-size: 24px;\n        }\n    "])), prefixCls);
});