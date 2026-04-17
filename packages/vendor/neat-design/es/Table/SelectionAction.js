function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @file SelectionAction.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useControllableValue } from 'ahooks';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import useShowSelectAll from "./hooks/useShowSelectAll";

// Components
import SelectionActionBar from "./SelectionActionBar";
import SelectionActionPopup from "./SelectionActionPopup";

// Vendors
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import { Children, cloneElement } from 'react';

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var SelectionAction = function SelectionAction(_ref) {
  var _child$props3, _child$props$rowSelec;
  var tableSelectionPopType = _ref.tableSelectionPopType,
    tableSelectionPopProps = _ref.tableSelectionPopProps,
    selectAllAcrossPagesOptions = _ref.selectAllAcrossPagesOptions,
    loading = _ref.loading,
    selectedTotalNumberTip = _ref.selectedTotalNumberTip,
    extraSelectionAction = _ref.extraSelectionAction,
    children = _ref.children;
  var canSelectAllAcrossPages = selectAllAcrossPagesOptions.canSelectAllAcrossPages,
    onChangeSelectAllAcrossPages = selectAllAcrossPagesOptions.onChangeSelectAllAcrossPages;

  /**
   * Get the Table child node
   */
  var child = useMemo(function () {
    // console.log('children::', children);
    // console.log('Children.only(children)::', Children.only(children));
    return Children.only(children);
  }, [children]);

  // Get the total number of data
  var dataTotal = useMemo(function () {
    var _child$props;
    if (typeof (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.pagination) === null || _child$props === void 0 ? void 0 : _child$props.total) === 'number') {
      var _child$props2;
      return child === null || child === void 0 || (_child$props2 = child.props) === null || _child$props2 === void 0 || (_child$props2 = _child$props2.pagination) === null || _child$props2 === void 0 ? void 0 : _child$props2.total;
    } else {
      return 0;
    }
  }, [child === null || child === void 0 || (_child$props3 = child.props) === null || _child$props3 === void 0 || (_child$props3 = _child$props3.pagination) === null || _child$props3 === void 0 ? void 0 : _child$props3.total]);
  var _useControllableValue = useControllableValue((_child$props$rowSelec = child === null || child === void 0 ? void 0 : child.props.rowSelection) !== null && _child$props$rowSelec !== void 0 ? _child$props$rowSelec : {}, {
      defaultValue: [],
      valuePropName: 'selectedRowKeys'
    }),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    selectedRowKeys = _useControllableValue2[0],
    handleRowSelectionChange = _useControllableValue2[1];

  // Maybe user want to control "open"
  var _useControllableValue3 = useControllableValue(_objectSpread({}, tableSelectionPopProps), {
      valuePropName: 'open',
      trigger: 'onOpenChange',
      defaultValue: false
    }),
    _useControllableValue4 = _slicedToArray(_useControllableValue3, 2),
    open = _useControllableValue4[0],
    onOpenChange = _useControllableValue4[1];

  // Listen to selectedRowKeys ，if last value != current value, check whether need to open the popup。 start
  // When selected cross page all selected, it don't notify external components ,becuase the change in selectedRowKeys are based on the dataSource, not onChange event
  var memoSelectedRowKeysRef = useRef([]);
  var handleOpenChange = useMemo(function () {
    return debounce(function (selectedRowKeys) {
      if (!isEqual(selectedRowKeys, memoSelectedRowKeysRef.current)) {
        onOpenChange((selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.length) > 0);
        memoSelectedRowKeysRef.current = selectedRowKeys ? _toConsumableArray(selectedRowKeys) : selectedRowKeys;
      }
    }, 200, {
      leading: false,
      trailing: true
    });
  }, [onOpenChange]);
  useEffect(function () {
    handleOpenChange(selectedRowKeys);
  }, [selectedRowKeys, handleOpenChange]);
  // Listen to selectedRowKeys ，if last value != current value, check whether need to open the popup。 start

  /**
   * Clear all selections
   */
  var handleClearAll = useCallback(function () {
    if (canSelectAllAcrossPages) {
      onChangeSelectAllAcrossPages(false);
    }
    handleRowSelectionChange([], [], {
      type: 'all'
    });
  }, [canSelectAllAcrossPages, handleRowSelectionChange, onChangeSelectAllAcrossPages]);
  var _useShowSelectAll = useShowSelectAll(selectedRowKeys),
    showSelectAll = _useShowSelectAll.showSelectAll,
    handleSelectAllChange = _useShowSelectAll.handleSelectAllChange;

  // Listen to onSelectAll event, If selectAll is selected, show cross page all select button
  var handleTableSelectAllChange = function handleTableSelectAllChange() {
    var _child$props4, _child$props4$onSelec;
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }
    child === null || child === void 0 || (_child$props4 = child.props) === null || _child$props4 === void 0 || (_child$props4 = _child$props4.rowSelection) === null || _child$props4 === void 0 || (_child$props4$onSelec = _child$props4.onSelectAll) === null || _child$props4$onSelec === void 0 || _child$props4$onSelec.call.apply(_child$props4$onSelec, [_child$props4].concat(rest));
    handleSelectAllChange();
  };
  return _jsx(SelectionActionPopup, {
    tableSelectionPopType: tableSelectionPopType,
    tableSelectionPopProps: _objectSpread(_objectSpread({}, tableSelectionPopProps), {}, {
      onOpenChange: onOpenChange,
      open: open
    }),
    content: _jsx(SelectionActionBar, {
      selectedRowKeys: selectedRowKeys,
      totalNum: dataTotal,
      loading: loading,
      action: extraSelectionAction,
      selectedTotalNumberTip: selectedTotalNumberTip,
      onClearAll: handleClearAll,
      selectAllAcrossPagesOptions: _objectSpread(_objectSpread({}, selectAllAcrossPagesOptions), {}, {
        showSelectAll: showSelectAll
      })
    }),
    children: /*#__PURE__*/cloneElement(child, {
      rowSelection: isNil(child.props.rowSelection) ? child.props.rowSelection : _objectSpread(_objectSpread({}, child.props.rowSelection), {}, {
        selectedRowKeys: selectedRowKeys,
        onChange: handleRowSelectionChange,
        onSelectAll: handleTableSelectAllChange
      })
    })
  });
};
export default SelectionAction;