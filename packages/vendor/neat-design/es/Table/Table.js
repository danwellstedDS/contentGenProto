function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "dataSource", "expandable", "pagination", "locale", "loading", "size", "rowSelection", "rowSelectionHighlighted", "extraSelectionAction", "tableSelectionPopType", "tableSelectionPopProps", "selectAllAcrossPagesOptions", "selectedTotalNumberTip"],
  _excluded2 = ["rowSelection"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Table.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import usePaginationProps from "../Pagination/usePaginationProps";
import useLoading from "./hooks/useLoading";
import useRowSelection from "./hooks/useRowSelection";

// Contexts
import TableSizeContext from "./TableSizeContext";

// Components
import EmptyText from "./EmptyText";
import InternalTable from "./InternalTable";
import SelectionAction from "./SelectionAction";

// Vendors
import classNames from 'classnames';
import { forwardRef } from 'react';
import expandIcon from "./ExpandIcon";

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Table = function Table(_ref, ref) {
  var _expandable$expandIco;
  var className = _ref.className,
    dataSource = _ref.dataSource,
    expandable = _ref.expandable,
    pagination = _ref.pagination,
    locale = _ref.locale,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    rowSelection = _ref.rowSelection,
    _ref$rowSelectionHigh = _ref.rowSelectionHighlighted,
    rowSelectionHighlighted = _ref$rowSelectionHigh === void 0 ? false : _ref$rowSelectionHigh,
    extraSelectionAction = _ref.extraSelectionAction,
    tableSelectionPopType = _ref.tableSelectionPopType,
    tableSelectionPopProps = _ref.tableSelectionPopProps,
    selectAllAcrossPagesOptions = _ref.selectAllAcrossPagesOptions,
    selectedTotalNumberTip = _ref.selectedTotalNumberTip,
    otherTableProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Get style
   */
  var _useStyle = useStyle(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;

  /**
   * Handle expand
   */
  var mergedExpandable = _objectSpread(_objectSpread({}, expandable), {}, {
    expandIcon: (_expandable$expandIco = expandable === null || expandable === void 0 ? void 0 : expandable.expandIcon) !== null && _expandable$expandIco !== void 0 ? _expandable$expandIco : expandIcon
  });

  /**
   * Get size props for ant table
   */
  var computedSize = useMemo(function () {
    switch (size) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'middle';
    }
  }, [size]);

  /**
   * Get mergeProps from Pagination
   */
  var _usePaginationProps = usePaginationProps(),
    mergePaginationProps = _usePaginationProps.mergeProps;

  /**
   * Calculate pagination size
   */
  var paginationSize = useMemo(function () {
    switch (size) {
      case 'small':
        return 'small';
      default:
        return 'default';
    }
  }, [size]);

  /**
   * Calculate pagination using pagination hook
   */
  var computedPagination = useMemo(function () {
    if (pagination === false) {
      return false;
    }
    return _objectSpread(_objectSpread({}, mergePaginationProps(_objectSpread(_objectSpread({}, pagination), {}, {
      size: paginationSize
    }))), {}, {
      position: pagination === null || pagination === void 0 ? void 0 : pagination.position
    });
  }, [mergePaginationProps, pagination, paginationSize]);

  /**
   * Handle rowSelection
   */
  var _useRowSelection = useRowSelection(_objectSpread(_objectSpread({}, selectAllAcrossPagesOptions), {}, {
      rowSelection: rowSelection,
      dataSource: dataSource,
      rowKey: otherTableProps === null || otherTableProps === void 0 ? void 0 : otherTableProps.rowKey
    })),
    mergeRowSelection = _useRowSelection.rowSelection,
    newSelectAllAcrossPagesOptions = _objectWithoutProperties(_useRowSelection, _excluded2);

  /**
   * Handle loading
   */
  var _useLoading = useLoading({
      loading: loading
    }),
    loadingConfig = _useLoading.loadingConfig;
  var tableLoading = useMemo(function () {
    return loadingConfig;
  }, [loadingConfig]);

  /**
   * Default locale config
   */
  var mergedLocale = useMemo(function () {
    return _objectSpread(_objectSpread({}, locale), {}, {
      emptyText: _jsx(EmptyText, {
        loading: loading,
        render: locale === null || locale === void 0 ? void 0 : locale.emptyText
      })
    });
  }, [loading, locale]);
  return _jsx(TableSizeContext.Provider, {
    value: {
      size: size
    },
    children: _jsx(SelectionAction, {
      tableSelectionPopType: tableSelectionPopType,
      tableSelectionPopProps: tableSelectionPopProps,
      selectAllAcrossPagesOptions: newSelectAllAcrossPagesOptions,
      loading: loadingConfig.spinning,
      selectedTotalNumberTip: selectedTotalNumberTip,
      extraSelectionAction: extraSelectionAction,
      children: _jsx(InternalTable, _objectSpread(_objectSpread({}, otherTableProps), {}, {
        className: classNames(_defineProperty({}, "".concat(prefixCls, "-table-row-selection-highlighted"), rowSelectionHighlighted), styles, className),
        size: computedSize,
        dataSource: dataSource,
        expandable: mergedExpandable,
        rowSelection: mergeRowSelection,
        pagination: computedPagination,
        locale: mergedLocale,
        loading: tableLoading,
        ref: ref
      }))
    })
  });
};
export default /*#__PURE__*/forwardRef(Table);