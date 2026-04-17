"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowRightOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file ExpandIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Icons

// Vendors

// Types

function expandIcon(_ref) {
  var prefixCls = _ref.prefixCls,
    onExpand = _ref.onExpand,
    record = _ref.record,
    expanded = _ref.expanded,
    expandable = _ref.expandable;
  return expandable && (0, _jsxRuntime.jsx)("i", {
    className: (0, _classnames.default)("".concat(prefixCls, "-expend-icon"), {
      expandable: expandable,
      expanded: expanded
    }),
    "aria-expanded": expanded,
    onClick: function onClick(e) {
      onExpand(record, e);
      e.stopPropagation();
    },
    children: (0, _jsxRuntime.jsx)(_ArrowRightOutlined2.default, {})
  });
}
var _default = exports.default = expandIcon;