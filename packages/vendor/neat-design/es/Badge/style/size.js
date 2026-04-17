var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file size.ts
 * @author peter(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    token = _ref.token,
    componentsToken = _ref.componentsToken;
  var badgeToken = componentsToken.Badge;
  var textCls = "".concat(prefixCls, "-badge-status-text");
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-badge-count.", "-badge-multiple-words {\n            padding: 0 ", "px;\n        }\n\n        .", " {\n            line-height: ", ";\n            font-size: ", "px;\n        }\n\n        &.", "-badge-size-small {\n            .", "-badge-count.", "-badge-multiple-words {\n                padding: 0 ", "px;\n            }\n\n            .", " {\n                line-height: ", ";\n                font-size: ", "px;\n            }\n        }\n\n        &.", "-badge-size-large {\n            .", " {\n                line-height: ", ";\n                font-size: ", "px;\n            }\n        }\n    "])), prefixCls, prefixCls, badgeToken['badge-padding-h-medium'], textCls, token['line-height-static-20'], token['font-size-body-medium'], prefixCls, prefixCls, prefixCls, badgeToken['badge-padding-h-small'], textCls, token['line-height-static-16'], token['font-size-body-small'], prefixCls, textCls, token['line-height-static-24'], token['font-size-body-large']);
});