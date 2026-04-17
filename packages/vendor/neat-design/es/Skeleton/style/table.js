var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file table.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Types

var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var skeletonToken = componentsToken.Skeleton,
      tableToken = componentsToken.Table;
    var getSizeStyle = function getSizeStyle() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            .", "-skeleton-table-checkbox {\n                flex: 0 0 ", "px;\n                width: ", "px;\n                height: ", "px;\n            }\n\n            .", "-skeleton-table-cell {\n                height: ", "px;\n            }\n        "])), prefixCls, skeletonToken["skeleton-size-table-".concat(size)], skeletonToken["skeleton-size-table-".concat(size)], skeletonToken["skeleton-size-table-".concat(size)], prefixCls, skeletonToken["skeleton-size-table-".concat(size)]);
    };
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            &.", "-skeleton-table {\n                display: flex;\n                flex-direction: column;\n                gap: 1px;\n\n                .", "-skeleton-table-row {\n                    display: flex;\n                    ", "\n\n                    .", "-skeleton-table-checkbox {\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    .", "-skeleton-table-cell {\n                        flex: 1;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        padding-inline: ", "px;\n\n                        .", "-skeleton-bar {\n                            width: 100%;\n                        }\n                    }\n                }\n\n                &.", "-skeleton-table-small {\n                    .", "-skeleton-table-row {\n                        ", "\n                    }\n                }\n\n                &.", "-skeleton-table-large {\n                    .", "-skeleton-table-row {\n                        ", "\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, getSizeStyle(), prefixCls, prefixCls, tableToken['table-padding-h'], prefixCls, prefixCls, prefixCls, getSizeStyle('small'), prefixCls, prefixCls, getSizeStyle('large'));
  });
};
export default useStyle;