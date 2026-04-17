"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _es_ES = _interopRequireDefault(require("antd/locale/es_ES"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file esESCustomizedLocale.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(_es_ES.default.locale),
  formatNumber = _Intl$NumberFormat.format;
var esESCustomizedLocale = {
  Action: {
    okText: 'Guardar',
    cancelText: 'Cancelar'
  },
  // DatePicker: {
  //     ...esES.DatePicker,
  //     lang: {
  //         ...esES.DatePicker.lang,
  //         now: 'Set Now',
  //     },
  // },
  Drawer: {
    okText: 'Guardar',
    cancelText: 'Cancelar'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "".concat(formatNumber(start), "-").concat(formatNumber(end), " de ").concat(formatNumber(total), " elementos");
    }
  },
  Table: {
    emptyTextTitle: 'Sin elementos todavía',
    emptyTextDescription: 'Intenta agregar un elemento o sincronizar datos',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "Todos los ".concat(formatNumber(number), " art\xEDculo(s) han sido seleccionados.");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "".concat(formatNumber(number), " art\xEDculo(s) seleccionado(s).");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "Seleccionar todos los ".concat(formatNumber(number), " elementos");
    },
    selectPopupUnselectAll: 'Deseleccionar todo',
    selectPopupClearAll: 'Limpiar todo'
  }
};
var _default = exports.default = esESCustomizedLocale;