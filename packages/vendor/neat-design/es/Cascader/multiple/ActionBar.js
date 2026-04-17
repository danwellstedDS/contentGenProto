/**
 * @file ActionBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { usePrefixCls } from "../../hooks";

// Components
import Action from "../../Action";
import SelectAll from "./SelectAll";

// Vendors
import classNames from 'classnames';

// Styles
import useStyle from "../style/CascaderDropdownActionBar";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var ActionBar = function ActionBar(_ref) {
  var loading = _ref.loading,
    select = _ref.select,
    changeOnSelect = _ref.changeOnSelect,
    onSelectAll = _ref.onSelectAll,
    onDeselectAll = _ref.onDeselectAll,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel;
  var prefixCls = usePrefixCls();
  var _useStyle = useStyle(),
    styles = _useStyle.styles;
  return _jsx(Action, {
    className: classNames(styles, "".concat(prefixCls, "-cascader-dropdown-action-bar")),
    info: select !== null && select !== void 0 && select.showSelectAll ? _jsx(SelectAll, {
      disabled: loading || (select === null || select === void 0 ? void 0 : select.disabled),
      checked: select === null || select === void 0 ? void 0 : select.selectAll,
      indeterminate: select === null || select === void 0 ? void 0 : select.indeterminate,
      onSelectAll: onSelectAll,
      onDeselectAll: onDeselectAll
    }) : _jsx("span", {}),
    okButton: !changeOnSelect,
    okText: "OK",
    okType: "primary",
    cancelButton: !changeOnSelect,
    cancelText: "Cancel",
    cancelType: "tertiary",
    okButtonProps: {
      size: 'small',
      disabled: loading
    },
    cancelButtonProps: {
      size: 'small',
      disabled: loading
    },
    onOk: onOk,
    onCancel: onCancel
  });
};
export default ActionBar;