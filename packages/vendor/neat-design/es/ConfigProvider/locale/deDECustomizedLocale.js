/**
 * @file deDECustomizedLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales
import deDE from 'antd/locale/de_DE';

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(deDE.locale),
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
export default deDECustomizedLocale;