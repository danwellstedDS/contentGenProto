"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ja_JP = _interopRequireDefault(require("antd/locale/ja_JP"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file jaJPCustomizedLocale.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(_ja_JP.default.locale),
  formatNumber = _Intl$NumberFormat.format;
var jaJPCustomizedLocale = {
  Action: {
    okText: '保存',
    cancelText: 'キャンセル'
  },
  // DatePicker: {
  //     ...jaJP.DatePicker,
  //     lang: {
  //         ...jaJP.DatePicker.lang,
  //         now: 'Set Now',
  //     },
  // },
  Drawer: {
    okText: '保存',
    cancelText: 'キャンセル'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "\u5168".concat(formatNumber(total), "\u4EF6\u4E2D").concat(formatNumber(start), "-").concat(formatNumber(end), "\u4EF6");
    }
  },
  Table: {
    emptyTextTitle: 'アイテムはまだありません',
    emptyTextDescription: 'アイテムを追加するか、データを同期してみてください',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "\u3059\u3079\u3066\u306E".concat(formatNumber(number), "\u500B\u306E\u30A2\u30A4\u30C6\u30E0\u304C\u9078\u629E\u3055\u308C\u307E\u3057\u305F\u3002");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "".concat(formatNumber(number), "\u500B\u306E\u30A2\u30A4\u30C6\u30E0\u304C\u9078\u629E\u3055\u308C\u307E\u3057\u305F\u3002");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "\u3059\u3079\u3066\u306E".concat(formatNumber(number), "\u30A2\u30A4\u30C6\u30E0\u3092\u9078\u629E");
    },
    selectPopupUnselectAll: 'すべて選択解除',
    selectPopupClearAll: 'すべてクリア'
  }
};
var _default = exports.default = jaJPCustomizedLocale;