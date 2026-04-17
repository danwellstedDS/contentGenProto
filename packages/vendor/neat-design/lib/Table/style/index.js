"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _style = require("../../Checkbox/style");
var _style2 = require("../../Pagination/style");
var _ExpandIcon = _interopRequireDefault(require("./ExpandIcon"));
var _largeSize = _interopRequireDefault(require("./largeSize"));
var _mediumSize = _interopRequireDefault(require("./mediumSize"));
var _nested = _interopRequireDefault(require("./nested"));
var _pagination = _interopRequireDefault(require("./pagination"));
var _smallSize = _interopRequireDefault(require("./smallSize"));
var _tableAvatarGroup = _interopRequireDefault(require("./tableAvatarGroup"));
var _templateObject;
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types

var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var tableToken = componentsToken.Table;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-table-wrapper {\n                .", "-spin-nested-loading .", "-spin {\n                    max-height: unset;\n                }\n\n                .", "-table {\n                    scrollbar-color: unset !important;\n\n                    .", "-table-thead {\n                        .", "-table-cell {\n                            font-weight: 500;\n                            color: ", ";\n                        }\n                    }\n\n                    .", "-checkbox-wrapper {\n                        ", "\n                    }\n\n                    ", "\n                    &.", "-table-small {\n                        ", "\n                    }\n\n                    &.", "-table-middle {\n                        ", "\n                    }\n\n                    ", "\n                    ", "\n                }\n\n                ", "\n\n                .", "-table-pagination {\n                    ", "\n                    ", "\n                }\n\n                &.", "-table-row-selection-highlighted {\n                    .", "-table-row-selected {\n                        td {\n                            background-color: ", ";\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, tableToken['table-color-text-secondary'], prefixCls, (0, _style.getStyle)(utils), (0, _largeSize.default)(utils), prefixCls, (0, _smallSize.default)(utils), prefixCls, (0, _mediumSize.default)(utils), (0, _tableAvatarGroup.default)(utils), (0, _ExpandIcon.default)(utils), (0, _nested.default)(utils), prefixCls, (0, _style2.styles)(utils), (0, _pagination.default)(utils), prefixCls, prefixCls, tableToken['table-color-bg-active']);
  });
};
var _default = exports.default = useStyle;