"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollBarStyle = exports.default = exports.Direction = void 0;
var _react = require("react");
var _ = require("./");
var _classnames = _interopRequireDefault(require("classnames"));
var _templateObject;
/**
 * @file ScrollBar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Vendors
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Direction = exports.Direction = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};
// cache
var tempSize = {
  vertical: null,
  horizontal: null
};
var useScrollBarStyle = exports.useScrollBarStyle = function useScrollBarStyle() {
  var createStyles = (0, _.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-scroll-bar-for-measure {\n                position: absolute;\n                top: -9999px;\n                width: 50px;\n                height: 50px;\n\n                &.horizontal {\n                    overflow-x: scroll;\n                }\n\n                &.vertical {\n                    overflow-y: scroll;\n                }\n            }\n        "])), prefixCls);
  });
};
var useScrollBar = function useScrollBar() {
  var _useScrollBarStyle = useScrollBarStyle(),
    styles = _useScrollBarStyle.styles;
  var getSize = (0, _react.useCallback)(function () {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Direction.VERTICAL;
    if (document == null || window == null) {
      return 0;
    }
    var isVertical = direction === Direction.VERTICAL;
    if (isVertical && tempSize.vertical !== null) {
      return tempSize.vertical;
    } else if (!isVertical && tempSize.horizontal != null) {
      return tempSize.horizontal;
    }
    var scrollDiv = document.createElement('div');
    scrollDiv.className = (0, _classnames.default)(styles, direction);
    document.body.appendChild(scrollDiv);
    var size;
    if (isVertical) {
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      tempSize.vertical = size;
    } else {
      size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
      tempSize.horizontal = size;
    }
    document.body.removeChild(scrollDiv);
    return size;
  }, [styles]);
  var hasPlaceholderScrollBar = (0, _react.useCallback)(function () {
    return getSize() > 0;
  }, [getSize]);
  return {
    getSize: getSize,
    hasPlaceholderScrollBar: hasPlaceholderScrollBar
  };
};
var _default = exports.default = useScrollBar;