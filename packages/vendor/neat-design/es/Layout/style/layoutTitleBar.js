var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file layoutTitleBar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      token = _ref.token;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-layout-title-bar {\n                background: ", ";\n\n                .", "-layout-title-bar-secondary-back-container {\n                    box-sizing: border-box;\n                    height: 32px;\n                    padding: 6px 24px;\n                }\n\n                .", "-layout-title-bar-header {\n                    box-sizing: border-box;\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    height: 80px;\n                    padding: 12px 24px;\n                }\n\n                .", "-layout-title-bar-content {\n                    display: flex;\n                    gap: 8px;\n                }\n\n                .", "-layout-title-bar-title {\n                    font-weight: ", ";\n                    font-size: ", "px;\n                    line-height: ", ";\n                }\n\n                .", "-layout-title-bar-actions {\n                    display: flex;\n                    flex-direction: row-reverse;\n                    align-items: center;\n                    gap: 16px;\n                }\n            }\n        "])), prefixCls, token['color-bg'], prefixCls, prefixCls, prefixCls, prefixCls, token['font-weight-semibold'], token['font-size-header-4'], token['line-height-static-32'], prefixCls);
  });
};
export default useStyle;