"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _commonUtil = require("rc-cascader/lib/utils/commonUtil");
var _treeUtil = require("rc-cascader/lib/utils/treeUtil");
var _conductUtil = require("rc-tree/lib/utils/conductUtil");
/**
 * @file useSelectAll.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Statics

// Vendors

// Types

var useSelectAll = function useSelectAll(_ref) {
  var loadData = _ref.loadData,
    _ref$optionsPaths = _ref.optionsPaths,
    optionsPaths = _ref$optionsPaths === void 0 ? [] : _ref$optionsPaths,
    value = _ref.value,
    fieldNames = _ref.fieldNames,
    showCheckedStrategy = _ref.showCheckedStrategy,
    getPathKeyEntities = _ref.getPathKeyEntities,
    getValueByKeyPath = _ref.getValueByKeyPath;
  /**
   * Get the select all value by optionsPaths.
   */
  var selectAllValue = (0, _react.useMemo)(function () {
    var _conductCheck = (0, _conductUtil.conductCheck)((0, _commonUtil.toPathKeys)(optionsPaths.map(function (path) {
        return path.map(function (option) {
          return option[fieldNames.value];
        });
      })), true, getPathKeyEntities()),
      checkedKeys = _conductCheck.checkedKeys;
    var deDuplicatedKeys = (0, _treeUtil.formatStrategyValues)(checkedKeys, getPathKeyEntities, showCheckedStrategy);
    return getValueByKeyPath(deDuplicatedKeys);
  }, [fieldNames.value, getPathKeyEntities, getValueByKeyPath, optionsPaths, showCheckedStrategy]);

  /**
   * Calculate the `showSelectAll`.
   */
  var showSelectAll = (0, _react.useMemo)(function () {
    return typeof loadData === 'undefined';
  }, [loadData]);

  /**
   * Flatten value for comparison.
   */
  var flatValue = (0, _react.useMemo)(function () {
    return (value === null || value === void 0 ? void 0 : value.map(function (item) {
      return item.join(_commonUtil.VALUE_SPLIT);
    })) || [];
  }, [value]);

  /**
   * Flatten select all value for comparison.
   */
  var flatSelectAllValue = (0, _react.useMemo)(function () {
    return (selectAllValue === null || selectAllValue === void 0 ? void 0 : selectAllValue.map(function (item) {
      return item.join(_commonUtil.VALUE_SPLIT);
    })) || [];
  }, [selectAllValue]);

  /**
   * Calculate the result whether options are all selected.
   */
  var isSelectAll = (0, _react.useMemo)(function () {
    return flatValue.length > 0 && flatSelectAllValue.every(function (item) {
      return flatValue.includes(item);
    });
  }, [flatSelectAllValue, flatValue]);

  /**
   * Calculate the result whether some options are selected.
   */
  var indeterminate = (0, _react.useMemo)(function () {
    return flatValue.length > 0 && !isSelectAll && flatSelectAllValue.some(function (item) {
      return flatValue.includes(item);
    });
  }, [flatSelectAllValue, flatValue, isSelectAll]);
  return {
    showSelectAll: showSelectAll,
    isSelectAll: isSelectAll,
    indeterminate: indeterminate,
    selectAllValue: selectAllValue
  };
};
var _default = exports.default = useSelectAll;