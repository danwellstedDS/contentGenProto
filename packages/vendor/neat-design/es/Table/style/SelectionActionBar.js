var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file SelectionActionBar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-table-selection-action-bar {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n\n                .", "-table-selection-action-bar-content {\n                    display: flex;\n                    align-items: center;\n\n                    .", "-table-selection-action-bar-text {\n                        margin-right: 16px;\n                    }\n                }\n\n                .", "-table-selection-action-bar-actions {\n                    font-size: 14px;\n                    font-weight: 500;\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls);
  });
};
export default useStyle;