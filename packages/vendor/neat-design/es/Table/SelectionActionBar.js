/**
 * @file SelectionActionBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import { useConfigContext } from "../hooks";
import usePrefixCls from "../hooks/usePrefixCls";

// Components
import { Button, Divider, Space } from "../";

// Vendors
import classNames from 'classnames';
import isNil from 'lodash/isNil';

// Styles
import useStyle from "./style/SelectionActionBar";

// Types
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var SelectionActionBar = function SelectionActionBar(_ref) {
  var _configContext$locale5, _configContext$locale6;
  var selectedRowKeys = _ref.selectedRowKeys,
    totalNum = _ref.totalNum,
    loading = _ref.loading,
    action = _ref.action,
    selectedTotalNumberTip = _ref.selectedTotalNumberTip,
    onClearAll = _ref.onClearAll,
    _ref$selectAllAcrossP = _ref.selectAllAcrossPagesOptions,
    canSelectAllAcrossPages = _ref$selectAllAcrossP.canSelectAllAcrossPages,
    needSelectedTotalNumber = _ref$selectAllAcrossP.needSelectedTotalNumber,
    selectAllAcrossPages = _ref$selectAllAcrossP.selectAllAcrossPages,
    onChangeSelectAllAcrossPages = _ref$selectAllAcrossP.onChangeSelectAllAcrossPages,
    showSelectAll = _ref$selectAllAcrossP.showSelectAll;
  var prefixCls = usePrefixCls();
  var _useStyle = useStyle(),
    styles = _useStyle.styles;

  /**
   * Get neat config context
   */
  var configContext = useConfigContext();
  var dataTotalNum = useMemo(function () {
    var _ref2;
    return (_ref2 = needSelectedTotalNumber !== null && needSelectedTotalNumber !== void 0 ? needSelectedTotalNumber : totalNum) !== null && _ref2 !== void 0 ? _ref2 : 0;
  }, [needSelectedTotalNumber, totalNum]);
  var tip = useMemo(function () {
    if (!isNil(selectedTotalNumberTip)) return selectedTotalNumberTip;
    if (canSelectAllAcrossPages && selectAllAcrossPages) {
      var _configContext$locale, _configContext$locale2;
      return (_configContext$locale = (_configContext$locale2 = configContext.locale.Table).selectPopupAcrossTotalNumber) === null || _configContext$locale === void 0 ? void 0 : _configContext$locale.call(_configContext$locale2, dataTotalNum);
    } else {
      var _configContext$locale3, _configContext$locale4;
      return (_configContext$locale3 = (_configContext$locale4 = configContext.locale.Table).selectPopupTotalNumber) === null || _configContext$locale3 === void 0 ? void 0 : _configContext$locale3.call(_configContext$locale4, (selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.length) || 0);
    }
  }, [canSelectAllAcrossPages, configContext.locale.Table, dataTotalNum, selectAllAcrossPages, selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.length, selectedTotalNumberTip]);
  return _jsxs("div", {
    className: classNames(styles, "".concat(prefixCls, "-table-selection-action-bar")),
    children: [_jsxs("div", {
      className: "".concat(prefixCls, "-table-selection-action-bar-content"),
      children: [_jsx("div", {
        className: "".concat(prefixCls, "-table-selection-action-bar-text"),
        children: tip
      }), _jsxs(Space, {
        split: _jsx(Divider, {
          alignment: "vertical",
          style: {
            borderColor: '#74848F'
          }
        }),
        size: 0,
        children: [canSelectAllAcrossPages && showSelectAll && _jsx(_Fragment, {
          children: selectAllAcrossPages ? _jsx(_Fragment, {}) : _jsx(Button, {
            type: "link",
            size: "small",
            disabled: loading,
            onClick: function onClick() {
              return onChangeSelectAllAcrossPages(true);
            },
            children: (_configContext$locale5 = (_configContext$locale6 = configContext.locale.Table).selectPopupSelectAll) === null || _configContext$locale5 === void 0 ? void 0 : _configContext$locale5.call(_configContext$locale6, dataTotalNum)
          })
        }), _jsx(Button, {
          type: "link",
          size: "small",
          disabled: loading,
          onClick: onClearAll,
          children: configContext.locale.Table.selectPopupClearAll
        })]
      })]
    }), _jsx("div", {
      className: "".concat(prefixCls, "-table-selection-action-bar-actions"),
      children: action
    })]
  });
};
export default SelectionActionBar;