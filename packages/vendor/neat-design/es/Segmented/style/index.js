var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import color from "./color";
import size from "./size";
var useStyle = function useStyle(_ref) {
  var onlyIcon = _ref.onlyIcon;
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-segmented {\n                ", "\n                ", "\n            }\n        "])), utils.prefixCls, color(utils), size(utils, onlyIcon));
  });
};
export default useStyle;