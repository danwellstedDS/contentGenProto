"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      token = _ref.token,
      componentsToken = _ref.componentsToken;
    var alertToken = componentsToken.Alert;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-alert {\n                width: 100%;\n                align-items: flex-start;\n                border-right: none;\n                border-block: none;\n                border-left-width: 4px;\n                border-left-style: solid;\n\n                .", "-alert-icon {\n                    margin-right: ", "px;\n                    font-size: ", "px;\n                }\n\n                .", "-alert-description {\n                    margin-top: 4px;\n                }\n\n                .", "-alert-content {\n                    .", "-alert-message {\n                        line-height: ", ";\n                    }\n\n                    .", "-alert-message-action,\n                        .", "-alert-description-action {\n                        margin-top: ", "px;\n                    }\n                }\n\n                .", "-alert-close-icon {\n                    width: ", "px;\n                    height: ", "px;\n                    margin-left: ", "px;\n                    line-height: ", ";\n                    font-size: ", "px;\n                    color: ", ";\n                }\n\n                &.", "-alert-with-description {\n                    .", "-alert-content {\n                        .", "-alert-message {\n                            line-height: 24px;\n                            font-weight: 500;\n                        }\n                    }\n                }\n\n                &.", "-alert-banner {\n                    width: 100%;\n\n                    .", "-alert-icon {\n                        margin-right: 10px;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, alertToken['alert-gap'], alertToken['alert-size-icon'], prefixCls, prefixCls, prefixCls, alertToken['alert-line-height'], prefixCls, prefixCls, alertToken['alert-gap'], prefixCls, alertToken['alert-size-icon'], alertToken['alert-size-icon'], alertToken['alert-gap'], alertToken['alert-line-height'], alertToken['alert-size-icon'], token['color-icon'], prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;