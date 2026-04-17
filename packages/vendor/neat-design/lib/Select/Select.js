"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SearchOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/SearchOutlined"));
var _CloseCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled"));
var _SuccessOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/SuccessOutlined"));
var _ArrowDownOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowDownOutlined"));
var _react = require("react");
var _useConvertSize = require("../hooks/useConvertSize");
var _usePrefixCls = _interopRequireDefault(require("../hooks/usePrefixCls"));
var _style = _interopRequireDefault(require("./style"));
var _overlay = _interopRequireDefault(require("./style/overlay"));
var _antd = require("antd");
var _Checkbox = _interopRequireDefault(require("../Checkbox"));
var _CloseButton = _interopRequireDefault(require("../CloseButton"));
var _Tag = _interopRequireDefault(require("../Tag"));
var _classnames = _interopRequireDefault(require("classnames"));
var _isBoolean = _interopRequireDefault(require("lodash/isBoolean"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["options", "fieldNames", "size", "loading", "allowClear", "defaultActiveFirstOption", "suffixIcon", "onDropdownVisibleChange", "menuItemSelectedIcon", "tagRender", "readOnly", "popupClassName", "onChange", "optionRender"],
  _excluded2 = ["icon"];
/**
 * @file Select.tsx
 * @author rzh(peter.rao@derbysoft.net)
 */
// Hooks
// Components
// Icons
// Vendors
// Types
// Export props type
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
var Select = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _restProps$open;
  var options = _ref.options,
    fieldNames = _ref.fieldNames,
    size = _ref.size,
    loading = _ref.loading,
    allowClear = _ref.allowClear,
    _ref$defaultActiveFir = _ref.defaultActiveFirstOption,
    defaultActiveFirstOption = _ref$defaultActiveFir === void 0 ? false : _ref$defaultActiveFir,
    _ref$suffixIcon = _ref.suffixIcon,
    suffixIcon = _ref$suffixIcon === void 0 ? (0, _jsxRuntime.jsx)(_ArrowDownOutlined2.default, {}) : _ref$suffixIcon,
    onDropdownVisibleChange = _ref.onDropdownVisibleChange,
    _ref$menuItemSelected = _ref.menuItemSelectedIcon,
    menuItemSelectedIcon = _ref$menuItemSelected === void 0 ? (0, _jsxRuntime.jsx)(_SuccessOutlined2.default, {}) : _ref$menuItemSelected,
    customTagRender = _ref.tagRender,
    readOnly = _ref.readOnly,
    popupClassName = _ref.popupClassName,
    onChange = _ref.onChange,
    optionRender = _ref.optionRender,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var prefixCls = (0, _usePrefixCls.default)();
  var cSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size);
  var styles = (0, _style.default)({
    size: size
  });
  var overlayStyles = (0, _overlay.default)();
  var _useState = (0, _react.useState)((_restProps$open = restProps === null || restProps === void 0 ? void 0 : restProps.open) !== null && _restProps$open !== void 0 ? _restProps$open : false),
    _useState2 = _slicedToArray(_useState, 2),
    dropdownVisible = _useState2[0],
    setDropdownVisible = _useState2[1];
  var defaultTagRender = function defaultTagRender() {
    var selectSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
    return function (props) {
      // eslint-disable-next-line react/prop-types
      var label = props.label,
        closable = props.closable,
        onClose = props.onClose;
      var onPreventMouseDown = function onPreventMouseDown(event) {
        event.preventDefault();
        event.stopPropagation();
      };
      return (0, _jsxRuntime.jsx)(_Tag.default, {
        color: "neutral",
        onMouseDown: onPreventMouseDown
        // TODO Mode of compatibility
        ,
        closable: closable,
        closeIcon: closable,
        onClose: onClose,
        size: selectSize,
        children: label
      });
    };
  };

  /**
   * Get "label" key from fieldNames
   */
  var labelKey = (0, _react.useMemo)(function () {
    return (fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.label) || 'label';
  }, [fieldNames]);

  // /**
  //  * Get "value" key from fieldNames
  //  */
  // const valueKey = useMemo(() => {
  //     return fieldNames?.value || 'value';
  // }, [fieldNames]);

  /**
   * Handle "icon" property in options
   */
  var computedOptions = (0, _react.useMemo)(function () {
    var _options$map;
    return options === null || options === void 0 || (_options$map = options.map) === null || _options$map === void 0 ? void 0 : _options$map.call(options, function (option) {
      if (!option) {
        return option;
      }
      if (!(option !== null && option !== void 0 && option.icon)) {
        return option;
      }
      var icon = option.icon,
        restOption = _objectWithoutProperties(option, _excluded2);
      return _objectSpread(_objectSpread({}, restOption), {}, _defineProperty({}, labelKey, (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsx)("span", {
          className: "".concat(prefixCls, "-select-item-icon"),
          children: icon
        }), option[labelKey]]
      })));
    });
  }, [prefixCls, options, labelKey]);
  var computedAllowClear = allowClear ? {
    clearIcon: (0, _jsxRuntime.jsx)(_CloseCircleFilled2.default, {})
  } : false;
  var cls = (0, _classnames.default)(styles, restProps === null || restProps === void 0 ? void 0 : restProps.className, _defineProperty({}, "".concat(prefixCls, "-select-readonly"), readOnly));
  var readOnlyProps = readOnly ? {
    disabled: true
  } : {};
  var tagRender = customTagRender !== null && customTagRender !== void 0 ? customTagRender : defaultTagRender(size);
  var handleDropdownVisibleChange = function handleDropdownVisibleChange(open) {
    if (!(0, _isBoolean.default)(restProps === null || restProps === void 0 ? void 0 : restProps.open)) {
      setDropdownVisible(open);
    }
    onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 || onDropdownVisibleChange(open);
  };
  var computeSuffixIcon = (0, _react.useMemo)(function () {
    if (loading) return undefined;
    if (restProps !== null && restProps !== void 0 && restProps.showSearch && dropdownVisible) {
      return (0, _jsxRuntime.jsx)(_SearchOutlined2.default, {});
    }
    return suffixIcon;
  }, [dropdownVisible, loading, restProps === null || restProps === void 0 ? void 0 : restProps.showSearch, suffixIcon]);

  /**
   * generate ’menuItemSelectedIcon‘
   */
  var computedMenuItemSelectedIcon = (0, _react.useMemo)(function () {
    if (!(restProps !== null && restProps !== void 0 && restProps.mode)) {
      return menuItemSelectedIcon;
    } else {
      return null;
    }
  }, [menuItemSelectedIcon, restProps === null || restProps === void 0 ? void 0 : restProps.mode]);
  var _useState3 = (0, _react.useState)(restProps === null || restProps === void 0 ? void 0 : restProps.defaultValue),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedValues = _useState4[0],
    setSelectedValues = _useState4[1];

  /**
   * generate ’popupClassName‘
   */
  var mergedPopupCls = (0, _classnames.default)(popupClassName, overlayStyles, _defineProperty({}, "select-popup-".concat(restProps === null || restProps === void 0 ? void 0 : restProps.mode), !!(restProps !== null && restProps !== void 0 && restProps.mode)));

  /**
   * validate here is two-way binding
   */
  var isTwoWayBinding = (0, _react.useMemo)(function () {
    // eslint-disable-next-line no-prototype-builtins
    return restProps === null || restProps === void 0 ? void 0 : restProps.hasOwnProperty('value');
  }, [restProps]);

  /**
   * update selectedValues when two-way binding
   */
  (0, _react.useEffect)(function () {
    if (((restProps === null || restProps === void 0 ? void 0 : restProps.mode) === 'multiple' || (restProps === null || restProps === void 0 ? void 0 : restProps.mode) === 'tags') && isTwoWayBinding) {
      setSelectedValues(restProps === null || restProps === void 0 ? void 0 : restProps.value);
    }
  }, [isTwoWayBinding, restProps === null || restProps === void 0 ? void 0 : restProps.mode, restProps === null || restProps === void 0 ? void 0 : restProps.value]);

  /**
   * proxy 'onChange' event
   */
  var handleChange = function handleChange(value, option) {
    setSelectedValues(value);
    onChange === null || onChange === void 0 || onChange(value, option);
  };

  /**
   * generate 'optionRender'
   */
  var customOptionRender = (0, _react.useMemo)(function () {
    var labelInValue = restProps === null || restProps === void 0 ? void 0 : restProps.labelInValue;
    switch (restProps === null || restProps === void 0 ? void 0 : restProps.mode) {
      case 'multiple':
      case 'tags':
        {
          var $selectedValues = selectedValues;
          if (labelInValue) {
            if ((0, _isString.default)(selectedValues)) {
              console.warn("when the Select mode is 'multiple' or 'tags' your value & defaultValue in props must be an array, then it is a string.");
              $selectedValues = [];
            } else {
              $selectedValues = selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.map(function ($option) {
                return $option === null || $option === void 0 ? void 0 : $option.value;
              });
            }
          }
          return function (option, info) {
            var _$selectedValues;
            var value = option.value,
              label = option.label;
            var checked = (_$selectedValues = $selectedValues) === null || _$selectedValues === void 0 ? void 0 : _$selectedValues.includes(value);
            return (0, _jsxRuntime.jsxs)(_antd.Space, {
              children: [(0, _jsxRuntime.jsx)(_Checkbox.default, {
                size: size,
                checked: checked
              }), optionRender ?
              // @ts-ignore
              optionRender(option, info) : label]
            });
          };
        }
      default:
        return optionRender;
    }
  }, [restProps === null || restProps === void 0 ? void 0 : restProps.labelInValue, restProps === null || restProps === void 0 ? void 0 : restProps.mode, optionRender, selectedValues, size]);
  return (0, _jsxRuntime.jsx)(_antd.Select, _objectSpread(_objectSpread({}, restProps), {}, {
    ref: ref,
    size: cSize,
    tagRender: tagRender,
    options: computedOptions,
    fieldNames: fieldNames,
    allowClear: computedAllowClear,
    defaultActiveFirstOption: defaultActiveFirstOption,
    loading: loading,
    suffixIcon: computeSuffixIcon,
    onDropdownVisibleChange: handleDropdownVisibleChange,
    menuItemSelectedIcon: computedMenuItemSelectedIcon,
    removeIcon: (0, _jsxRuntime.jsx)(_CloseButton.default, {}),
    popupClassName: mergedPopupCls,
    optionRender: customOptionRender,
    onChange: handleChange,
    className: cls
  }, readOnlyProps));
});
var _default = exports.default = Select;