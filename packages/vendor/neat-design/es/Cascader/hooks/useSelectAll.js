/**
 * @file useSelectAll.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';

// Statics
import { VALUE_SPLIT } from 'rc-cascader/lib/utils/commonUtil';

// Vendors
import { toPathKeys } from 'rc-cascader/lib/utils/commonUtil';
import { formatStrategyValues } from 'rc-cascader/lib/utils/treeUtil';
import { conductCheck } from 'rc-tree/lib/utils/conductUtil';

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
  var selectAllValue = useMemo(function () {
    var _conductCheck = conductCheck(toPathKeys(optionsPaths.map(function (path) {
        return path.map(function (option) {
          return option[fieldNames.value];
        });
      })), true, getPathKeyEntities()),
      checkedKeys = _conductCheck.checkedKeys;
    var deDuplicatedKeys = formatStrategyValues(checkedKeys, getPathKeyEntities, showCheckedStrategy);
    return getValueByKeyPath(deDuplicatedKeys);
  }, [fieldNames.value, getPathKeyEntities, getValueByKeyPath, optionsPaths, showCheckedStrategy]);

  /**
   * Calculate the `showSelectAll`.
   */
  var showSelectAll = useMemo(function () {
    return typeof loadData === 'undefined';
  }, [loadData]);

  /**
   * Flatten value for comparison.
   */
  var flatValue = useMemo(function () {
    return (value === null || value === void 0 ? void 0 : value.map(function (item) {
      return item.join(VALUE_SPLIT);
    })) || [];
  }, [value]);

  /**
   * Flatten select all value for comparison.
   */
  var flatSelectAllValue = useMemo(function () {
    return (selectAllValue === null || selectAllValue === void 0 ? void 0 : selectAllValue.map(function (item) {
      return item.join(VALUE_SPLIT);
    })) || [];
  }, [selectAllValue]);

  /**
   * Calculate the result whether options are all selected.
   */
  var isSelectAll = useMemo(function () {
    return flatValue.length > 0 && flatSelectAllValue.every(function (item) {
      return flatValue.includes(item);
    });
  }, [flatSelectAllValue, flatValue]);

  /**
   * Calculate the result whether some options are selected.
   */
  var indeterminate = useMemo(function () {
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
export default useSelectAll;