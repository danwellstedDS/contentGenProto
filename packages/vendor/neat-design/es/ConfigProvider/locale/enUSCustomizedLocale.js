/**
 * @file enUSCustomizedLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales
import enUS from 'antd/locale/en_US';

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(enUS.locale),
  formatNumber = _Intl$NumberFormat.format;
var enUSCustomizedLocale = {
  Action: {
    okText: 'Save',
    cancelText: 'Cancel'
  },
  // DatePicker: {
  //     ...enUS.DatePicker,
  //     lang: {
  //         ...enUS.DatePicker.lang,
  //         now: 'Set Now',
  //     },
  // },
  Drawer: {
    okText: 'Save',
    cancelText: 'Cancel'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "".concat(formatNumber(start), "-").concat(formatNumber(end), " of ").concat(formatNumber(total), " items");
    }
  },
  Table: {
    emptyTextTitle: 'No items yet',
    emptyTextDescription: 'Try add item or sync data',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "All ".concat(formatNumber(number), " item(s) have been selected.");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "".concat(formatNumber(number), " item(s) selected");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "Select All ".concat(formatNumber(number), " items");
    },
    selectPopupUnselectAll: 'Unselect All',
    selectPopupClearAll: 'Clear All'
  }
};
export default enUSCustomizedLocale;