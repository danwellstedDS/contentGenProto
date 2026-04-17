var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file ringMini.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var progressToken = componentsToken.Progress;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-progress-ring-mini {\n            .", "-progress-text {\n                display: none;\n            }\n\n            &.", "-progress-success, &.", "-progress-fail {\n                .", "-progress-text {\n                    display: block;\n                    font-size: ", "px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, progressToken['progress-size-icon-small']);
});