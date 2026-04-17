"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _zh_CN = _interopRequireDefault(require("antd/locale/zh_CN"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file zhCNCustomizedLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(_zh_CN.default.locale),
  formatNumber = _Intl$NumberFormat.format;
var zhCNCustomizedLocale = {
  Action: {
    okText: '保存',
    cancelText: '取消'
  },
  // DatePicker: {
  //     ...zhCN.DatePicker,
  //     lang: {
  //         ...zhCN.DatePicker.lang,
  //         now: 'Set Now',
  //     },
  // },
  Drawer: {
    okText: '保存',
    cancelText: '取消'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "\u5171".concat(formatNumber(total), "\u9879\uFF0C\u5F53\u524D").concat(formatNumber(start), "-").concat(formatNumber(end));
    }
  },
  Table: {
    emptyTextTitle: '暂无内容',
    emptyTextDescription: '尝试添加内容或同步数据',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "\u6240\u6709".concat(formatNumber(number), "\u6761\u9009\u9879\u5DF2\u88AB\u9009\u62E9\u3002");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "".concat(formatNumber(number), "\u6761\u9009\u9879\u5DF2\u88AB\u9009\u62E9\u3002");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "\u9009\u62E9\u6240\u6709".concat(formatNumber(number), "\u9879");
    },
    selectPopupUnselectAll: '取消全选',
    selectPopupClearAll: '清除选中'
  }
};
var _default = exports.default = zhCNCustomizedLocale;