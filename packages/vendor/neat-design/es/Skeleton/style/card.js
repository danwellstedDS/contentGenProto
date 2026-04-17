var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file card.ts
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
    var skeletonToken = componentsToken.Skeleton;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-skeleton-card {\n                padding: ", "px\n                    ", "px;\n            }\n        "])), prefixCls, skeletonToken['skeleton-padding-container'] + (skeletonToken['skeleton-size-v-paragraph-medium'] - skeletonToken['skeleton-size-v-text-medium']) / 2, skeletonToken['skeleton-padding-container']);
  });
};
export default useStyle;