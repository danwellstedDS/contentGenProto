var _excluded = ["children", "className", "label", "required", "rules", "tooltip", "help", "trigger", "onFocus", "onBlur"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file FormItem.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Contexts
import FormContext from "../FormContext";

// Components
import { Form as AntForm } from 'antd';
import Label from "../../Label";
import { ElementChildrenWrapper, FunctionChildrenWrapper } from "../FormItemStatus";

// Vendors
import classnames from 'classnames';
import omit from 'lodash/omit';

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
function FormItem(props) {
  var _useStyle = useStyle(),
    styles = _useStyle.styles,
    prefixCls = _useStyle.prefixCls;
  var _omit = omit(props, ['labelAlign', 'labelCol']),
    children = _omit.children,
    className = _omit.className,
    label = _omit.label,
    required = _omit.required,
    rules = _omit.rules,
    tooltip = _omit.tooltip,
    help = _omit.help,
    _omit$trigger = _omit.trigger,
    trigger = _omit$trigger === void 0 ? 'onChange' : _omit$trigger,
    onFocus = _omit.onFocus,
    onBlur = _omit.onBlur,
    restProps = _objectWithoutProperties(_omit, _excluded);

  /**
   * Get form instance from current context.
   */
  var form = AntForm.useFormInstance();

  /**
   * Get values from FormContext
   */
  var _useContext = useContext(FormContext),
    size = _useContext.size,
    requiredMark = _useContext.requiredMark,
    onFormItemLabelChange = _useContext.onFormItemLabelChange;

  /**
   * Focused state.
   */
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];

  /**
   * State to track if there are any warnings or errors.
   */
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasWarningOrError = _useState4[0],
    setHasWarningOrError = _useState4[1];

  /**
   * Determine if the field is required based on the rules or the required prop.
   */
  var isRequired = useMemo(function () {
    return required !== undefined ? required : !!(rules !== null && rules !== void 0 && rules.some(function (rule) {
      if (rule && _typeof(rule) === 'object' && rule.required && !rule.warningOnly) {
        return true;
      }
      if (typeof rule === 'function') {
        var ruleEntity = rule(form);
        return (ruleEntity === null || ruleEntity === void 0 ? void 0 : ruleEntity.required) && !(ruleEntity !== null && ruleEntity !== void 0 && ruleEntity.warningOnly);
      }
      return false;
    }));
  }, [form, required, rules]);

  /**
   * Determine the required and optional props for the label.
   */
  var requiredProps = useMemo(function () {
    if (!label) {
      return {
        required: false,
        optional: false
      };
    }
    switch (requiredMark) {
      case undefined:
      case true:
        return {
          required: isRequired,
          optional: false
        };
      case 'optional':
        return {
          required: false,
          optional: !isRequired
        };
      default:
        return {
          required: false,
          optional: false
        };
    }
  }, [label, requiredMark, isRequired]);

  /**
   * Handle focus event on the form item.
   */
  var handleFocus = useCallback(function () {
    var _props, _props$onFocus;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    children === null || children === void 0 || (_props = children.props) === null || _props === void 0 || (_props$onFocus = _props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call.apply(_props$onFocus, [_props].concat(args));
    onFocus === null || onFocus === void 0 || onFocus.apply(void 0, args);
    setFocused(true);
  }, [children, onFocus]);

  /**
   * Handle blur event on the form item.
   */
  var handleBlur = useCallback(function () {
    var _props2, _props2$onBlur;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    children === null || children === void 0 || (_props2 = children.props) === null || _props2 === void 0 || (_props2$onBlur = _props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call.apply(_props2$onBlur, [_props2].concat(args));
    onBlur === null || onBlur === void 0 || onBlur.apply(void 0, args);
    setFocused(false);
  }, [children, onBlur]);

  /**
   * Handle status change for the form item.
   */
  var handleStatusChange = useCallback(function (_ref) {
    var errors = _ref.errors,
      warnings = _ref.warnings;
    setHasWarningOrError((errors === null || errors === void 0 ? void 0 : errors.length) > 0 || (warnings === null || warnings === void 0 ? void 0 : warnings.length) > 0);
  }, []);

  /**
   * Effect to notify the parent form about label changes.
   */
  useEffect(function () {
    onFormItemLabelChange === null || onFormItemLabelChange === void 0 || onFormItemLabelChange({
      name: restProps.name,
      label: label
    });
  }, [label, onFormItemLabelChange, restProps.name]);
  return _jsx(AntForm.Item, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classnames(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-form-item-focused"), focused), "".concat(prefixCls, "-form-item-empty-label"), !label), styles, className),
    label: _jsx(Label, _objectSpread(_objectSpread({}, requiredProps), {}, {
      size: size,
      tooltips: tooltip,
      children: label
    })),
    help: hasWarningOrError ? undefined : help,
    required: required,
    rules: rules,
    trigger: trigger,
    children: typeof children === 'function' ? function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _jsx(FunctionChildrenWrapper, {
        formItemFunctionalArgs: args,
        onStatusChange: handleStatusChange,
        children: children
      });
    } : _jsx(ElementChildrenWrapper, {
      formItemProps: _objectSpread(_objectSpread({}, props), {}, {
        trigger: trigger
      }),
      onFocus: handleFocus,
      onBlur: handleBlur,
      onStatusChange: handleStatusChange,
      children: children
    })
  }));
}
export default FormItem;