function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file tokenMeta.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken, globalTokenMeta } from '@derbysoft/neat-design-token';
import ActionTokenMeta from "../../Action/token/ActionTokenMeta";
import AlertTokenMeta from "../../Alert/token/AlertTokenMeta";
import ArrowIconTokenMeta from "../../ArrowIcon/token/ArrowIconTokenMeta";
import BadgeTokenMeta from "../../Badge/token/BadgeTokenMeta";
import ButtonTokenMeta from "../../Button/token/ButtonTokenMeta";
import CheckboxTokenMeta from "../../Checkbox/token/CheckboxTokenMeta";
import CloseButtonTokenMeta from "../../CloseButton/token/CloseButtonTokenMeta";
import CollapseTokenMeta from "../../Collapse/token/CollapseTokenMeta";
import DatePickerTokenMeta from "../../DatePicker/token/DatePickerTokenMeta";
import DividerTokenMeta from "../../Divider/token/DividerTokenMeta";
import DrawerTokenMeta from "../../Drawer/token/DrawerTokenMeta";
import FormTokenMeta from "../../Form/token/FormTokenMeta";
import LabelTokenMeta from "../../Label/token/LabelTokenMeta";
import MenuTokenMeta from "../../Menu/token/MenuTokenMeta";
import ModalTokenMeta from "../../Modal/token/ModalTokenMeta";
import PaginationTokenMeta from "../../Pagination/token/PaginationTokenMeta";
import PopoverTokenMeta from "../../Popover/token/PopoverTokenMeta";
import ProgressTokenMeta from "../../Progress/token/ProgressTokenMeta";
import SegmentedTokenMeta from "../../Segmented/token/SegmentedTokenMeta";
import SelectTokenMeta from "../../Select/token/SelectTokenMeta";
import SkeletonTokenMeta from "../../Skeleton/token/SkeletonTokenMeta";
import StepsTokenMeta from "../../Steps/token/StepsTokenMeta";
import TableTokenMeta from "../../Table/token/TableTokenMeta";
import TabsTokenMeta from "../../Tabs/token/TabsTokenMeta";
import TagTokenMeta from "../../Tag/token/TagTokenMeta";
import TimePickerTokenMeta from "../../TimePicker/token/TimePickerTokenMeta";
import ToastTokenMeta from "../../Toast/token/ToastTokenMeta";
import TreeTokenMeta from "../../Tree/token/TreeTokenMeta";

// Vendors
import genActionToken from "../../Action/token/genToken";
import genAlertToken from "../../Alert/token/genToken";
import genArrowIconToken from "../../ArrowIcon/token/genToken";
import genBadgeToken from "../../Badge/token/genToken";
import genButtonToken from "../../Button/token/genToken";
import genCheckboxToken from "../../Checkbox/token/genToken";
import genCloseButtonToken from "../../CloseButton/token/genToken";
import genCollapseToken from "../../Collapse/token/genToken";
import genDatePickerToken from "../../DatePicker/token/genToken";
import genDividerToken from "../../Divider/token/genToken";
import genDrawerToken from "../../Drawer/token/genToken";
import genFormToken from "../../Form/token/genToken";
import genLabelToken from "../../Label/token/genToken";
import genMenuToken from "../../Menu/token/genToken";
import genModalToken from "../../Modal/token/genToken";
import genPaginationToken from "../../Pagination/token/genToken";
import genPopoverToken from "../../Popover/token/genToken";
import genProgressToken from "../../Progress/token/genToken";
import genSemgentedToken from "../../Segmented/token/genToken";
import genSelectToken from "../../Select/token/genToken";
import genSkeletonToken from "../../Skeleton/token/genToken";
import genStepsToken from "../../Steps/token/genToken";
import genTableToken from "../../Table/token/genToken";
import genTabsToken from "../../Tabs/token/genToken";
import genTagToken from "../../Tag/token/genToken";
import genTimePickerToken from "../../TimePicker/token/genToken";
import genToastToken from "../../Toast/token/genToken";
import genTreeToken from "../../Tree/token/genToken";
var componentsToken = {
  Action: genActionToken(defaultToken),
  Alert: genAlertToken(defaultToken),
  ArrowIcon: genArrowIconToken(defaultToken),
  Badge: genBadgeToken(defaultToken),
  Button: genButtonToken(defaultToken),
  Checkbox: genCheckboxToken(defaultToken),
  CloseButton: genCloseButtonToken(defaultToken),
  Collapse: genCollapseToken(defaultToken),
  DatePicker: genDatePickerToken(defaultToken),
  Divider: genDividerToken(defaultToken),
  Drawer: genDrawerToken(defaultToken),
  Form: genFormToken(defaultToken),
  Label: genLabelToken(defaultToken),
  Menu: genMenuToken(defaultToken),
  Modal: genModalToken(defaultToken),
  Pagination: genPaginationToken(defaultToken),
  Popover: genPopoverToken(defaultToken),
  Progress: genProgressToken(defaultToken),
  Segmented: genSemgentedToken(defaultToken),
  Select: genSelectToken(defaultToken),
  Skeleton: genSkeletonToken(defaultToken),
  Steps: genStepsToken(defaultToken),
  Table: genTableToken(defaultToken),
  Tabs: genTabsToken(defaultToken),
  Tag: genTagToken(defaultToken),
  TimePicker: genTimePickerToken(defaultToken),
  Toast: genToastToken(defaultToken),
  Tree: genTreeToken(defaultToken)
};
var tokenMeta = {
  global: globalTokenMeta,
  components: {
    Action: ActionTokenMeta,
    Alert: AlertTokenMeta,
    ArrowIcon: ArrowIconTokenMeta,
    Badge: BadgeTokenMeta,
    Button: ButtonTokenMeta,
    Checkbox: CheckboxTokenMeta,
    CloseButton: CloseButtonTokenMeta,
    Collapse: CollapseTokenMeta,
    DatePicker: DatePickerTokenMeta,
    Divider: DividerTokenMeta,
    Drawer: DrawerTokenMeta,
    Form: FormTokenMeta,
    Label: LabelTokenMeta,
    Menu: MenuTokenMeta,
    Modal: ModalTokenMeta,
    Pagination: PaginationTokenMeta,
    Popover: PopoverTokenMeta,
    Progress: ProgressTokenMeta,
    Segmented: SegmentedTokenMeta,
    Select: SelectTokenMeta,
    Skeleton: SkeletonTokenMeta,
    Steps: StepsTokenMeta,
    Table: TableTokenMeta,
    Tabs: TabsTokenMeta,
    Tag: TagTokenMeta,
    Toast: ToastTokenMeta,
    TimePicker: TimePickerTokenMeta,
    Tree: TreeTokenMeta
  }
};

// 将类型defaultToken取出
tokenMeta.global = Object.keys(tokenMeta.global).reduce(function (v, i) {
  v[i] = _objectSpread(_objectSpread({}, tokenMeta.global[i]), {}, {
    type: _typeof(defaultToken[i])
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
export default tokenMeta;