var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file SelectionAction.ts
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &[class^='ds-draggable'],\n            & [class^='ds-draggable'] {\n                box-sizing: border-box;\n            }\n\n            &.", "-draggable-anchor {\n                position: relative;\n                height: 0;\n                width: 0;\n                box-sizing: border-box;\n                z-index: 1;\n\n                &.window {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                }\n\n                .", "-draggable-bar {\n                    position: relative;\n                    z-index: 1;\n\n                    display: inline-block;\n                    min-height: 48px;\n                    min-width: 100px;\n                    padding: 8px 16px;\n                    line-height: 32px;\n\n                    background-color: #fff;\n                    border-radius: 6px;\n                    box-shadow: ", ";\n\n                    user-select: none;\n                    pointer-events: none;\n                    opacity: 0;\n                    transition:\n                        opacity 0.2s,\n                        transform 0.2s;\n\n                    &.draggable {\n                        cursor: grab;\n                    }\n\n                    &.dragging {\n                        transition: unset;\n                    }\n\n                    &.show {\n                        user-select: unset;\n                        pointer-events: unset;\n                        opacity: 1;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, token['shadow-3']);
  });
};
export default useStyle;