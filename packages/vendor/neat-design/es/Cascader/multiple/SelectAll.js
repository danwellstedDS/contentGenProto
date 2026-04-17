/**
 * @file useSelectAll.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useCallback } from 'react';

// Components
import Checkbox from "../../Checkbox";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var SelectAll = function SelectAll(_ref) {
  var disabled = _ref.disabled,
    checked = _ref.checked,
    indeterminate = _ref.indeterminate,
    onSelectAll = _ref.onSelectAll,
    onDeselectAll = _ref.onDeselectAll;
  /**
   * Handle select all checkbox changed
   */
  var handleSelectAllChanged = useCallback(function (e) {
    var checked = e.target.checked;
    if (checked) {
      onSelectAll === null || onSelectAll === void 0 || onSelectAll();
    } else {
      onDeselectAll === null || onDeselectAll === void 0 || onDeselectAll();
    }
  }, [onSelectAll, onDeselectAll]);
  return _jsx(Checkbox, {
    disabled: disabled,
    checked: checked,
    indeterminate: indeterminate,
    onChange: handleSelectAllChanged,
    children: "Select All"
  });
};
export default SelectAll;