"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ru_RU = _interopRequireDefault(require("antd/locale/ru_RU"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file ruRUCustomizedLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(_ru_RU.default.locale),
  formatNumber = _Intl$NumberFormat.format;
var ruRUCustomizedLocale = {
  Action: {
    okText: 'Сохранить',
    cancelText: 'Отменить'
  },
  Drawer: {
    okText: 'Сохранить',
    cancelText: 'Отменить'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "".concat(formatNumber(start), "-").concat(formatNumber(end), " \u0438\u0437 ").concat(formatNumber(total), " \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432");
    }
  },
  Table: {
    emptyTextTitle: 'Элементов пока нет',
    emptyTextDescription: 'Попробуйте добавить элемент или синхронизировать данные',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "\u0412\u0441\u0435 ".concat(formatNumber(number), " \u044D\u043B\u0435\u043C\u0435\u043D\u0442(\u043E\u0432) \u0432\u044B\u0431\u0440\u0430\u043D\u044B.");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(formatNumber(number), " \u044D\u043B\u0435\u043C\u0435\u043D\u0442(\u043E\u0432)");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 ".concat(formatNumber(number), " \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430");
    },
    selectPopupUnselectAll: 'Снять выделение со всех',
    selectPopupClearAll: 'Очистить все'
  }
};
var _default = exports.default = ruRUCustomizedLocale;