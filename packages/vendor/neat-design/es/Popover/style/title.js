var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file title.ts
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-popover-title-inner {\n                position: relative;\n                display: flex;\n                align-items: center;\n                gap: ", "px;\n\n                .", "-popover-icon {\n                    font-size: ", "px;\n                }\n\n                .", "-popover-close-x {\n                    position: absolute;\n                    right: -8px;\n                    top: -8px;\n                }\n            }\n        "])), prefixCls, popoverToken['popover-gap'], prefixCls, popoverToken['popover-size-icon'], prefixCls);
  });
};
export default useStyle;