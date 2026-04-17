"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _multiple = _interopRequireDefault(require("./multiple"));
var _size = _interopRequireDefault(require("./size"));
var _templateObject;
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-cascader {\n                ", "\n                ", "\n                width: 480px;\n                max-width: 100%;\n\n                .", "-select-selector {\n                    .", "-select-selection-item {\n                        overflow: hidden;\n                        text-overflow: ellipsis;\n\n                        .", "-select-item-icon {\n                            height: 16px;\n                            margin-right: 12px;\n                            color: #74848f;\n                            font-size: 16px;\n                            line-height: 1;\n                        }\n                    }\n                }\n\n                // start \u540C\u65F6\u51FA\u73B0clear\u3001arrow \u8F93\u5165\u533A\u57DF\u9700\u8981\u7F29\u5C0F \u907F\u514D\u91CD\u53E0\n                .", "-select-clear {\n                    inset-inline-end: 36px;\n                    right: 36px;\n                }\n\n                &.", "-select-single.", "-select-show-arrow.", "-select-allow-clear\n                    .", "-select-selection-item,\n                    &.", "-select-single.", "-select-show-arrow\n                    .", "-select-selection-placeholder {\n                    padding-inline-end: 48px;\n                }\n\n                &.", "-select-multiple.", "-select-show-arrow.", "-select-allow-clear\n                    .", "-select-selector,\n                    &.", "-select-multiple.", "-select-allow-clear\n                    .", "-select-selector {\n                    padding-inline-end: 58px;\n                }\n                // end \u51FA\u73B0clear \u8F93\u5165\u533A\u57DF\u9700\u8981\u7F29\u5C0F \u907F\u514D\u91CD\u53E0\n\n                .", "-select-arrow {\n                    transition: all 0.3s;\n                    color: #74848f;\n                }\n\n                &.", "-select-open {\n                    .", "-select-arrow {\n                        transform: rotate(180deg);\n                    }\n                }\n\n                &.", "-select-multiple {\n                    .", "-select-selector {\n                        .", "-select-selection-overflow {\n                            .", "-select-selection-overflow-item {\n                                .", "-select-selection-item {\n                                    .", "-select-selection-item-content {\n                                        color: #41484c;\n                                    }\n                                }\n\n                                &.", "-select-selection-overflow-item-suffix {\n                                    .", "-select-selection-search {\n                                        align-items: center;\n                                        margin-left: 0;\n\n                                        .", "-select-selection-search-input {\n                                            height: 20px;\n                                            line-height: 20px;\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n\n                &.", "-select-disabled {\n                    .", "-select-arrow {\n                        color: #abb8c2;\n                    }\n                }\n            }\n        "])), prefixCls, (0, _size.default)(utils), (0, _multiple.default)(utils), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;