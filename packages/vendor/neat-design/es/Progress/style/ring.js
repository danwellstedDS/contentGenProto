var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file ring.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var progressToken = componentsToken.Progress;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-progress-ring {\n            .", "-progress-text {\n                font-size: ", "px;\n            }\n\n            &.", "-progress-success, &.", "-progress-fail {\n                .", "-progress-text {\n                    font-size: ", "px;\n                }\n            }\n\n            &.", "-progress-small {\n                .", "-progress-text {\n                    font-size: ", "px;\n                }\n\n                &.", "-progress-success, &.", "-progress-fail {\n                    .", "-progress-text {\n                        font-size: ", "px;\n                    }\n                }\n            }\n\n            &.", "-progress-large {\n                .", "-progress-text {\n                    font-size: ", "px;\n                }\n\n                &.", "-progress-success, &.", "-progress-fail {\n                    .", "-progress-text {\n                        font-size: ", "px;\n                    }\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, progressToken['progress-font-size-medium'], prefixCls, prefixCls, prefixCls, progressToken['progress-size-icon-medium'], prefixCls, prefixCls, progressToken['progress-font-size-small'], prefixCls, prefixCls, prefixCls, progressToken['progress-size-icon-small'], prefixCls, prefixCls, progressToken['progress-font-size-large'], prefixCls, prefixCls, prefixCls, progressToken['progress-size-icon-large']);
});