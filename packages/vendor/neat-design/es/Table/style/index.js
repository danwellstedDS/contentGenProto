var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import { getStyle as getCheckboxStyle } from "../../Checkbox/style";
import { styles as paginationStyles } from "../../Pagination/style";
import expandIcon from "./ExpandIcon";
import largeSize from "./largeSize";
import mediumSize from "./mediumSize";
import nested from "./nested";
import pagination from "./pagination";
import smallSize from "./smallSize";
import tableAvatarGroup from "./tableAvatarGroup";

// Types

var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var tableToken = componentsToken.Table;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-table-wrapper {\n                .", "-spin-nested-loading .", "-spin {\n                    max-height: unset;\n                }\n\n                .", "-table {\n                    scrollbar-color: unset !important;\n\n                    .", "-table-thead {\n                        .", "-table-cell {\n                            font-weight: 500;\n                            color: ", ";\n                        }\n                    }\n\n                    .", "-checkbox-wrapper {\n                        ", "\n                    }\n\n                    ", "\n                    &.", "-table-small {\n                        ", "\n                    }\n\n                    &.", "-table-middle {\n                        ", "\n                    }\n\n                    ", "\n                    ", "\n                }\n\n                ", "\n\n                .", "-table-pagination {\n                    ", "\n                    ", "\n                }\n\n                &.", "-table-row-selection-highlighted {\n                    .", "-table-row-selected {\n                        td {\n                            background-color: ", ";\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, tableToken['table-color-text-secondary'], prefixCls, getCheckboxStyle(utils), largeSize(utils), prefixCls, smallSize(utils), prefixCls, mediumSize(utils), tableAvatarGroup(utils), expandIcon(utils), nested(utils), prefixCls, paginationStyles(utils), pagination(utils), prefixCls, prefixCls, tableToken['table-color-bg-active']);
  });
};
export default useStyle;