/**
 * @file ptPTCustomizedLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Locales
import ptPT from 'antd/locale/pt_PT';

// Types

var _Intl$NumberFormat = new Intl.NumberFormat(ptPT.locale),
  formatNumber = _Intl$NumberFormat.format;
var ptPTCustomizedLocale = {
  Action: {
    okText: 'Salvar',
    cancelText: 'Cancelar'
  },
  Drawer: {
    okText: 'Salvar',
    cancelText: 'Cancelar'
  },
  Pagination: {
    showTotal: function showTotal(total, start, end) {
      return "".concat(formatNumber(start), "-").concat(formatNumber(end), " de ").concat(formatNumber(total), " itens");
    }
  },
  Table: {
    emptyTextTitle: 'Ainda não há itens',
    emptyTextDescription: 'Tente adicionar um item ou sincronizar os dados',
    selectPopupAcrossTotalNumber: function selectPopupAcrossTotalNumber(number) {
      return "Todos os ".concat(formatNumber(number), " item(ns) foram selecionados.");
    },
    selectPopupTotalNumber: function selectPopupTotalNumber(number) {
      return "".concat(formatNumber(number), " item(ns) selecionado(s)");
    },
    selectPopupSelectAll: function selectPopupSelectAll(number) {
      return "Selecionar todos os ".concat(formatNumber(number), " itens");
    },
    selectPopupUnselectAll: 'Desmarcar todos',
    selectPopupClearAll: 'Limpar tudo'
  }
};
export default ptPTCustomizedLocale;