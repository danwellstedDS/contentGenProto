var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file content.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var popoverToken = componentsToken.Popover;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-popover-inner-content-inner {\n                display: flex;\n                flex-direction: column;\n                gap: ", "px;\n\n                .", "-popover-action {\n                    gap: ", "px;\n                    padding: 0;\n\n                    .", "-btn {\n                        min-width: unset;\n                    }\n                }\n\n                &.has-icon {\n                    padding-left: ", "px;\n                }\n            }\n        "])), prefixCls, popoverToken['popover-gap-action'], prefixCls, popoverToken['popover-gap'], prefixCls, popoverToken['popover-size-icon'] + popoverToken['popover-gap']);
  });
};
export default useStyle;