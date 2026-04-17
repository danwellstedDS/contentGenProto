"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _ActionTokenMeta = _interopRequireDefault(require("../../Action/token/ActionTokenMeta"));
var _AlertTokenMeta = _interopRequireDefault(require("../../Alert/token/AlertTokenMeta"));
var _ArrowIconTokenMeta = _interopRequireDefault(require("../../ArrowIcon/token/ArrowIconTokenMeta"));
var _BadgeTokenMeta = _interopRequireDefault(require("../../Badge/token/BadgeTokenMeta"));
var _ButtonTokenMeta = _interopRequireDefault(require("../../Button/token/ButtonTokenMeta"));
var _CheckboxTokenMeta = _interopRequireDefault(require("../../Checkbox/token/CheckboxTokenMeta"));
var _CloseButtonTokenMeta = _interopRequireDefault(require("../../CloseButton/token/CloseButtonTokenMeta"));
var _CollapseTokenMeta = _interopRequireDefault(require("../../Collapse/token/CollapseTokenMeta"));
var _DatePickerTokenMeta = _interopRequireDefault(require("../../DatePicker/token/DatePickerTokenMeta"));
var _DividerTokenMeta = _interopRequireDefault(require("../../Divider/token/DividerTokenMeta"));
var _DrawerTokenMeta = _interopRequireDefault(require("../../Drawer/token/DrawerTokenMeta"));
var _FormTokenMeta = _interopRequireDefault(require("../../Form/token/FormTokenMeta"));
var _LabelTokenMeta = _interopRequireDefault(require("../../Label/token/LabelTokenMeta"));
var _MenuTokenMeta = _interopRequireDefault(require("../../Menu/token/MenuTokenMeta"));
var _ModalTokenMeta = _interopRequireDefault(require("../../Modal/token/ModalTokenMeta"));
var _PaginationTokenMeta = _interopRequireDefault(require("../../Pagination/token/PaginationTokenMeta"));
var _PopoverTokenMeta = _interopRequireDefault(require("../../Popover/token/PopoverTokenMeta"));
var _ProgressTokenMeta = _interopRequireDefault(require("../../Progress/token/ProgressTokenMeta"));
var _SegmentedTokenMeta = _interopRequireDefault(require("../../Segmented/token/SegmentedTokenMeta"));
var _SelectTokenMeta = _interopRequireDefault(require("../../Select/token/SelectTokenMeta"));
var _SkeletonTokenMeta = _interopRequireDefault(require("../../Skeleton/token/SkeletonTokenMeta"));
var _StepsTokenMeta = _interopRequireDefault(require("../../Steps/token/StepsTokenMeta"));
var _TableTokenMeta = _interopRequireDefault(require("../../Table/token/TableTokenMeta"));
var _TabsTokenMeta = _interopRequireDefault(require("../../Tabs/token/TabsTokenMeta"));
var _TagTokenMeta = _interopRequireDefault(require("../../Tag/token/TagTokenMeta"));
var _TimePickerTokenMeta = _interopRequireDefault(require("../../TimePicker/token/TimePickerTokenMeta"));
var _ToastTokenMeta = _interopRequireDefault(require("../../Toast/token/ToastTokenMeta"));
var _TreeTokenMeta = _interopRequireDefault(require("../../Tree/token/TreeTokenMeta"));
var _genToken = _interopRequireDefault(require("../../Action/token/genToken"));
var _genToken2 = _interopRequireDefault(require("../../Alert/token/genToken"));
var _genToken3 = _interopRequireDefault(require("../../ArrowIcon/token/genToken"));
var _genToken4 = _interopRequireDefault(require("../../Badge/token/genToken"));
var _genToken5 = _interopRequireDefault(require("../../Button/token/genToken"));
var _genToken6 = _interopRequireDefault(require("../../Checkbox/token/genToken"));
var _genToken7 = _interopRequireDefault(require("../../CloseButton/token/genToken"));
var _genToken8 = _interopRequireDefault(require("../../Collapse/token/genToken"));
var _genToken9 = _interopRequireDefault(require("../../DatePicker/token/genToken"));
var _genToken10 = _interopRequireDefault(require("../../Divider/token/genToken"));
var _genToken11 = _interopRequireDefault(require("../../Drawer/token/genToken"));
var _genToken12 = _interopRequireDefault(require("../../Form/token/genToken"));
var _genToken13 = _interopRequireDefault(require("../../Label/token/genToken"));
var _genToken14 = _interopRequireDefault(require("../../Menu/token/genToken"));
var _genToken15 = _interopRequireDefault(require("../../Modal/token/genToken"));
var _genToken16 = _interopRequireDefault(require("../../Pagination/token/genToken"));
var _genToken17 = _interopRequireDefault(require("../../Popover/token/genToken"));
var _genToken18 = _interopRequireDefault(require("../../Progress/token/genToken"));
var _genToken19 = _interopRequireDefault(require("../../Segmented/token/genToken"));
var _genToken20 = _interopRequireDefault(require("../../Select/token/genToken"));
var _genToken21 = _interopRequireDefault(require("../../Skeleton/token/genToken"));
var _genToken22 = _interopRequireDefault(require("../../Steps/token/genToken"));
var _genToken23 = _interopRequireDefault(require("../../Table/token/genToken"));
var _genToken24 = _interopRequireDefault(require("../../Tabs/token/genToken"));
var _genToken25 = _interopRequireDefault(require("../../Tag/token/genToken"));
var _genToken26 = _interopRequireDefault(require("../../TimePicker/token/genToken"));
var _genToken27 = _interopRequireDefault(require("../../Toast/token/genToken"));
var _genToken28 = _interopRequireDefault(require("../../Tree/token/genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @file tokenMeta.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Statics
// Vendors
var componentsToken = {
  Action: (0, _genToken.default)(_neatDesignToken.defaultToken),
  Alert: (0, _genToken2.default)(_neatDesignToken.defaultToken),
  ArrowIcon: (0, _genToken3.default)(_neatDesignToken.defaultToken),
  Badge: (0, _genToken4.default)(_neatDesignToken.defaultToken),
  Button: (0, _genToken5.default)(_neatDesignToken.defaultToken),
  Checkbox: (0, _genToken6.default)(_neatDesignToken.defaultToken),
  CloseButton: (0, _genToken7.default)(_neatDesignToken.defaultToken),
  Collapse: (0, _genToken8.default)(_neatDesignToken.defaultToken),
  DatePicker: (0, _genToken9.default)(_neatDesignToken.defaultToken),
  Divider: (0, _genToken10.default)(_neatDesignToken.defaultToken),
  Drawer: (0, _genToken11.default)(_neatDesignToken.defaultToken),
  Form: (0, _genToken12.default)(_neatDesignToken.defaultToken),
  Label: (0, _genToken13.default)(_neatDesignToken.defaultToken),
  Menu: (0, _genToken14.default)(_neatDesignToken.defaultToken),
  Modal: (0, _genToken15.default)(_neatDesignToken.defaultToken),
  Pagination: (0, _genToken16.default)(_neatDesignToken.defaultToken),
  Popover: (0, _genToken17.default)(_neatDesignToken.defaultToken),
  Progress: (0, _genToken18.default)(_neatDesignToken.defaultToken),
  Segmented: (0, _genToken19.default)(_neatDesignToken.defaultToken),
  Select: (0, _genToken20.default)(_neatDesignToken.defaultToken),
  Skeleton: (0, _genToken21.default)(_neatDesignToken.defaultToken),
  Steps: (0, _genToken22.default)(_neatDesignToken.defaultToken),
  Table: (0, _genToken23.default)(_neatDesignToken.defaultToken),
  Tabs: (0, _genToken24.default)(_neatDesignToken.defaultToken),
  Tag: (0, _genToken25.default)(_neatDesignToken.defaultToken),
  TimePicker: (0, _genToken26.default)(_neatDesignToken.defaultToken),
  Toast: (0, _genToken27.default)(_neatDesignToken.defaultToken),
  Tree: (0, _genToken28.default)(_neatDesignToken.defaultToken)
};
var tokenMeta = {
  global: _neatDesignToken.globalTokenMeta,
  components: {
    Action: _ActionTokenMeta.default,
    Alert: _AlertTokenMeta.default,
    ArrowIcon: _ArrowIconTokenMeta.default,
    Badge: _BadgeTokenMeta.default,
    Button: _ButtonTokenMeta.default,
    Checkbox: _CheckboxTokenMeta.default,
    CloseButton: _CloseButtonTokenMeta.default,
    Collapse: _CollapseTokenMeta.default,
    DatePicker: _DatePickerTokenMeta.default,
    Divider: _DividerTokenMeta.default,
    Drawer: _DrawerTokenMeta.default,
    Form: _FormTokenMeta.default,
    Label: _LabelTokenMeta.default,
    Menu: _MenuTokenMeta.default,
    Modal: _ModalTokenMeta.default,
    Pagination: _PaginationTokenMeta.default,
    Popover: _PopoverTokenMeta.default,
    Progress: _ProgressTokenMeta.default,
    Segmented: _SegmentedTokenMeta.default,
    Select: _SelectTokenMeta.default,
    Skeleton: _SkeletonTokenMeta.default,
    Steps: _StepsTokenMeta.default,
    Table: _TableTokenMeta.default,
    Tabs: _TabsTokenMeta.default,
    Tag: _TagTokenMeta.default,
    Toast: _ToastTokenMeta.default,
    TimePicker: _TimePickerTokenMeta.default,
    Tree: _TreeTokenMeta.default
  }
};

// 将类型defaultToken取出
tokenMeta.global = Object.keys(tokenMeta.global).reduce(function (v, i) {
  v[i] = _objectSpread(_objectSpread({}, tokenMeta.global[i]), {}, {
    type: _typeof(_neatDesignToken.defaultToken[i])
  });
  return v;
}, {});

// 将类型从 compent 对应的 Token取出
tokenMeta.components = Object.keys(tokenMeta.components).reduce(function (v, i) {
  var componentToken = componentsToken[i];
  v[i] = tokenMeta.components[i].map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      type: _typeof(componentToken[item.token])
    });
  });
  return v;
}, {});
var _default = exports.default = tokenMeta;