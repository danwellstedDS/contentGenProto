/**
 * @file frFRCustomizedLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales
import frFR from 'antd/locale/fr_FR';

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(frFR.locale),
  formatNumber = _Intl$NumberFormat.format;
var frFRCustomizedLocale = {
  Action: {
    okText: 'Enregistrer',
    cancelText: 'Annuler'
  },
  Drawer: {
    okText: 'Enregistrer',
    cancelText: 'Annuler'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "".concat(formatNumber(start), "-").concat(formatNumber(end), " sur ").concat(formatNumber(total), " \xE9l\xE9ments");
    }
  },
  Table: {
    emptyTextTitle: 'Aucun élément pour le moment',
    emptyTextDescription: 'Essayez d’ajouter un élément ou de synchroniser les données',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "Tous les ".concat(formatNumber(number), " \xE9l\xE9ment(s) ont \xE9t\xE9 s\xE9lectionn\xE9s.");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "".concat(formatNumber(number), " \xE9l\xE9ment(s) s\xE9lectionn\xE9(s)'");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "S\xE9lectionner tous les ".concat(formatNumber(number), " \xE9l\xE9ments");
    },
    selectPopupUnselectAll: 'Désélectionner tout',
    selectPopupClearAll: 'Tout effacer'
  }
};
export default frFRCustomizedLocale;