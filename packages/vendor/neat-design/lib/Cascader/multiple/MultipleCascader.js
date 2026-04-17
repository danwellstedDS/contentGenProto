"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ahooks = require("ahooks");
var _useOptions3 = _interopRequireDefault(require("rc-cascader/lib/hooks/useOptions"));
var _react = require("react");
var _useSearchConfig3 = _interopRequireDefault(require("../hooks/useSearchConfig"));
var _useSelectAll2 = _interopRequireDefault(require("../hooks/useSelectAll"));
var _antd = require("antd");
var _ActionBar = _interopRequireDefault(require("./ActionBar"));
var _commonUtil = require("rc-cascader/lib/utils/commonUtil");
var _treeUtil = require("rc-cascader/lib/utils/treeUtil");
var _Util = require("../Util");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["open", "options", "loadData", "fieldNames", "value", "loading", "autoClearSearchValue", "showCheckedStrategy", "popupRender", "showSearch", "changeOnSelect", "onOpenChange", "onChange", "onBlur", "onOk", "onCancel"];
/**
 * @file MultipleCascader.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
// Hooks
// Components
// Vendors
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MultipleCascader = function MultipleCascader(_ref) {
  var open = _ref.open,
    options = _ref.options,
    loadData = _ref.loadData,
    fieldNames = _ref.fieldNames,
    value = _ref.value,
    loading = _ref.loading,
    autoClearSearchValue = _ref.autoClearSearchValue,
    _ref$showCheckedStrat = _ref.showCheckedStrategy,
    showCheckedStrategy = _ref$showCheckedStrat === void 0 ? _antd.Cascader.SHOW_PARENT : _ref$showCheckedStrat,
    popupRender = _ref.popupRender,
    showSearch = _ref.showSearch,
    changeOnSelect = _ref.changeOnSelect,
    onOpenChange = _ref.onOpenChange,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * The Cascader value reference for reseting value when "Cancel" clicked.
   */
  var resetValueRef = (0, _react.useRef)(value);

  /**
   * Cascader value state.
   */
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    cascaderValue = _useState2[0],
    setCascaderValue = _useState2[1];
  (0, _react.useEffect)(function () {
    setCascaderValue(value);
  }, [value]);

  /**
   * Cascader open state.
   */
  var _useState3 = (0, _react.useState)(open),
    _useState4 = _slicedToArray(_useState3, 2),
    cascaderOpen = _useState4[0],
    setCascaderOpen = _useState4[1];
  (0, _react.useEffect)(function () {
    setCascaderOpen(open);
  }, [open]);

  /**
   * Cascader searchValue state.
   */
  var _useControllableValue = (0, _ahooks.useControllableValue)(restProps, {
      valuePropName: 'searchValue',
      trigger: 'onSearch'
    }),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    searchValue = _useControllableValue2[0],
    onSearch = _useControllableValue2[1];

  /**
   * Merge fieldNames.
   */
  var mergedFieldNames = (0, _react.useMemo)(function () {
    return (0, _commonUtil.fillFieldNames)(fieldNames);
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [JSON.stringify(fieldNames)]
  /* eslint-enable react-hooks/exhaustive-deps */);

  /**
   * Merge options by fieldNames.
   */
  var _useOptions = (0, _useOptions3.default)(mergedFieldNames, options),
    _useOptions2 = _slicedToArray(_useOptions, 3),
    mergedOptions = _useOptions2[0],
    getPathKeyEntities = _useOptions2[1],
    getValueByKeyPath = _useOptions2[2];

  /**
   * Calculate the options by Cascader value.
   */
  var getValueOptions = (0, _react.useCallback)(function (value) {
    return (value === null || value === void 0 ? void 0 : value.map(function (valueCells) {
      return (0, _treeUtil.toPathOptions)(valueCells, mergedOptions, mergedFieldNames).map(function (valueOpt) {
        return valueOpt.option;
      });
    })) || [];
  }, [mergedFieldNames, mergedOptions]);

  /**
   * Update Cascader value.
   */
  var updateCascaderValue = (0, _react.useCallback)(function (nextCascaderValue, selectedOptions) {
    setCascaderValue(nextCascaderValue);
    changeOnSelect && (onChange === null || onChange === void 0 ? void 0 : onChange(nextCascaderValue, selectedOptions || getValueOptions(nextCascaderValue)));
  }, [getValueOptions, onChange, changeOnSelect]);

  /**
   * Handle Cascader blur event
   */
  var handleBlur = (0, _react.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onBlur === null || onBlur === void 0 || onBlur.apply(void 0, args);

    // If "autoClearSearchValue" is true, clear search value after blurring.
    setTimeout(function () {
      if (autoClearSearchValue !== false) {
        onSearch('');
      }
    }, 300);
  }, [onBlur, autoClearSearchValue, onSearch]);

  /**
   * Merge showSearch.
   */
  var _useSearchConfig = (0, _useSearchConfig3.default)(showSearch),
    _useSearchConfig2 = _slicedToArray(_useSearchConfig, 2),
    mergedShowSearch = _useSearchConfig2[0],
    searchConfig = _useSearchConfig2[1];

  /**
   * Calculate filtered options paths.
   */
  var getFilteredPaths = (0, _react.useCallback)(function () {
    var result = [];
    if (!searchValue || !mergedShowSearch) {
      mergedOptions.forEach(function (optionRoot) {
        (0, _Util.preOrderTraverse)(optionRoot, mergedFieldNames, function (option, _parentNode, _depth, path) {
          if (!option.disabled && !option.disableCheckbox) {
            result.push(path);
          }
        });
      });
    } else {
      mergedOptions.forEach(function (optionRoot) {
        (0, _Util.preOrderTraverse)(optionRoot, mergedFieldNames, function (option, _parentNode, _depth, path) {
          if (!option.disabled && !option.disableCheckbox && searchConfig.filter(searchValue, path, mergedFieldNames)) {
            result.push(path);
          }
        });
      });
    }
    return result;
  }, [searchValue, mergedShowSearch, mergedOptions, mergedFieldNames, searchConfig]);

  /**
   * Get variables for select all.
   */
  var _useSelectAll = (0, _useSelectAll2.default)({
      loadData: loadData,
      optionsPaths: getFilteredPaths(),
      fieldNames: mergedFieldNames,
      value: cascaderValue,
      showCheckedStrategy: showCheckedStrategy,
      getPathKeyEntities: getPathKeyEntities,
      getValueByKeyPath: getValueByKeyPath
    }),
    showSelectAll = _useSelectAll.showSelectAll,
    isSelectAll = _useSelectAll.isSelectAll,
    indeterminate = _useSelectAll.indeterminate,
    selectAllValue = _useSelectAll.selectAllValue;

  /**
   * Do select all.
   */
  var handleSelectAll = (0, _react.useCallback)(function () {
    updateCascaderValue(selectAllValue);
  }, [selectAllValue, updateCascaderValue]);

  /**
   * Do deselect all.
   */
  var handleDeselectAll = (0, _react.useCallback)(function () {
    updateCascaderValue([]);
  }, [updateCascaderValue]);

  /**
   * Handle "onOpenChange" event.
   */
  var handleOpenChange = (0, _react.useCallback)(function (nextOpen) {
    setCascaderOpen(nextOpen);
    onOpenChange === null || onOpenChange === void 0 || onOpenChange(nextOpen);
    if (!changeOnSelect) {
      if (nextOpen) {
        // Save value when dropdown opening.
        resetValueRef.current = cascaderValue;
      } else {
        // Reset value when dropdown blurring close.
        updateCascaderValue(resetValueRef.current);
      }
    }
  }, [onOpenChange, changeOnSelect, cascaderValue, updateCascaderValue]);

  /**
   * Handle value changed event.
   */
  var handleChange = (0, _react.useCallback)(function (value, selectedOptions) {
    updateCascaderValue(value, selectedOptions);
    setTimeout(function () {
      if (autoClearSearchValue !== false) {
        onSearch('');
      }
    }, 300);
  }, [autoClearSearchValue, onSearch, updateCascaderValue]);

  /**
   * Handle "OK" button clicked event.
   */
  var handleOk = (0, _react.useCallback)(function () {
    setCascaderOpen(false);
    onOpenChange === null || onOpenChange === void 0 || onOpenChange(false);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    onOk === null || onOk === void 0 || onOk.apply(void 0, args);
    !changeOnSelect && (onChange === null || onChange === void 0 ? void 0 : onChange(cascaderValue, getValueOptions(cascaderValue)));
  }, [onOpenChange, onOk, changeOnSelect, onChange, cascaderValue, getValueOptions]);

  /**
   * Handle "Cancel" button clicked event.
   */
  var handleCancel = (0, _react.useCallback)(function () {
    // Reset value when cancel button clicked.
    updateCascaderValue(resetValueRef.current);

    // Hide dropdown.
    setCascaderOpen(false);
    onOpenChange === null || onOpenChange === void 0 || onOpenChange(false);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    onCancel === null || onCancel === void 0 || onCancel.apply(void 0, args);
  }, [onCancel, onOpenChange, updateCascaderValue]);

  /**
   * Merge popupRender.
   */
  var mergedDropdownRender = (0, _react.useCallback)(function (menus) {
    if (popupRender) {
      return popupRender(menus);
    }
    var filteredPaths = getFilteredPaths();
    return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [menus, (0, _jsxRuntime.jsx)(_ActionBar.default, {
        loading: loading,
        select: {
          showSelectAll: showSelectAll,
          selectAll: isSelectAll,
          indeterminate: indeterminate,
          disabled: !filteredPaths || filteredPaths.length < 1
        },
        changeOnSelect: changeOnSelect,
        onSelectAll: handleSelectAll,
        onDeselectAll: handleDeselectAll,
        onOk: handleOk,
        onCancel: handleCancel
      })]
    });
  }, [popupRender, getFilteredPaths, loading, showSelectAll, isSelectAll, indeterminate, changeOnSelect, handleSelectAll, handleDeselectAll, handleOk, handleCancel]);
  return (0, _jsxRuntime.jsx)(_antd.Cascader, _objectSpread(_objectSpread({}, restProps), {}, {
    loadData: loadData,
    open: cascaderOpen,
    options: mergedOptions,
    fieldNames: fieldNames,
    value: cascaderValue,
    loading: loading,
    popupRender: mergedDropdownRender,
    autoClearSearchValue: autoClearSearchValue,
    showCheckedStrategy: showCheckedStrategy,
    showSearch: showSearch,
    onOpenChange: handleOpenChange,
    onChange: handleChange,
    onBlur: handleBlur,
    onSearch: onSearch
  }));
};
var _default = exports.default = MultipleCascader;