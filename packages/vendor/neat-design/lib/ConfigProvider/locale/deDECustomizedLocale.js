"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _de_DE = _interopRequireDefault(require("antd/locale/de_DE"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file deDECustomizedLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(_de_DE.default.locale),
  formatNumber = _Intl$NumberFormat.format;
var deDECustomizedLocale = {
  Action: {
    okText: 'Speichern',
    cancelText: 'Abbrechen'
  },
  Drawer: {
    okText: 'Speichern',
    cancelText: 'Abbrechen'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "".concat(formatNumber(start), "-").concat(formatNumber(end), " von ").concat(formatNumber(total), " Elementen");
    }
  },
  Table: {
    emptyTextTitle: 'Noch keine Elemente',
    emptyTextDescription: 'Versuchen Sie, ein Element hinzuzufügen oder Daten zu synchronisieren',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "Alle ".concat(formatNumber(number), " Element(e) wurden ausgew\xE4hlt.");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "".concat(formatNumber(number), " Element(e) ausgew\xE4hlt");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "Alle ".concat(formatNumber(number), " Elemente ausw\xE4hlen");
    },
    selectPopupUnselectAll: 'Alle abwählen',
    selectPopupClearAll: 'Alles löschen'
  }
};
var _default = exports.default = deDECustomizedLocale;