var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file layoutSider.ts
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-layout-sider {\n                background: ", ";\n                padding: 28px 0 12px;\n\n                & > .", "-layout-sider-trigger {\n                    position: absolute;\n                    top: 8px;\n                    right: -20px;\n                    display: flex;\n                    align-items: center;\n                    width: 32px !important;\n                    height: 24px;\n                    padding: 0 8px;\n                    background: ", ";\n                    border-radius: 12px;\n                    color: #fff;\n\n                    &:hover {\n                        width: 40px !important;\n                        background: #00131c;\n                    }\n                }\n\n                &.", "-layout-sider-bordered {\n                    border-inline-end: 1px solid\n                        ", ";\n                }\n\n                &.", "-layout-sider-collapsed {\n                    & > .", "-layout-sider-trigger {\n                        justify-content: flex-end;\n\n                        &:hover {\n                            right: -28px;\n                        }\n\n                        & > span {\n                            transform: rotate(180deg);\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, token['color-bg'], prefixCls, token['neutral-9'], prefixCls, token['color-border-divider'], prefixCls, prefixCls);
  });
};
export default useStyle;