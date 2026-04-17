/**
 * @file esESCustomizedLocale.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales
import esES from 'antd/locale/es_ES';

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(esES.locale),
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
export default esESCustomizedLocale;