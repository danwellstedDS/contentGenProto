var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file layoutHeader.ts
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-layout-header {\n                display: flex;\n\n                &.", "-layout-header-bordered {\n                    border-bottom: 1px solid ", ";\n                }\n            }\n        "])), prefixCls, prefixCls, token['color-border-divider']);
  });
};
export default useStyle;