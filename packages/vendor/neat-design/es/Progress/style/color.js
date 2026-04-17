var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file bar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var progressToken = componentsToken.Progress;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-progress-normal {\n            .", "-progress-text {\n                color: ", ";\n            }\n        }\n\n        &.", "-progress-success {\n            .", "-progress-text {\n                color: ", ";\n            }\n        }\n\n        &.", "-progress-fail {\n            .", "-progress-text {\n                color: ", ";\n            }\n        }\n    "])), prefixCls, prefixCls, progressToken['progress-color-text'], prefixCls, prefixCls, progressToken['progress-color-success'], prefixCls, prefixCls, progressToken['progress-color-fail']);
});